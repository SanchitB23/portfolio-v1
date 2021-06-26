import React from 'react';
import {navLinks} from "../../config/constants";

const Contact: React.FC = () => {
    return (
        <section className="contact" id={navLinks[3]}>
            <h1 className="section-heading contact__heading">what's next?</h1>
            <h2 className="contact__sub-heading">Get in touch</h2>
            <div className="contact__form">
                <form action={process.env.GATSBY_CONTACT_URL} className="form" method="POST">
                    <div className="form__group">
                        <input type="text" name="_name" className="form__input" placeholder="Full name" id="name"
                               required/>
                        <label htmlFor="name" className="form__label">Full name</label>
                    </div>

                    <div className="form__group">
                        <input type="email" name="_replyto" className="form__input" placeholder="Email address"
                               id="email" required/>
                        <label htmlFor="email" className="form__label">Email address</label>
                    </div>
                    <div className="form__group">
                        <textarea id="message" name="message" className="form__input" placeholder="Your message"/>
                        <label htmlFor="message" className="form__label">Your Message</label>
                    </div>
                    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                    <button className="btn" type="submit">Say Hello</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
