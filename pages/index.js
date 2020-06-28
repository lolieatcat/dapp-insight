import React from "react";
import styles from './index.css';
import { getJacksPotInfos } from "../index";

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "Loading...",
      prizePool: 0,
      totalPool: 0,
      players: 0,
      tickets: 0,
      winCode: 0,
      paidPrize: 0,
      winCount: 0
    };
  }
  async componentDidMount() {
    let ret = await getJacksPotInfos();
    this.setState({
      date: ret.date,
      prizePool: ret.prizePool,
      totalPool: ret.totalPool,
      players: ret.players,
      tickets: ret.tickets,
      winCode: ret.winCode,
      paidPrize: ret.paidPrize,
      winCount: ret.winCount
    });
  }

  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.title}>万维链DApp简报之</div>
        <div className={styles.title2}>Jack's Pot</div>
        <div className={styles.date}>-- {this.state.date}</div>
        <div className={styles.subTitle}>最新情况：</div>
        <div className={styles.subTitle2}>上局结果：</div>
        <div className={styles.t1}>奖&#8194;金&#8194;池：{this.state.prizePool} WAN</div>
        <div className={styles.t2}>总资金池：{this.state.totalPool} WAN</div>
        <div className={styles.t3}>当前人数：{this.state.players}</div>
        <div className={styles.t4}>号码覆盖：{this.state.tickets}</div>
        <div className={styles.t5}>中奖号码：{this.state.winCode}</div>
        <div className={styles.t6}>奖&#12288;&#12288;金：{this.state.paidPrize} WAN</div>
        <div className={styles.t7}>中奖人数：{this.state.winCount}</div>
        <div className={styles.t8}>欢迎使用轻钱包参与Jack's Pot无损彩票，赢取大额奖金</div>
        <div className={styles.t9}>https://wanchain.org/getstarted</div>
      </div>
    );
  }
}

