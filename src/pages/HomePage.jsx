import React from "react";
import "../styles/HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();

	function chngimg(anything) {
		document.getElementById("slide").src = anything;
	}
	function togglemenu() {
		var toggle = document.querySelector(".toggle");
		var navigation = document.querySelector(".navigation");
		toggle.classList.toggle("active");
		navigation.classList.toggle("active");
	}
	return (
		<>
			<div className='header_top'>
				<div className='header_top_content'>
					<h2 className='header_top_content_title'>Work Of Art</h2>
					<p className='header_top_par1'>When attentions to details matter.</p>
					<p className='header_top_par2'>
						Starting at <strong className='header_price'>$1000</strong>
					</p>
					<div className='btn_div'></div>
					<a onClick={() => navigate("/products")} class='btn orange'>
						Buy Now
					</a>
				</div>
			</div>
			<section>
				<ul class='thumb'>
					<li>
						<img
							style={{ width: "200px" }}
							src='https://i.postimg.cc/zvMgtsdM/kisspng-omega-speedmaster-omega-seamaster-watch-coaxial-es-watches-5acdc390e168f2-449941241523434384.png'
							alt=''
							onClick="chngimg('https://i.postimg.cc/zvMgtsdM/kisspng-omega-speedmaster-omega-seamaster-watch-coaxial-es-watches-5acdc390e168f2-449941241523434384.png')"
						/>
					</li>

					<li>
						<img
							style={{ width: "200px" }}
							src='https://i.postimg.cc/jdpZFPN2/kisspng-bulgari-automatic-watch-jewellery-power-reserve-in-bulgari-watches-women-watch-sapphire-watc.png'
							alt=''
							onClick="chngimg('https://i.postimg.cc/jdpZFPN2/kisspng-bulgari-automatic-watch-jewellery-power-reserve-in-bulgari-watches-women-watch-sapphire-watc.png')"
						/>
					</li>

					<li>
						<img style={{ width: "200px" }} src='https://i.postimg.cc/7ZnDPggt/74651-chronograph-watch-baselworld-speake-marin-j12-chanel.png' alt='' onClick="chngimg('https://i.postimg.cc/7ZnDPggt/74651-chronograph-watch-baselworld-speake-marin-j12-chanel.png')" />
					</li>
				</ul>
			</section>
		</>
	);
};

export default HomePage;
