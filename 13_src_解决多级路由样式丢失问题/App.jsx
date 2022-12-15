import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Head from "./components/Head";
import MyNavLink from "./components/MyNavLink";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
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
                                1.public/index.html 中 引入样式时不写 ./ 写 / （常用）
			                    2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
			                    3.使用HashRouter
                                */}
                                <MyNavLink to="/laozi/about">About</MyNavLink>
                                <MyNavLink to="/laozi/home">Home</MyNavLink>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    {/* 若没有Switch,Home组件和Test组件都会被加载，加了Switch内置组件后，只匹配第一个Home组件，提高了路由匹配效率(单一匹配) */}
                                    <Switch>
                                        <Route
                                            path="/about"
                                            component={About}
                                        />
                                        <Route
                                            path="/laozi/home"
                                            component={Home}
                                        />
                                        <Route
                                            path="/laozi/home"
                                            component={Test}
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
