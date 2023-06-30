import { useState } from "react";
import Image from 'next/image'
import logo from '../../../public/logo.svg'
export default function Footer() {
  return (
    <>
      <section className="footer-bg">
        <div className="p-6 container mx-auto">

          <div className="grid grid-cols-5 md:gap-4 text-white my-8">
            <div className=" md:col-span-3 mb-5 col-span-5">
              <Image
                style={{height: 60, width: 80}}
                src={logo}
                alt="Picture of the author"
              />
            </div>
            <div className="md:col-span-1 col-span-5">
              <ul>
                <li>Merchants</li>
                <li>Partners</li>
                <li>Shoppers</li>
                <li>Developers</li>
              </ul>
            </div>
            <div className="md:col-span-1 col-span-5">
              <ul>
                <li>About Us</li>
                <li>News & Blog</li>
                <li>Careers</li>
              </ul>
            </div>

          </div>

          <div className="colorhr"> </div>

          <div className="py-5 copyright md:flex text-white">
            <p>©2023 Skipify. All rights reserved.</p>
            <p className="md:mx-7 md:my-0 my-2">Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </section>
    </>
  )
}

