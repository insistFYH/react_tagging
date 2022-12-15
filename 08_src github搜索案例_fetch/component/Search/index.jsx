import React, { Component } from "react";
import PubSub from "pubsub-js";
// import axios from "axios";
export default class Search extends Component {
    //搜索用户
    searchUser = async () => {
        //结构赋值+重命名
        const {
            keywordElement: { value: keyWord },
        } = this;
        //loading中
        PubSub.publish("users", { isFirst: false, isLoading: true });
        //发请求获取数据，更新状态信息
        //#region
        // aixos发送请求
        // axios.get(`http://localhost:3000/api/search/users2?q=${keyWord}`).then(
        //     (response) => {
        //         console.log("请求成功！");
        //         PubSub.publish("users", {
        //             users: response.data.items,
        //             isLoading: false,
        //         });
        //     },
        //     (err) => {
        //         console.log("请求失败");
        //         // this.props.updateState({ isLoading: false, err: err.message });
        //         PubSub.publish("users", { isLoading: false, err: err.message });
        //     }
        // );
        //#endregion
        //#region
        //fetch发送请求,--未优化
        // fetch(`http://localhost:3000/api/search/users2?q=${keyWord}`)
        //     .then(
        //         (response) => {
        //             console.log("请求接口成功");
        //json()为response原型对象上的一个方法，与JSON进行区分
        //             return response.json();
        //         },
        //         (err) => {
        //             console.log("请求接口失败");
        //             // return err.message;
        //             return new Promise(() => {});
        //         }
        //     )
        //     .then(
        //         (response) => {
        //             console.log("请求数据成功", response);
        //         },
        //         (err) => {
        //             console.log("请求数据失败", err.message);
        //         }
        //     );
        //#endregion
        //fetch发送请求,--优化
        try {
            const response = await fetch(
                `http://localhost:3000/api/search/users2?q=${keyWord}`
            );
            const data = await response.json();
            console.log("请求数据成功");
            PubSub.publish("users", { users: data.items, isLoading: false });
        } catch (error) {
            console.log("请求数据失败");
            PubSub.publish("users", { isLoading: false, err: error.message });
        }
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
