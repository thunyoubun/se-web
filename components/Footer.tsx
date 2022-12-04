import React, { Component } from "react";

export default class Footer extends React.Component {
  state = {
    curYear: "",
  };

  componentDidMount() {
    this.getCurYear();
  }

  getCurYear = () => {
    var today = new Date(),
      curYear = today.getFullYear();

    this.setState({ curYear });
  };
  render() {
    return (
      <div className=" bg-gray-800 w-full h-[56px] ">
        <div className=" max-w-screen h-full flex justify-center align-middle ">
          <div className="p-4 font-semibold  w-full h-full text-center text-white">
            <h1>©{this.state.curYear} Designed and Developed by Switch</h1>
          </div>
        </div>
      </div>
    );
  }
}
