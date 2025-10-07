import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer text-light">
      {/* Bottom Footer */}
      <div className="contact-footer text-center py-4">
        <p className="footer-text">
          <strong>Thanks for scrolling,</strong> that’s all folks.
        </p>
        <div className="social-icons mt-3 d-flex justify-content-center gap-4">
          <a href="#" className="social-link">
            <FaDribbble />
          </a>
          <a href="#" className="social-link">
            <FaInstagram />
          </a>
          <a href="#" className="social-link">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
