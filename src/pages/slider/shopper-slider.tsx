import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="keeper">
              <div>
                <h3 className="lg:text-4xl	font-semibold text-xl	">Expert-level secret keeper</h3>
                <div className="keeper-border"></div>
                <p className="lg:text-xl text-base lg:pb-5">
                  Skipify only uses your data to process transactions with
                  merchants and to streamline your purchases in the future. Our
                  own friends and families use Skipify, so we protect your data
                  the same way we protect theirs.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="keeper">
              <div>
                <h3 className="lg:text-4xl	font-semibold text-xl	">No funny business</h3>
                <div className="keeper-border"></div>
                <p className="lg:text-xl text-base lg:pb-5">
                  Skipify is not an ad network and is not in the business of
                  cashing in on customer data. We&apos;re in the business of creating
                  a secure purchase, with data security and privacy at the
                  forefront.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="keeper">
              <div>
                <h3 className="lg:text-4xl	font-semibold text-xl	">Seriously safe encryption</h3>
                <div className="keeper-border"></div>
                <p className="lg:text-xl text-base lg:pb-5">
                  We protect your data in a secure environment using AES-256
                  encryption, which is certified for use by the U.S. government
                  to protect classified information. In other words, it&apos;s secret
                  agent-level safe.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
