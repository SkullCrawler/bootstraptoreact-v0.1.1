import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AlertBanner } from '@thumbtack/thumbprint-react';

export const Contact = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a9sflbq', 'template_m7dc0qh', form.current, 'K0GxXSOplO629yB8z')
      .then((result) => {
        console.log(result.text);
        console.log("message sent!");
        e.target.reset();
        setShowAlert(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id="contact">
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h1>Get in Touch</h1>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 right">
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Your Name" name="user_name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control form-control-lg" placeholder="YourEmail@email.com" name="user_email" />
              </div>
              <div className="form-group">
                <textarea className="form-control form-control-lg" name="message"></textarea>
              </div>
              <input type="submit" className="btn btn-secondary btn-block" value="Send" name="" />
            </div>
          </div>
        </form>

        {/* Display the AlertBanner when showAlert is true */}
        {showAlert && (
          <div className="alert-banner-container">
            <AlertBanner
              intent="success"
              title="Thank you for contacting us"
              onClose={() => setShowAlert(false)}
            >
              Someone from our support team will assist you shortly.
            </AlertBanner>
          </div>
        )}
      </div>
    </div>
  );
};
