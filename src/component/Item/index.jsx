import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
    //鼠标移入，任务项样式改变
    onMouseEnter = () => {
        const { item, btn } = this;
        item.style.backgroundColor = "rgb(211, 211, 211)";
        btn.style.display = "block";
    };
    //鼠标移出，任务项样式改变
    onMouseLeave = () => {
        const { item, btn } = this;
        item.style.backgroundColor = "";
        btn.style.display = "none";
    };
    //删除任务
    deleteTask = () => {
        const { id, deleteTask } = this.props.item;
        deleteTask(id);
    };
    //任务的勾选和删除
    changeCheck = () => {
        const { id, changeCheck } = this.props.item;
        changeCheck(id);
    };
    render() {
        const { taskName, isChecked } = this.props.item;
        return (
            <li
                ref={(c) => {
                    this.item = c;
                }}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <label>
                    <input
                        type="checkbox"
                        defaultChecked={isChecked}
                        onChange={this.changeCheck}
                    />
                    <span>{taskName}</span>
                </label>
                <button
                    className="btn btn-danger"
                    style={{ display: "none" }}
                    ref={(c) => {
                        this.btn = c;
                    }}
                    onClick={this.deleteTask}
                >
                    删除
                </button>
            </li>
        );
    }
}
