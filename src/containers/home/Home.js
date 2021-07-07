import React, {useEffect} from 'react';
import {withRouter} from "react-router";
import withReducer from "../../store/withReducer";
import home from "./store/reducers/home.reducer";
import SliderComponent from "../../components/SliderComponent";
import "./Home.css";
import FeaturedCart from "./components/FeaturedCart";
import cart1 from "../home/components/assets/cart1.jpg";
import cart2 from "../home/components/assets/cart2.jpg";
import cart3 from "../home/components/assets/cart3.jpg";
import showcase1 from "../home/components/assets/showcase1.jpg";
import showcase11 from "../home/components/assets/showcase11.jpg";
import showcase2 from "../home/components/assets/showcase2.jpg";
import showcase22 from "../home/components/assets/showcase22.jpg";
import showcase3 from "../home/components/assets/showcase3.jpg";
import showcase33 from "../home/components/assets/showcase33.jpg";
import SmallCart from "./components/SmallCart";


function Home() {

	const featured = [{name: "Featured Sale", img: cart1}, {name: "Special Offers", img: cart2}, {name: "New Season", img: cart3}, {name:"Collections", img: cart3}]

	const showcase = [
		{name: "b-table", img: showcase1, img2:showcase11 },
		{name: "c-chair", img: showcase2, img2:showcase22 },
		{name: "elephant chair", img: showcase3, img2:showcase33 },
		{name: "b-table", img: showcase1, img2:showcase11 },
		{name: "c-chair", img: showcase2, img2:showcase22 },
		{name: "elephant chair", img: showcase3, img2:showcase33 },
		{name: "b-table", img: showcase1, img2:showcase11 },
		{name: "c-chair", img: showcase2, img2:showcase22 },
		{name: "elephant chair", img: showcase3, img2:showcase33 },
	]

	return (
		<div className="home-container">
			<SliderComponent />
			<div className="carts-container">
			{
				featured.map((item)=>
					<FeaturedCart title={item.name} img={item.img}/>
				)
			}
			</div>
			<div className="showcase-title">
				Showcase
				<div className="small-line" />
			</div>
			<div className="small-cart-containers">
				{
					showcase.map((item) =>
						<SmallCart title={item.name} img={item.img} img2={item.img2}/>
					)
				}
			</div>

			<div className="footer">
				<div className="sub-footer">
					<p className="text-lg font-semibold flex justify-center mb-12">Ak maya</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					</p>

				</div>
				<div>

				</div>
				<div>

				</div>
				<div>

				</div>
			</div>
		</div>
	);
}

export default withRouter(withReducer("home", home)(Home));
