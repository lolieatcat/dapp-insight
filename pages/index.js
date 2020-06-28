import React from "react";
import styles from './index.css';
import {getJacksPotInfos} from "../index";

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {msg:"Loading..."};
  }
  async componentDidMount() {
    let ret = await getJacksPotInfos();
    this.setState({msg: ret});
  }

  render() {
    return (
      <div className={styles.normal}>
        <h3><pre>{this.state.msg}</pre></h3>
      </div>
    );
  }
}

