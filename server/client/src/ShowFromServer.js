import React, { Component } from "react";
import axios from "axios";
import "./ShowFromServer.css";

class ShowFromServer extends Component {
  state = { img: null, newFileName: "" };

  getImageFromServer = () => {
    axios
      .get(`/images/${this.state.newFileName}`, { responseType: "blob" })
      .then(res => {
        this.setState({ img: null });
        if (res.status === 200) {
          const reader = new window.FileReader();
          reader.readAsDataURL(res.data);
          const _this = this;
          reader.onload = function() {
            const imageDataUrl = reader.result;
            _this.setState({ img: imageDataUrl });
          };
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="ShowFromServer">
        <h2>Show image from server</h2>
        file name from upload directory{" "}
        <input onChange={evt => this.setState({ newFileName: evt.target.value })} />
        <br />
        <button onClick={this.getImageFromServer}>Show</button>
        <br />
        {this.state.img ? <img src={this.state.img} alt="pic" /> : ""}
      </div>
    );
  }
}

export default ShowFromServer;
