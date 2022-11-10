import React from "react";
import style from "./Styles/Dashboard.module.css";
import home from "../assets/home.svg";
import cards from "../assets/cards.svg";
import payment from "../assets/Payment.svg";
import settings from "../assets/Settings.svg";
import activity from "../assets/Activity.svg";
import logout from "../assets/Logout.svg";
import unhide from "../assets/vuesax-linear-eye-slash.svg";
import search from "../assets/Search.svg";
import bell from "../assets/bell.svg";
import message from "../assets/Message.svg";
import arrow_down from "../assets/vuesax-linear-arrow-down.svg";
import shop from "../assets/shop.svg";
import wallet from "../assets/wallet.svg";
import netflix from "../assets/netflix.svg";

//Chart Import
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May"];
export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: [100, 500, 500, 490, 200],
      backgroundColor: "#0081BF",
    },
    {
      fill: true,
      data: [90, 150, 500, 490, 200],
      backgroundColor: "#3CC0FF",
    },
  ],
};

export const dataArea = {
  labels,
  datasets: [
    {
      fill: true,
      data: [100, 250, 100, 90, 120],
      backgroundColor: "rgba(152,251,152, 0.5)",
    },
    {
      fill: true,
      data: [90, 150, 300, 210, 80],
      backgroundColor: "rgba(217, 217, 217, .5)",
    },
    {
      fill: true,
      data: [120, 230, 130, 310, 200],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const DashboardContent = () => {
  return (
    <div className={style.dashboard}>
      <div className={style.sidebar}>
        <div className={style.logo}>
          <h2>GT2022</h2>
        </div>
        <div className={style.menu}>
          <div className={style.menu_list}>
            <img src={home} alt="home" />
            <h3>Home</h3>
          </div>
          <div className={style.menu_list}>
            <img src={cards} alt="cards" />
            <h3>Cards</h3>
          </div>
          <div className={style.menu_list}>
            <img src={payment} alt="payments" />
            <h3>Paymnets</h3>
          </div>
          <div className={style.menu_list}>
            <img src={activity} alt="activity" />
            <h3>Activity</h3>
          </div>
          <div className={style.menu_list}>
            <img src={settings} alt="settings" />
            <h3>Settings</h3>
          </div>
          <div className={style.menu_list}>
            <img src={logout} alt="logout" />
            <h3>Logout</h3>
          </div>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.main_nav}>
          <div className={style.user}>
            <h2> Good morning, Bode</h2>
          </div>
          <div className={style.right_nav}>
            <div className={style.search}>
              <input type="text" name="" id="" placeholder="Search" />
              <img src={search} alt="search" />
            </div>
            <div className={style.notifications}>
              <img src={bell} alt="bell" />
              <img src={message} alt="message" />
              <p>AB</p>
            </div>
          </div>
        </div>
        <div className={style.main_area}>
          <div className={style.main_area_left}>
            <div className={style.mycard}>
              <h2>My Card</h2>
              <div className={style.card_container}>
                <div className={style.card}>
                  <div className={style.card_details}>
                    <h3>GT2022</h3>
                    <p className={style.holder_text}>Holder Name</p>
                    <h4>Odudwa Candy</h4>
                    <div className={style.card_num_exp}>
                      <div className={style.card_num}>
                        <p className={style.card_text}>Card number</p>
                        <div>
                          <p>6768</p>
                          <p>6768</p>
                          <p>6768</p>
                          <p>6768</p>
                        </div>
                      </div>
                      <div className={style.card_exp}>
                        <p>EXP</p>
                        <div>
                          <p>08/16</p>
                        </div>
                      </div>
                      <div>
                        <img src={unhide} alt="eyes" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.balance}>
                  <div className={style.tot_bal_1}>
                    <h3>Total balance</h3>
                    <h4>NGN 15,000</h4>
                  </div>
                  <div className={style.tot_bal_2}>
                    <h3>Total balance</h3>
                    <h4>NGN 15,000</h4>
                  </div>
                  <button>Withdraw</button>
                </div>
              </div>
            </div>
            <div className={style.subscribers}>
              <h2>Subscribers</h2>
              <div className={style.sub_cards}>
                <div className={style.sub_card_1}>
                  <h3>Total Active Users</h3>
                  <h4>15,000</h4>
                  <p>25% &uarr;</p>
                </div>
                <div className={style.sub_card_2}>
                  <h3>Total Active Users</h3>
                  <h4>15,000</h4>
                  <p>25% &uarr;</p>
                </div>
                <div className={style.sub_card_3}>
                  <h3>Total Active Users</h3>
                  <h4>15,000</h4>
                  <p>25% &uarr;</p>
                </div>
              </div>
            </div>
            <div className={style.money_flow}>
              <h2>Money Flow</h2>
              <div>
                <Line options={options} data={dataArea} />
              </div>
            </div>
          </div>
          <div className={style.main_area_right}>
            <div className={style.revenue}>
              <h2>Generated revenue</h2>
              <div className={style.graph_type}>
                <select name="graph" id="graph">
                  <option value="Monthly">Monthly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Monthly">Monthly</option>
                </select>
                <div className={style.view}>
                  <img src={activity} alt="chart" />
                </div>
              </div>

              {/* GRAPH */}
              <div className={style.graph}>
                <Bar options={options} data={data} />
              </div>
            </div>
            <div className={style.transaction}>
              <div className={style.transact_head}>
                <h3>Transaction</h3>
                <a href="#">View All</a>
              </div>
              <div className={style.transact_types}>
                <div className={style.transact_type_1}>
                  <div className={style.type_name}>
                    <img src={wallet} alt="wallet" />
                    <div>
                      <h4>Stream Wallet</h4>
                      <p>21 October, 2022</p>
                    </div>
                  </div>
                  <p className={style.transact_price_red}>-$20.00</p>
                </div>
                <div className={style.transact_type_1}>
                  <div className={style.type_name}>
                    <img src={shop} alt="wallet" />
                    <div>
                      <h4>Stream Wallet</h4>
                      <p>01 November, 2022</p>
                    </div>
                  </div>
                  <p className={style.transact_price_green}>-$20.00</p>
                </div>
                <div className={style.transact_type_1}>
                  <div className={style.type_name}>
                    <img
                      src={netflix}
                      alt="wallet"
                      className={style.netflix_img}
                    />
                    <div>
                      <h4>Stream Wallet</h4>
                      <p>01 October, 2022</p>
                    </div>
                  </div>
                  <p className={style.transact_price_red}>-$20.00</p>
                </div>
              </div>
            </div>
            <div className={style.transfer}>
              <h2>Quick Transfer</h2>
              <form>
                <div className={style.transfer_input_group}>
                  <label htmlFor="">Card Number</label>
                  <input type="text" placeholder="0001 1234 8900 5678" />
                </div>
                <div className={style.bottom_input}>
                  <div className={style.transfer_input_group}>
                    <label htmlFor="">Amount</label>
                    <input type="text" placeholder="$8000.50" />
                  </div>
                  <div className={style.arrow_down}>
                    <img src={arrow_down} alt="" />
                  </div>
                  <div>
                    <input
                      type="submit"
                      name=""
                      id=""
                      value=" "
                      className={style.send_input}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
