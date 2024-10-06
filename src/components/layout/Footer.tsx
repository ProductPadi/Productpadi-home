import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/EffiFlow.png";
import { Link } from "react-router-dom";
import React from "react";

type FooterProps = {
  openModal: () => void;
};

const Footer: React.FC<FooterProps> = ({ openModal }) => {
  return (
    <div className="bg-[#121212] text-white px-[5%] py-[3%]">
      <div className="md:grid md:grid-cols-5 mb-20">
        <div className="col-span-1 mb-8">
          {/* Resize the logo here */}
          <img src={logo} alt="logo" className="mb-4 logo-drk w-[150px] h-auto" /> 

          <button
            onClick={openModal}
            className="btn primary-btn border border-white py-2 px-4 text-white rounded-2xl"
          >
            Join Waitlist
          </button>
        </div>

        <div className="md:grid md:grid-cols-2 gap-4 col-span-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <h4 className="text-gray-500 mb-2">Resources</h4>
              <Link to="#">
                <p>Documentation</p>
              </Link>
              <Link to="#">
                <p>Starter templates</p>
              </Link>
              <Link to="#">
                <p>Themes</p>
              </Link>
            </div>

            <div className="mb-4">
              <h4 className="text-gray-500 mb-2">Ecosystem</h4>
              <Link to="#">
                <p>Community</p>
              </Link>
              <Link to="#">
                <p>Showcase</p>
              </Link>
              <Link to="#">
                <p>Contributing</p>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <h4 className="text-gray-500 mb-2">About</h4>
              <Link to="#">
                <p>Press</p>
              </Link>
              <Link to="#">
                <p>Partner with us!</p>
              </Link>
            </div>

            <div className="mb-4">
              <h4 className="text-gray-500 mb-2">More links</h4>
              <Link to="#">
                <p>Blog</p>
              </Link>
              <Link to="#">
                <p>Integrations</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top-2 border-white p-4 flex flex-col-reverse">
        <p className="text-center">© 2024 Product padi. All rights reserved.</p>

        <p className="flex items-center justify-between w-[200px] m-auto mb-8">
          <a href="https://www.linkedin.com/company/effiflow/">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61551991505380&mibextid=ZbWKwL">
            <FaFacebook />
          </a>
          <a href="https://x.com/EffiFlow?t=cMgYH2KfUyQnDHUZARE1tw">
            <FaXTwitter />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
