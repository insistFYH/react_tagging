import React, { Component } from "react";
import Item from "../Item";
import "./index.css";
export default class List extends Component {
    render() {
        const { task, deleteTask, changeCheck } = this.props;
        return (
            <ul className="todo-main">
                {/*不能用forEach，因为得返回列表*/}
                {task.map((t) => {
                    return (
                        <Item
                            item={{ ...t, deleteTask, changeCheck }}
                            key={t.id}
                        ></Item>
                    );
                })}
            </ul>
        );
    }
}
