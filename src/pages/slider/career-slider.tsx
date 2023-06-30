import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Employee from "../../../public/employee/Yasmine_El-Gohary-Product_Owner.png"
import Employee1 from "../../../public/employee/Alyse_Belavic-Director_of_Strategic_Partnerships.png"
import Employee2 from "../../../public/employee/Brett_Weiss-Strategy_Operations.png"
import Employee3 from "../../../public/employee/Cydney_Solomon-Solutions_Specialist.png"
import Employee4 from "../../../public/employee/Miguel_Salvador-Product_Designer.png"
import Employee5 from "../../../public/employee/Sirimast_Kuo-Quality_Assurance_Engineer.png"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className='grid grid-cols-2 md:gap-4 mt-8'>
              <div className='lg:col-span-1 pt-5 col-span-2'>
                <Image
                  src={Employee}
                  className="normalimg"
                  loading="eager"
                  priority={true}
                  style={{ width: "100%", height: "100%", margin: "0px auto" }}
                  alt="Marchant Hero"
                />
              </div>
              <div className='lg:col-span-1 pt-5 col-span-2'>
                <div className="Loremipsum">
                  <h1 className="font-semibold text-2xl	lg:text-xl	">&quot; <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
                  <h3 className="font-semibold text-2xl lg:text-xl">Yasmine El-Gohary</h3>
                  <p>Position</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='grid grid-cols-2 md:gap-4 mt-8'>
              <div className='lg:col-span-1 pt-5 col-span-2'>
                <Image
                  src={Employee3}
                  className="normalimg"
                  loading="eager"
                  priority={true}
                  style={{ width: "100%", height: "100%", margin: "0px auto" }}
                  alt="Marchant Hero"
                />
              </div>
              <div className='lg:col-span-1 pt-5 col-span-2'>
                <div className="Loremipsum">
                  <h1 className="font-semibold text-2xl lg:text-xl">&quot; <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
                  <h3 className="font-semibold text-2xl lg:text-xl">Yasmine El-Gohary</h3>
                  <p>Position</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='grid grid-cols-2 md:gap-4 mt-8'>
              <div className='lg:col-span-1 pt-5 col-span-2'>
                <Image
                  src={Employee3}
                  className="normalimg"
                  loading="eager"
                  priority={true}
                  style={{ width: "100%", height: "100%", margin: "0px auto" }}
                  alt="Marchant Hero"
                />
              </div>
              <div className='lg:col-span-1 pt-5 col-span-2'>
                <div className="Loremipsum">
                  <h1 className="font-semibold text-2xl lg:text-xl">&quot; <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
                  <h3 className="font-semibold text-2xl lg:text-xl">Yasmine El-Gohary</h3>
                  <p>Position</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='grid grid-cols-2 md:gap-4 mt-8'>
              <div className='lg:col-span-1 pt-5 col-span-2'>
                <Image
                  src={Employee4}
                  className="normalimg"
                  loading="eager"
                  priority={true}
                  style={{ width: "100%", height: "100%", margin: "0px auto" }}
                  alt="Marchant Hero"
                />
              </div>
              <div className='lg:col-span-1 pt-5 col-span-2'>
                <div className="Loremipsum">
                  <h1 className="font-semibold text-2xl">&quot; <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
                  <h3 className="font-semibold text-2xl">Yasmine El-Gohary</h3>
                  <p>Position</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='grid grid-cols-2 md:gap-4 mt-8'>
              <div className='lg:col-span-1 pt-5 col-span-2'>
                <Image
                  src={Employee5}
                  className="normalimg"
                  loading="eager"
                  priority={true}
                  style={{ width: "100%", height: "100%", margin: "0px auto" }}
                  alt="Marchant Hero"
                />
              </div>
              <div className='lg:col-span-1 pt-5 col-span-2'>
                <div className="Loremipsum">
                  <h1 className="font-semibold text-2xl">&quot; <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
                  <h3 className="font-semibold text-2xl">Yasmine El-Gohary</h3>
                  <p>Position</p>
                </div>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}