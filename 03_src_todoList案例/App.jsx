import React, { Component } from "react";
import Head from "./component/Head";
import Foot from "./component/Foot";
import List from "./component/List";
import "./App.css";
export default class App extends Component {
    state = {
        task: [
            { id: 1, taskName: "吃饭", isChecked: false },
            { id: 2, taskName: "睡觉", isChecked: false },
            { id: 3, taskName: "打码", isChecked: true },
        ],
    };
    //添加任务
    addTask = (newItem) => {
        const { task } = this.state;
        this.setState({ task: [newItem, ...task] });
    };
    //删除单个任务
    deleteTask = (id) => {
        const { task } = this.state;
        const newTask = task.filter((item) => {
            return id !== item.id;
        });
        this.setState({ task: newTask });
    };
    //任务勾选与取消
    changeCheck = (id) => {
        const { task } = this.state;
        const newTask = task.map((item) => {
            if (item.id === id) item.isChecked = !item.isChecked;
            return item;
        });
        this.setState({ task: newTask });
    };
    //勾选、取消勾选全部任务
    checkAllTask = (isChecked) => {
        const { task } = this.state;
        const newTask = task.map((item) => {
            return { ...item, isChecked };
        });
        this.setState({ task: newTask });
    };
    //删除已完成任务
    clearCheckTask = () => {
        const { task } = this.state;
        const newTask = task.filter((item) => {
            return item.isChecked !== true;
        });
        this.setState({ task: newTask });
    };
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Head addTask={this.addTask}></Head>
                    <List
                        task={this.state.task}
                        deleteTask={this.deleteTask}
                        changeCheck={this.changeCheck}
                    ></List>
                    <Foot
                        task={this.state.task}
                        checkAllTask={this.checkAllTask}
                        clearCheckTask={this.clearCheckTask}
                    ></Foot>
                </div>
            </div>
        );
    }
}
