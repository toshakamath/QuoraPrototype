import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./yourAnswers.css";
class yourAnswers extends Component {
  constructor() {
    super();
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  logOut(e) {
    //e.prventDefault()
    localStorage.removeItem("jwtToken");
    this.props.history.push("/login");
  }

  show(e) {
    document.getElementById("abc").classList.toggle("show");
  }
  render() {
    console.log("sidebarprops:" + this.props.id);
    return (
      <div className="profileSidebar">
        <h3>
          <div className="title">Answers</div>
        </h3>
      </div>
    );
  }
}
export default withRouter(yourAnswers);
