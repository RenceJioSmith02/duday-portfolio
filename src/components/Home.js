import React from "react";
import { smoothScroll } from "../utils/scroll";
import { FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Profile and Name */}
          <div className="col-md-6 text-center text-md-start position-relative d-flex flex-column align-items-center">

            <img
              src="/duday.png"
              alt="Mirasol"
              className="img-fluid hero-image"
            />

            <h1 className="hero-name">
              Danyela <br /> <span className="highlight">Verdida</span>
            </h1>

            <div className="hero-socials mt-3">
              <a href="#">
                <FaDribbble />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right: Introduction */}
          <div className="col-md-6">
            <h3 className="intro-title">
              Web Developer and Designer, <br /> based in the Philippines.
            </h3>
            <p className="intro-text">
              I design and build functional, creative, and efficient web
              solutions. Passionate about merging clean code with aesthetic
              experiences.
            </p>

            <a
              href="#"
              className="hero-link"
              onClick={(e) => smoothScroll(e, "about")}
            >
              My story →
            </a>

            <div className="hero-quote mt-5">
              <p>
                You can’t use up creativity; the more you use, the more you have
                in your significant mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
