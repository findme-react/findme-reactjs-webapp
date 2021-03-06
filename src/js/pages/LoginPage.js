import React from "react";

import LoginHeader from "../components/LoginHeader";
import LoginInfoBox from "../components/LoginInfoBox";
import LoginDreiPunkte from "../components/LoginDreiPunkte";
import LoginFooter from "../components/LoginFooter";

export default class LoginViewComponent extends React.Component {
    constructor(props) {
        super(props);

        if (localStorage.getItem("sessionUserId")) {
            location.href = "#/profile";
        }
    }

    render() {
        return (
            <div>
                <LoginHeader/>
                <LoginInfoBox/>
                <LoginDreiPunkte/>
                <LoginFooter/>
            </div>
        );
    }
}
