import React from "react";

function Contact(props) {
  return (
    // <!-- Contact Section Start -->
    <div className={props.mode}>
      <section id="contact_Box">
        <p className="wana_contact_text">
          Wanna hire me?! Have a piece of advice for me ? <br />
          &nbsp;&nbsp; &nbsp; Maybe have some questions ?!
        </p>
        <form action="./index_Contact Me.html">
          <button type="submit" className="button_contact" formtarget="_self">
            Contact Me
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
