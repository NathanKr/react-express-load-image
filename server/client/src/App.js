import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = { someText: "", file: "" };
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
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <div>
          <input
            type="text"
            onChange={evt => this.setState({ someText: evt.target.value })}
          />
          <br/>
          {/* this is a MUST for uploading files */}
          <input
            type="file"
            onChange={evt => this.setState({ file: evt.target.files[0] })}
          />
          <br/>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
