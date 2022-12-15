import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";
export default class Message extends Component {
    state = {
        messageArr: [
            {
                id: 1,
                title: "d1",
            },
            {
                id: 2,
                title: "d2",
            },
            {
                id: 3,
                title: "d3",
            },
        ],
    };
    render() {
        const { messageArr } = this.state;
        return (
            <ul>
                {messageArr.map((messageObj) => {
                    return (
                        <li key={messageObj.id}>
                            <Link
                                to={{
                                    pathname: "/home/message/detail",
                                    state: {
                                        id: messageObj.id,
                                        title: messageObj.title,
                                    },
                                }}
                            >
                                {messageObj.title}
                            </Link>
                        </li>
                    );
                })}
                <Route path={`/home/message/detail`} component={Detail} />
            </ul>
        );
    }
}
