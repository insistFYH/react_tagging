import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import Message from "./Message";
import News from "./News";
export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">news</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">message</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path="/home/news" component={News} />
                            <Route path="/home/message" component={Message} />
                            <Redirect to="/home/news" />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
