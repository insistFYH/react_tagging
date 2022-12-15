import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
                                </NavLink> 
                                1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
			                    2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
			                    3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
                                */}
                                <MyNavLink to="/about">About</MyNavLink>
                                <MyNavLink to="/home/b/a">Home</MyNavLink>
                                {/* <MyNavLink to="/home/b/a">Home</MyNavLink> 此时能够匹配/home，为模糊匹配,Route中加了exact为严格匹配 */}
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    <Switch>
                                        <Route
                                            exact
                                            path="/about"
                                            component={About}
                                        />
                                        <Route
                                            exact
                                            path="/home"
                                            component={Home}
                                        />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
