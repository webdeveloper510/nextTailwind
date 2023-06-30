import { useEffect } from "react";

export default function Career_row() {
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

  function four() {
    var reveals = document.querySelectorAll(".four");
  
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
    window.addEventListener("scroll", four)
    return () => window.removeEventListener("scroll", four);
  }, []);
  return (
    <>     
      <section className="eachother">
        <div className="container mx-auto first">
          <div className="grid grid-cols-2 md:gap-4 ">
              <div className="md:col-span-1 mb-5 col-span-2">
                <h1 className="Honesty lg:text-7xl	md:text-5xl	text-4xl font-semibold">Honesty</h1>
              </div>
              <div className="md:col-span-1 mb-5 col-span-2">
                <div className="">
                  <p className="text-base	">True progress requires trust. We believe in accountability at every level of our company.</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="eachother1">
        <div className="container mx-auto second">
          <div className="grid grid-cols-2 md:gap-4 ">
              <div className="md:col-span-1 mb-5 col-span-2">
                <h1 className="Honesty lg:text-7xl	md:text-5xl	text-4xl font-semibold">Collaboration</h1>
              </div>
              <div className="md:col-span-1 mb-5 col-span-2">
                <div className="">
                  <p className="text-base	pt-3.5	md:text-lg	">Big challenges can’t be solved alone. Working together will get us there faster.</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="eachother2">
        <div className="container mx-auto third">
          <div className="grid grid-cols-2 md:gap-4 ">
              <div className="md:col-span-1 mb-5 col-span-2">
                <h1 className="Honesty lg:text-7xl	md:text-5xl	text-4xl font-semibold">Autonomy</h1>
              </div>
              <div className="md:col-span-1 mb-5 col-span-2">
                <div className="">
                  <p className="text-base	pt-3.5	md:text-lg	">Mutual respect and independent action are essential to our work. We empower self-motivated people to lead with confidence.</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="eachother3">
        <div className="container mx-auto four">
          <div className="grid grid-cols-2 md:gap-4 ">
              <div className="md:col-span-1 mb-5 col-span-2">
                <h1 className="Honesty lg:text-7xl	md:text-5xl	text-4xl font-semibold	">Curiosity</h1>
              </div>
              <div className="md:col-span-1 mb-5 col-span-2">
                <div className="">
                  <p className="text-base	pt-3.5	md:text-lg	">Uncovering new opportunities happens through curiosity. And curious minds lead to better solutions.</p>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
