import React, { Component } from "react";
import { Route } from "react-router-dom";
import Head from "./components/Head";
import MyNavLink from "./components/MyNavLink";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
export default class App extends Component {
    render() {
        return (
            <div id="root">
                <div>
                    <Head></Head>
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

                                {/* <NavLink
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
                                </NavLink> */}
                                <MyNavLink to="/about">About</MyNavLink>
                                <MyNavLink to="/home">Home</MyNavLink>
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
