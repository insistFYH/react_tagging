import React, { Component } from "react";
import Search from "./component/Search";
import List from "./component/List";

export default class App extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: "",
    };
    //更新状态信息
    updateState = (newState) => {
        this.setState(newState);
    };
    render() {
        return (
            <div id="app">
                <div className="container">
                    <Search updateState={this.updateState}></Search>
                    <List {...this.state}></List>
                </div>
            </div>
        );
    }
}
