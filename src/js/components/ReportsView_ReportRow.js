import React from "react";
import q from "q";
import _ from "lodash";

import AdminService from "../services/AdminService";

export default class FriendsListTab_FriendRow extends React.Component {
	
	constructor(props) {
        super(props);
		
		this.state = {};
		
		this.ignoreCase = this.ignoreCase.bind(this);
		this.deleteProfile = this.deleteProfile.bind(this);
    }
	
	render() {
        let self = this;

		return (
			<div className="row">
				<div className="col-md-12">
					<font size="5"> {self.state.profileName} </font><br />
					<button type="button" className="btn btn-link" onClick={self.ignoreCase} style={{marginLeft:"25px", paddingLeft:"10px", paddingRight:"10px"}}>
						<span className="glyphicon glyphicon-sunglasses"></span> Fall ignorieren
					</button>
					<button type="button" className="btn btn-link" onClick={self.deleteProfile} style={{marginLeft:"25px", paddingLeft:"10px", paddingRight:"10px"}}>
						<span className="glyphicon glyphicon-remove"></span> Profil löschen
					</button>
				</div>
			</div>
		);
    }
	
	componentDidMount() {
        let self = this;
        let adminService = new AdminService();

		adminService.getProfile(self.props.profileID)
            .then(function(data) {
				if (data[0]) {
					self.setState({userID: data[0].user_id});
					adminService.getUser(data[0].user_id)
						.then(function(data) {
							if (data[0]) {
								self.setState({profileName: data[0].login});
							}
							else {
								console.log("Warning: Profile '" + self.props.profileID + "'" + " has an unknown user-id");
							}
						})
						.catch(function(err) {
							console.log(err);
						});
				}
				else {
					console.log("Warning: Profile with profile id '" + self.props.profileID + "'" + " not found!");
				}
            })
            .catch(function(err) {
                console.log(err);
            });
    }
	
	ignoreCase() {
		let self = this;
		let adminService = new AdminService();
		
		adminService.removeReportedMark(self.props.profileID, {
			success: function() {
				window.location.reload();
			}
        });
	}
	
	deleteProfile() {
		let self = this;
		let adminService = new AdminService();
		
		adminService.deleteUser(self.state.userID, {
			success: function() {
			}
        });
		
		adminService.deleteProfile(self.props.profileID, {
			success: function() {
				window.location.reload();
			}
        });
	}
}
