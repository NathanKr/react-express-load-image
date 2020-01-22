import React, { Component } from "react";
import "./ShowFromServer.css";
import axios from "axios";

class ShowFromServer extends Component {
  state = { img: "", newFileName: "" };

  getImageFromServer = () => {
    axios
      .get(`/images/${this.state.newFileName}`, { responseType: "blob" })
      .then(res => {
        if (res.status === 200) {
          const reader = new FileReader();
          reader.readAsDataURL(res.data);
          const _this = this;
          reader.onload = function(){
              const imageDataUrl = reader.result;
              _this.setState({img:imageDataUrl});
          }

        } else {
          console.log(`error status code : ${res.status}`);
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="ShowFromServer">
        <h2>Show image from server</h2>
        file name from upload directory{" "}
        <input
          onChange={evt => this.setState({ newFileName: evt.target.value })}
        />
        <br />
        <button onClick={this.getImageFromServer}>Show</button>
        <br/>
        <img src={this.state.img} />
      </div>
    );
  }
}

export default ShowFromServer;
