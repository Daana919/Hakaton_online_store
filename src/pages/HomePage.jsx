import React from "react";
import "../styles/HomePage.css";
import "../styles/HomePageAdaptive.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();

	return (
    <>
      <div className="homepage" style={{ width: "100%" }}>
        {/* <video autoplay muted loop style={{ width: "100%" }} className= 'back_video'>
          <source
            src="https://content.rolex.com/dam/watches/family-pages/datejust/update/2021/cover/cover-family-page-datejust.mp4"
            type="video/mp4"
          />
        </video> */}
        <div className="header_top">
          <div className="header_top_content">
            <h2 className="header_top_content_title">Work Of Art</h2>
            <p className="header_top_par1">
              When attentions to details matter.
            </p>
            <p className="header_top_par2">
              Starting at <strong className="header_price">$1000</strong>
            </p>
            <div className="btn_div"></div>
            <a onClick={() => navigate("/products")} class="btn orange">
              Buy Now
            </a>
          </div>
          <div className="thumb_section">
            <ul class="thumb">
              <li>
                <img
                  className="watch_img"
                  style={{ width: "150px" }}
                  src="https://i.postimg.cc/zvMgtsdM/kisspng-omega-speedmaster-omega-seamaster-watch-coaxial-es-watches-5acdc390e168f2-449941241523434384.png"
                  alt=""
                  onClick="chngimg('https://i.postimg.cc/zvMgtsdM/kisspng-omega-speedmaster-omega-seamaster-watch-coaxial-es-watches-5acdc390e168f2-449941241523434384.png')"
                />
              </li>

              <li>
                <img
                  className="watch_img"
                  style={{ width: "150px" }}
                  src="https://i.postimg.cc/jdpZFPN2/kisspng-bulgari-automatic-watch-jewellery-power-reserve-in-bulgari-watches-women-watch-sapphire-watc.png"
                  alt=""
                  onClick="chngimg('https://i.postimg.cc/jdpZFPN2/kisspng-bulgari-automatic-watch-jewellery-power-reserve-in-bulgari-watches-women-watch-sapphire-watc.png')"
                />
              </li>

              <li>
                <img
                  className="watch_img"
                  style={{ width: "150px" }}
                  src="https://i.postimg.cc/7ZnDPggt/74651-chronograph-watch-baselworld-speake-marin-j12-chanel.png"
                  alt=""
                  onClick="chngimg('https://i.postimg.cc/7ZnDPggt/74651-chronograph-watch-baselworld-speake-marin-j12-chanel.png')"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="collection">
          <div className="collection_content">
            <span className="gold">
              Timesculp watches are crafted with scrupulous attention to detail.
            </span>
            <p className="collection_text">
              Explore the TimeSculp collection of prestigious, high-precision
              timepieces. Timesculp offers a wide assortment of Classic and
              Professional watch models to suit any wrist. Discover the broad
              selection of Rolex watches to find a perfect combination of style
              and functionality.
            </p>
          </div>
        </div>
        <div className="image_block">
          <img
            className="images border"
            src="https://content.rolex.com/dam/watches/hubs/collections/hub-watches-gold-watches_plo_fonte_appretage_10jdm_069.jpg?imwidth=640"
            alt=""
          />
          <img
            className="images"
            src="https://content.rolex.com/dam/watches/hubs/collections/hub-watches-steel-gold_mat-steel_0001_plo_fonte_appretage_10jdm_069.jpg?imwidth=640"
            alt=""
          />
          <img
            className="images border"
            src="https://content.rolex.com/dam/watches/hubs/collections/hub-watches-gem-set-diamants_diamonds_12cw_001.jpg?imwidth=640"
            alt=""
          />
        </div>
      </div>
      <div className="present">
        <img
          className="present_img"
          src="https://www.tissotwatches.com/media/content_push/gift-finder_1.jpg?im=Resize=(1484,1113)"
          alt=""
        />
        <div className="present_content">
          <h2 className="present_content_title">GIFT FINDER</h2>
          <p className="present_content_info">
            Showing your affection, expressing your gratitude or simply saying
            thank you… There are so many reasons and opportunities to show your
            loved ones how much your appreciate them. And what better way to do
            so than with the gift of time? When it can be difficult to find the
            perfect present, our Gift Finder will help you navigate through the
            universe of Tissot watches. Super trendy or more classic, dark and
            subtle or bright and shiny… find the perfect luxury Swiss watch and
            create unforgettable memories.
          </p>
          <button className="present_content_btn">Find the gift</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
