import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import galery from "../../../public/GettyImages1.jpg"
import galery1 from "../../../public/GettyImages2.jpg"
import galery2 from "../../../public/GettyImages3.jpg"
import galery3 from "../../../public/GettyImages4.jpg"


export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "20%",
      slidesToShow: 1,
      dots: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <Image
                  src={galery}
                  className="normalimg"
                  loading="eager"
                  priority={true}
                  style={{ width: "100%", height: "640px", margin: "0px auto" }}
                  alt="Marchant Hero"
                />
          </div>
          <div>
          <Image
                  src={galery1}
                  className="normalimg"
                  loading="eager"
                  priority={true}
                  style={{ width: "100%", height: "427px", margin: "0px auto" }}
                  alt="Marchant Hero"
                />
          </div>
          <div>
          <Image
                  src={galery2}
                  className="normalimg"
                  loading="eager"
                  priority={true}
                  style={{ width: "100%", height: "640px", margin: "0px auto" }}
                  alt="Marchant Hero"
                />
          </div>
          <div>
          <Image
                  src={galery3}
                  className="normalimg"
                  loading="eager"
                  priority={true}
                  style={{ width: "100%", height: "427px", margin: "0px auto" }}
                  alt="Marchant Hero"
                />
          </div>
        </Slider>
      </div>
    );
  }
}