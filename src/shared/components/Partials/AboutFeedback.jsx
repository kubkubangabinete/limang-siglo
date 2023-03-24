import { useState } from "react";
import { database } from "../../../firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Terms from "./Terms";
import Privacy from "./Privacy";

function AboutFeedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const feedbackRef = database.ref("feedback");
    const feedback = {
      name,
      email,
      message,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    };
    feedbackRef.push(feedback).then(() => {
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    });
  };

  return (
    <div className="about-feedback">
    <form className="feedback-form" onSubmit={handleSubmit}>
      {/*  */}
      <div className="feedback-form__title-container">
        <h2 className="feedback-form__title">your feedback matters</h2>
        <p>
          Want to share your thoughts with us concerning the peasantry or
          primer?
        </p>
        <p>
          Don't hesitate to drop us a message, we are always here to listen.
        </p>
      </div>

      <div className="feedback-form__field-container">
        <div className="feedback-form__field">
          <label className="feedback-form__label" htmlFor="name">
            <p className="feedback-form__label">Name</p>
          </label>
          <input
            className="feedback-form__input"
            type="text"
            id="name"
            value={name}
            placeholder="Your name is..?"
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className="feedback-form__field">
          <label className="feedback-form__label" htmlFor="email">
            <p className="feedback-form__label">Email</p>
          </label>
          <input
            className="feedback-form__input"
            type="email"
            id="email"
            value={email}
            placeholder="What's your email?"
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        
        <div className="feedback-form__field">
          <label className="feedback-form__label" htmlFor="message">
            <p className="feedback-form__label">Feedback</p>
          </label>
          <textarea
            className="feedback-form__input feedback-form__textarea"
            id="message"
            value={message}
            placeholder="Any feedback, questions, or concerns?"
            onChange={(e) => setMessage(e.target.value)}
            required
            autoComplete="off"
          />
        </div>

        {/* Terms and Conditions and Privacy Policy*/}
        <div className="feedback-form__terms-privacy-container">
          <button
            type="button"
            className="terms-privacy-btn"
            onClick={() => setIsTermsOpen(true)}
          >
            Terms
          </button>
          <button
            type="button"
            className="terms-privacy-btn"
            onClick={() => setIsPrivacyOpen(true)}
          >
            Privacy
          </button>
          
        </div>
        <Terms open={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
        <Privacy open={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        

        {/* Submit Button */}
        <button
          className="feedback-form__button"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
    </div>
  );
}

export default AboutFeedback;
