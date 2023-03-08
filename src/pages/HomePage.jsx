import React from "react";
import "../styles/HomePage.css";
import "../styles/HomePageAdaptive.css";
import { useNavigate } from "react-router-dom";
import video from "../assets/BrandMovie_header_1920x1080.mp4";

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div className='background'>
			<div class='fullscreen-bg'>
				<video preload='auto' loop autoplay playsInline controls muted class='fullscreen-bg__video'>
					<source style={{ opacity: "0.33" }} src={video} type='video/mp4' />
				</video>
			</div>

			<div className='homepage' style={{ width: "100%", background: "#fbf5eb" }}>
				<div className='homepage_top'>
					<div className='homepage_top_content'>
						<h3 className='homepage_top_title animate__animated animate__bounceInDown'>Craft your moments, shape your life</h3>
					</div>
				</div>

				<div className='header_top'>
					<div className='header_top_content animate__animated animate__backInLeft'>
						<h2 className='header_top_content_title '>
							<i>Work Of Art</i>
						</h2>
						<p>Discover the perfect blend of luxury and functionality with our range of premium watches, crafted with the highest standards of quality and durability in mind.</p>
						<p>
							Starting at <strong className='header_price'>$1000</strong>
						</p>

						<a onClick={() => navigate("/products")} class='btn_header'>
							Buy Now
						</a>
					</div>
					<div className='pos_img__section'>
						<ul class='thumb animate__animated animate__backInRight'>
							<li>
								<img
									className='watch_img'
									style={{ width: "150px" }}
									src='https://i.postimg.cc/zvMgtsdM/kisspng-omega-speedmaster-omega-seamaster-watch-coaxial-es-watches-5acdc390e168f2-449941241523434384.png'
									alt=''
									onClick="chngimg('https://i.postimg.cc/zvMgtsdM/kisspng-omega-speedmaster-omega-seamaster-watch-coaxial-es-watches-5acdc390e168f2-449941241523434384.png')"
								/>
							</li>

							<li>
								<img
									className='watch_img'
									style={{ width: "150px" }}
									src='https://i.postimg.cc/jdpZFPN2/kisspng-bulgari-automatic-watch-jewellery-power-reserve-in-bulgari-watches-women-watch-sapphire-watc.png'
									alt=''
									onClick="chngimg('https://i.postimg.cc/jdpZFPN2/kisspng-bulgari-automatic-watch-jewellery-power-reserve-in-bulgari-watches-women-watch-sapphire-watc.png')"
								/>
							</li>

							<li>
								<img className='watch_img' style={{ width: "150px" }} src='https://i.postimg.cc/7ZnDPggt/74651-chronograph-watch-baselworld-speake-marin-j12-chanel.png' alt='' onClick="chngimg('https://i.postimg.cc/7ZnDPggt/74651-chronograph-watch-baselworld-speake-marin-j12-chanel.png')" />
							</li>
						</ul>
					</div>
				</div>

				<div className='collection'>
					<div className='collection_content'>
						<span className='gold'>TimeSculpt watches are crafted with scrupulous attention to detail.</span>
						<p className='collection_text'>
							Explore the TimeSculpt collection of prestigious, high-precision timepieces. TimeSculpt offers a wide assortment of Classic and Professional watch models to suit any wrist. Discover the broad selection of Rolex watches to find a perfect combination of style and functionality.
						</p>
					</div>
				</div>
				<div className='image_block'>
					<img className='images border' src='https://content.rolex.com/dam/watches/hubs/collections/hub-watches-gold-watches_plo_fonte_appretage_10jdm_069.jpg?imwidth=640' alt='' />
					<img className='images' src='https://content.rolex.com/dam/watches/hubs/collections/hub-watches-steel-gold_mat-steel_0001_plo_fonte_appretage_10jdm_069.jpg?imwidth=640' alt='' />
					<img className='images border' src='https://content.rolex.com/dam/watches/hubs/collections/hub-watches-gem-set-diamants_diamonds_12cw_001.jpg?imwidth=640' alt='' />
				</div>
			</div>

			<div className='present'>
				<img className='present_img' src='https://www.tissotwatches.com/media/content_push/gift-finder_1.jpg?im=Resize=(1484,1113)' alt='' />
				<div className='present_content'>
					<h2 className='present_content_title'>Gift Finder</h2>
					<p className='present_content_info'>
						Showing your affection, expressing your gratitude or simply saying thank you… There are so many reasons and opportunities to show your loved ones how much your appreciate them. And what better way to do so than with the gift of time? When it can be difficult to find the perfect present,
						our Gift Finder will help you navigate through the universe of Tissot watches. Super trendy or more classic, dark and subtle or bright and shiny… find the perfect luxury Swiss watch and create unforgettable memories.
					</p>
					<button className='btn_header' onClick={() => navigate("/products")}>
						Find the gift
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
