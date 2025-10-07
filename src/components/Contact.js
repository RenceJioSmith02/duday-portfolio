import React from "react";
import {
  FaPaperclip,
  FaArrowRight,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default class Contact extends React.Component {
  state = { name: "", email: "", message: "", submitted: false };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true, name: "", email: "", message: "" });
    setTimeout(() => this.setState({ submitted: false }), 3000);
  };

  render() {
    const { name, email, message, submitted } = this.state;

    return (
      <section
        id="contact"
        className="contact-section d-flex flex-column justify-content-between"
      >
        <div className="container flex-grow-1 py-5 my-5">
          <div className="row g-5 align-items-start">
            {/* Left - Contact Info */}
            <div className="col-md-6">
              <h3 className="fw-semibold mb-3">Got a project? Let’s talk.</h3>
              <p className="mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
              <a href="mailto:hi@mirasol.com" className="contact-email">
                hi@mirasol.com <FaArrowRight className="ms-2" />
              </a>
            </div>

            {/* Right - Form */}
            <div className="col-md-6">
              <h3 className="fw-semibold mb-3">
                Estimate your project? Let me know here.
              </h3>

              {submitted && (
                <div className="alert alert-success rounded-3 mb-3">
                  Message sent — thank you!
                </div>
              )}

              <form onSubmit={this.handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>What’s your name?</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Your fancy email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="form-group message-group d-flex align-items-center">
                  <label>Tell me about your project</label>
                  <div className="d-flex align-items-center ms-auto">
                    <FaPaperclip className="icon me-3" />
                    <button type="submit" className="send-btn">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </section>
    );
  }
}
