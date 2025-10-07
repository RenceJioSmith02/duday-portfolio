import React from "react";
import { FaCube, FaPenNib, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about-section py-5 d-flex align-items-center">
      <div className="container">
        {/* Top Info Row */}
        <div className="row g-5 mb-5 align-items-start">
          {/* Left: Contact */}
          <div className="col-md-6">
            <h3 className="fw-semibold">Any Type Of Query & Discussion.</h3>
            <p className="mt-3 mb-4">
              Feel free to reach out for collaborations or just a friendly
              hello.
            </p>
            <a href="mailto:hi@mirasol.com" className="contact-link">
              hi@mirasol.com →
            </a>
          </div>

          {/* Right: Quote & Stats */}
          <div className="col-md-6">
            <p className="quote-text mb-3">
              You can’t use up creativity — the more you use, the more you have
              in your significant mind.
            </p>
            <p className="mb-4">
              Creativity thrives when shared. Every project brings new
              perspective and growth.
            </p>

            <div className="d-flex gap-5 stats">
              <div>
                <h2 className="stat-number">5+</h2>
                <p className="stat-label">Years of Experience.</p>
              </div>
              <div>
                <h2 className="stat-number">87</h2>
                <p className="stat-label">Satisfied Clients.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Services Row */}
        <div className="row g-4 service-grid">
          <div className="col-md-4">
            <div className="service-card accent">
              <FaCube size={32} className="mb-3" />
              <h5>Product Designer.</h5>
              <p className="text-muted">124 Projects</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <FaPenNib size={32} className="mb-3" />
              <h5>Branding Designer.</h5>
              <p className="text-muted">37 Projects</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <FaLaptopCode size={32} className="mb-3" />
              <h5>Full Stack Developer.</h5>
              <p className="text-muted">62 Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
