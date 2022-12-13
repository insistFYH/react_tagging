import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";
export default class Head extends Component {
    addTask = (event) => {
        // console.log(event.keyCode);
        if (event.keyCode === 13) {
            const item = {
                id: nanoid(),
                taskName: event.target.value,
                isChecked: false,
            };
            this.props.addTask(item);
            event.target.value = "";
        }
    };
    render() {
        return (
            <div className="todo-header">
                <input
                    type="text"
                    placeholder="请输入你的任务名称，按回车键确认"
                    onKeyUp={this.addTask}
                />
            </div>
        );
    }
}
