import React from "react";

import ProfileService from "../services/ProfilService";
import FriendsListService from "../services/FriendsListService";

export default class FriendProfileInterests extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            interestsElements: []
        };
    }

    render() {
        let self = this;

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Interessen</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {self.state.interestsElements}
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let self = this;
        let friendsListService = new FriendsListService();

        console.log("profile view id: " + self.props.profileID);
        friendsListService.getProfile(self.props.profileID)
            .then(function (profileData) {
           //     friendsListService.getUser(profileData[0].user_id)
           //         .then(function (userData) {
                        let aboutme = profileData[0].aboutme;

                        let aboutmeParts = aboutme.split("#");
                        let interests = aboutmeParts[1].split("+");

                        let interestsElements = self.state.interestsElements;

                        for (let i = 0; i < interests.length; i++) {
                            let interest = interests[i];

                            if (interest && interest.trim()) {
                                interest = interest.trim();

                                interestsElements.push(
                                    <div key={Math.random()} className="box_interessen"
                                         style={{
                                    color: "#ffffff",
                                    backgroundColor: "#eb9316",
                                    fontWeight: "bold",
                                    borderRadius: "4px",
                                    float: "left",
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                    paddingLeft: "15px",
                                    paddingRight: "15px",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                    marginRight: "10px",
                                    marginLeft: "0px"
                                }}>
                                        {interest}
                                    </div>
                                );
                            }
                        }

                self.setState({
                    interestsElements: interestsElements
                });

                        console.log("Interests acquired");
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
    }
}
