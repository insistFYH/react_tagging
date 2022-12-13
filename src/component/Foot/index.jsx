import React, { Component } from "react";
import "./index.css";
export default class Foot extends Component {
    //勾选全部任务
    checkAllTask = (event) => {
        // console.log(event.target.checked);
        this.props.checkAllTask(event.target.checked);
    };
    render() {
        const { task } = this.props;
        //总任务个数
        const totalTask = task.length;
        //已完成任务个数
        const doneTask = task.reduce((pre, cur) => {
            if (cur.isChecked === true) pre += 1;
            return pre;
        }, 0);
        return (
            <div className="todo-footer">
                <label>
                    <input
                        type="checkbox"
                        checked={totalTask === doneTask ? true : false}
                        onChange={this.checkAllTask}
                    />
                </label>
                <span>
                    <span>已完成{doneTask}</span> / 全部{totalTask}
                </span>
                <button className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}
