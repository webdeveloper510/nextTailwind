import React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import password from "../../../public/Passcode.png";
import card from "../../../public/card1.png";
import point from "../../../public/Points.png";
import oldfriend1 from "../../../public/oldfriend.png";

export default function oldfriend() {

  const [imgSource, setImgSrc] = useState(oldfriend1);
  const leftDivRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = (e: any) => {
    const leftDiv = leftDivRef.current;
    if (leftDiv) {
      const scrollTop = 0 - leftDiv?.getBoundingClientRect().top;
      if (scrollTop < 400) {
        setImgSrc(oldfriend1);
      } else if (scrollTop < 800) {
        setImgSrc(password);
      } else if (scrollTop < 1500) {
        setImgSrc(card);
      } else {
        setImgSrc(point);
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:gap-4 mt-8">
        <div className="md:col-span-1 mb-5 col-span-2" ref={leftDivRef}>
          <div className="hellofriend text-white">
            <h1 className="text-6xl	relative font-semibold">
              Hello, old friend.
            </h1>
            <p className="text-lg relative mt-3">
              Automatically recognize new and returning shoppers
              <br /> by their email address alone.
            </p>
          </div>
          <div className="password text-white">
            <h1 className="text-6xl	relative font-semibold">
              Make p@$$w0rds a thing of the past.
            </h1>
            <p className="text-lg relative mt-3">
              Shoppers enter the secret passcode that was sent <br /> via text
              to authenticate their identity.
            </p>
          </div>
          <div className="anycard text-white">
            <h1 className="text-6xl	relative font-semibold">
              Pick a card,
              <br /> any card.
            </h1>
            <p className="text-lg relative mt-3">
              With Card Linking, shoppers immediately see all of their <br />{" "}
              available credit or debit card options without having to <br />{" "}
              enter additional information.
            </p>
          </div>
          <div className="hooray text-white">
            <h1 className="text-6xl relative font-semibold">
              Hooray for points!
            </h1>
            <p className="text-lg relative mt-3">
              Shoppers can easily apply points, rewards, and <br /> discounts to
              their purchase — all without leaving <br /> the checkout screen.
            </p>
          </div>
        </div>
        <div className="md:col-span-1 mb-5 pt-5 col-span-2">
          <Image
            src={imgSource}
            style={{
              width: "76%",
              height: "72vh",
              position: "sticky",
              top: "10%",
            }}
            alt="Banner Image"
          />
        </div>
      </div>
    </>
  );
}
