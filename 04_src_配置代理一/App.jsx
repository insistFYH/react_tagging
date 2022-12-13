import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
    /*> 在package.json中追加如下配置"proxy":"http://localhost:5000"*/

    //获取学生数据
    getStudentData = () => {
        // axios.get("http://localhost:3000/api1/students").then(
        axios.get("http://localhost:3000/students").then(
            (response) => {
                console.log("成功了", response.data);
            },
            (error) => {
                console.log("失败了", error);
            }
        );
    };
    //不能配置多个代理
    //获取汽车数据
    getCarData = () => {
        // axios.get("http://localhost:3000/api2/cars").then(
        //     (response) => {
        //         console.log("成功了", response.data);
        //     },
        //     (error) => {
        //         console.log("失败了", error);
        //     }
        // );
    };
    //获取index数据,结果获取到public下index.html
    getIndex = () => {
        axios.get("http://localhost:3000/index.html").then(
            (response) => {
                console.log(response.data);
            },
            (err) => {
                console.log(err);
            }
        );
    };
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
                <button onClick={this.getCarData}>点我获取汽车数据</button>
                <button onClick={this.getIndex}>获取index数据</button>
            </div>
        );
    }
}
