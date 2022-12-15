import React, { Component } from "react";

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
        const { id, title } = this.props.match.params;
        console.log(this.props);
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
