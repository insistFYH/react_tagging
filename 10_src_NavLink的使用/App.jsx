import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import "./App.css";
export default class App extends Component {
    render() {
        return (
            <div id="root">
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <div className="page-header">
                                <h2>React Router Demo</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                {/* <a class="list-group-item" href="./about.html">
                                    About
                                </a>
                                <a
                                    class="list-group-item active"
                                    href="./home.html"
                                >
                                    Home
                                </a> 
                                属性activeClassName动态添加样式名，默认值为active，也可自定义
                                */}

                                <NavLink
                                    activeClassName="laozi"
                                    className="list-group-item"
                                    to="/about"
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    activeClassName="laozi"
                                    className="list-group-item"
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
