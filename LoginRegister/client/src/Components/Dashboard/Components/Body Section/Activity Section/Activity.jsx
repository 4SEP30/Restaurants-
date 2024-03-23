import React from "react";
import "./activity.css";
import { BsArrowRightShort } from "react-icons/bs";
import user1 from "../../../assets/pic-1.png";
import user2 from "../../../assets/pic-2.png";
import user3 from "../../../assets/pic-3.png";
import user4 from "../../../assets/pic-4.png";

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Images" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new food</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Images" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new food</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Images" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new food</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Images" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new food</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Images" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new food</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
