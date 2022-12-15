import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";
export default class Search extends Component {
    //搜索用户
    searchUser = () => {
        //结构赋值+重命名
        const {
            keywordElement: { value: keyWord },
        } = this;
        //loading中
        // this.props.updateState({
        //     // users: [],
        //     isFirst: false,
        //     isLoading: true,
        //     // err: "",
        // });
        PubSub.publish("users", { isFirst: false, isLoading: true });
        //发请求获取数据，更新状态信息
        axios.get(`http://localhost:3000/api/search/users2?q=${keyWord}`).then(
            (response) => {
                console.log("请求成功！");
                // this.props.updateState({
                //     users: response.data.items,
                //     isLoading: false,
                // });
                PubSub.publish("users", {
                    users: response.data.items,
                    isLoading: false,
                });
            },
            (err) => {
                console.log("请求失败");
                // this.props.updateState({ isLoading: false, err: err.message });
                PubSub.publish("users", { isLoading: false, err: err.message });
            }
        );
    };
    render() {
        return (
            <section className="jumbotron">
                <div>
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <input
                        type="text"
                        placeholder="enter the name you search"
                        ref={(c) => {
                            this.keywordElement = c;
                        }}
                    />
                    &nbsp;<button onClick={this.searchUser}>Search</button>
                </div>
            </section>
        );
    }
}
