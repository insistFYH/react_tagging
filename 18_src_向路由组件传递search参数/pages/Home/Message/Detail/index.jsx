import React, { Component } from "react";
import qs from "querystringify";
const contentArr = [
    {
        id: "1",
        content: "你好，中国",
    },
    {
        id: "2",
        content: "你好，广东",
    },
    {
        id: "3",
        content: "你好，广州",
    },
];

export default class Detail extends Component {
    render() {
        console.log(this.props);
        const { search } = this.props.location;
        console.log(search.slice(1));
        //search为urlcode格式
        const { id, title } = qs.parse(search.slice(1));
        const findResult = contentArr.find((contentObj) => {
            return id === contentObj.id;
        });
        console.log(findResult);
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findResult.content}</li>
            </ul>
        );
    }
}
