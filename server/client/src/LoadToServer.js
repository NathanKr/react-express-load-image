import React, { Component } from "react";
import axios from "axios";
import "./LoadToServer.css";

class LoadToServer extends Component {
  state = { someText: "", file: "", newFile: "" };
  url = "/api";

  handleSubmit = () => {
    let formData = new FormData();
    formData.append("someFile", this.state.file);
    formData.append("someText", this.state.someText);
    const config = {
      headers: {
        // --- this is a MUST for uploading files
        "content-type": "multipart/form-data"
      }
    };

    axios
      .post(this.url, formData, config)
      .then(res => {
        if (res.status === 201) {
          console.log(res.data);
          this.setState({ newFile: res.data.file.filename });
        } else {
          console.log(`error status code : ${res.status}`);
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='LoadToServer'>
          <h2>Load image file and text to server</h2>
          some text
          <input
            type="text"
            onChange={evt => this.setState({ someText: evt.target.value })}
          />
          <br />
          {/* this is a MUST for uploading files */}
          <input
            type="file"
            onChange={evt => this.setState({ file: evt.target.files[0] })}
          />
          <br />
          <button onClick={this.handleSubmit}>Load</button>
          <p>new file : {this.state.newFile}</p>
      </div>
    );
  }
}

export default LoadToServer;
