import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaTelegram ,FaNodeJs} from "react-icons/fa";
import { SiTailwindcss, SiFigma, } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a href="https://www.facebook.com/pranay.mahajan.7796/" target="_blank">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            </a>
            <a href="https://web.telegram.org/a/#-1002113771420" target="_blank">
            <span className="bannerIcon">
              <FaTelegram />
            </span>
            </a>
            <a href="https://www.linkedin.com/in/pranay-mahajan-82655a2b0/" target="_blank">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media