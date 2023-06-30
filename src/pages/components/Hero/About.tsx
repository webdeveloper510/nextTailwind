import React from "react";
import { useEffect } from "react";
import Lottie from 'react-lottie';
import Hero from "./../../../lotties/About_Us_Animation.json";

export default function aboutUs() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Hero,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  function first() {
    var reveals = document.querySelectorAll(".first");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", first)
    return () => window.removeEventListener("scroll", first);
  }, []);

  function second() {
    var reveals = document.querySelectorAll(".second");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  useEffect(() => {
    window.addEventListener("scroll", second)
    return () => window.removeEventListener("scroll", second);
  }, []);

  function third() {
    var reveals = document.querySelectorAll(".third");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  useEffect(() => {
    window.addEventListener("scroll", third)
    return () => window.removeEventListener("scroll", third);
  }, []);

  return (
    <>
      <section className="reinvent header-bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:gap-4 text-white py-8">
            <div className="mb-5 col-span-2">
              <div className="">
                <div className=" text-center">
                  <Lottie options={defaultOptions} height={"400px"} width={"375px"} />
                  <h1 className="reinvent-text text-7xl	hidden lg:block md:block font-semibold">
                    We&apos;re here to <br/> reinvent checkout.
                  </h1>
                  <h1 className="reinvent-text block lg:hidden md:hidden text-5xl	 font-semibold px-12	">
                    We&apos;re here to reinvent checkout.
                  </h1>
                  <p className="mt-5 	hidden lg:block text-lg	font-normal ">Our team, technology, and direct connections to the <br/> world&apos;s largest financial networks enable us to improve <br/> every aspect of the checkout experience.</p>
                  <p className="mt-5 block lg:hidden text-base px-9	">Our team, technology, and direct connections to the world&apos;s largest financial networks enable us to improve every aspect of the checkout experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
