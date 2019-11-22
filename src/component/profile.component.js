
import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Profile extends Component {
    render() {
        return (
            <div id="landing" class="profileLanding">
                <div id="profilePadder">
                    <div id="profile">
                        <div className="row">
                            <h1 id="profileWelcome"> Welcome, Rohit!</h1>
                            <div></div>
                        </div>
                        <div className="row">
                            <div id="profileBooks">
                                <div>
                                    Listing #1
                                </div>
                            </div>
                            <div id="listings">
                                <div >Create Listing</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}