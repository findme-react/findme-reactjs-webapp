import React from "react";
import Image from "./DefaultImage";

export default class LogoutComponent extends React.Component {


    createContent() {
        return <div className="container">
            <div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-4">
                        <div>
                            <font size="10">Logout erfolgreich!</font>
                            <br/><br/><br/>
                            </div>
                        <div>
                        Vielen Dank für deinen Besuch
                            </div>
                        <div>
                        Weitere Singles warten auf dich</div>
                            <div>
                        Entdecke neue Freundschaften
                                </div>
                        <div>
                            <br/>
                            <button type="button" className="btn btn-link btn-lg">
                                <span className="glyphicon glyphicon-menu-left"></span> Zurück zu find.me 
                            </button>
                        </div>
                        </div>

            </div>
        </div>
            </div>;
    }



    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}