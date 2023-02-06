import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-information">
        <h4>Susisiek!</h4>
        <p>Turi idėjų ką patobulinti? Lauksime pasiūlymų!</p>
      </div>
      <form
        action="https://formsubmit.co/c0f2ae9cdad435a09beed5080e9c0cd2"
        method="POST"
      >
        <div className="form-wrapper">
          <div className="input-field contact-form-email">
            <label>Jūsų el. pašto adresas</label>
            <input
              type="email"
              name="email"
              placeholder="El. paštas..."
              id="contact-form-email"
              required
            />
          </div>

          <input
            type="hidden"
            name="_next"
            value="https://sjurate.github.io/medrek/"
          />
          <div className=" input-field contact-form-name">
            <label>Jūsų vardas</label>
            <input
              type="text"
              name="name"
              placeholder="Jūsų vardas..."
              id="contact-form-name"
              required
            />
          </div>
          <div className="input-field contact-form-message">
            <label>Žinutė</label>
            <textarea
              type="text"
              name="message"
              rows="10"
              placeholder="Žinutės tekstas..."
              id="contact-form-message"
              required
            />
          </div>
          <div className="btn-submit-field">
            <button type="submit">Siųsti</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
