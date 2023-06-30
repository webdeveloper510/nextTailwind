import { useEffect } from "react";

export default function About_row() {
  
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
      <section className="progress">
        <div className="container mx-auto">
          <div className="progess-content first">
            <h1 className="lg:text-6xl font-semibold text-4xl	">Design for progress</h1>
            <p className=" expert-desktop hidden lg:block md:block text-lg mt-3">We embrace our role as industry leaders, always <br/> thinking about how we can move the needle in a <br/> competitive landscape.</p>
            <p className=" expert-mobile block lg:hidden md:hidden text-base">We embrace our role as industry leaders, always thinking about how we can move the needle in a competitive landscape.</p>
          </div>
        </div>
      </section>

      <section className="progress1">
        <div className="container mx-auto">
          <div className="progess-content second">
            <h1 className="lg:text-6xl font-semibold text-4xl	">Nimble and decisive</h1>
            <p className=" expert-desktop hidden lg:block md:block text-lg mt-3">Empowering our team to be proactive — always exploring, <br/> iterating, and making decisions independently — helps us <br/> stay ahead of the curve.</p>
            <p className=" expert-mobile block lg:hidden md:hidden text-base">Empowering our team to be proactive — always exploring, <br/> iterating, and making decisions independently — helps us <br/> stay ahead of the curve.</p>
          </div>
        </div>
      </section>

      <section className="progress2">
        <div className="container mx-auto">
          <div className="progess-content third">
            <h1 className="lg:text-6xl font-semibold text-4xl	">Solve with conviction</h1>
            <p className=" expert-desktop hidden lg:block md:block text-lg mt-3">We have shoppers’, merchants’, and financial institutions’ <br/> best interests at heart, so we only believe in solutions <br/> where every group wins.</p>
            <p className=" expert-mobile block lg:hidden md:hidden text-base">We have shoppers’, merchants’, and financial institutions’ best interests at heart, so we only believe in solutions where every group wins.</p>
          </div>
        </div>
      </section>
    </>
  );
}
