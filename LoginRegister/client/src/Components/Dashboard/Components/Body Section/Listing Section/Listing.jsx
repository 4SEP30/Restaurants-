import React from "react";
import "./listing.scss";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import img from "../../../assets/c6.png";
import img1 from "../../../assets/c4.png";
import img2 from "../../../assets/c1.png";
import img3 from "../../../assets/c2.png";
import user1 from "../../../assets/pic-1.png";
import user2 from "../../../assets/pic-2.png";
import user3 from "../../../assets/pic-3.png";
import user4 from "../../../assets/pic-4.png";

const Listing = () => {
  return (
    <div className="lisitingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="" />
          <h3>Annual Vince</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img1} alt="" />
          <h3>Chicken Spacy</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="" />
          <h3>Meatballs</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img3} alt="" />
          <h3>Meat Strawberry</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Images" />
              <img src={user2} alt="User Images" />
              <img src={user3} alt="User Images" />
              <img src={user4} alt="User Images" />
            </div>
            <div className="cardText">
              <span>
                15.432 Food sold <br />
                <small>
                  31 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user3} alt="User Images" />
              <img src={user1} alt="User Images" />
              <img src={user4} alt="User Images" />
              <img src={user2} alt="User Images" />
            </div>
            <div className="cardText">
              <span>
                67.432 Food sold <br />
                <small>
                  87 Sellers <span className="date">31 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
