import { useState } from 'react';
import { database } from '../../../firebaseConfig';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitting(true);
    const feedbackRef = database.ref('feedback');
    const feedback = { name, email, message };
    feedbackRef.push(feedback).then(() => {
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitting(false);
      }, 2000); // delay in milliseconds
    });
  };
  
  
  

  const buttonContent = submitting ? 'Submitting...' : 'Submit';

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <div className='feedback-form__title-container'>
        <h2 className="feedback-form__title">your feedback matters</h2>
        <p>Want to share your thoughts with us concerning the peasantry or primer?
          </p>

          {/* Or... any creative works you'd like to send us? */}
        <p>Don't hesitate to drop us a message, we are always here to listen.</p>
      </div>

      <div className="feedback-form__field-container">
        <div className="feedback-form__field">
          <label className="feedback-form__label" htmlFor="name"><p className="feedback-form__label">Name</p></label>
          <input className="feedback-form__input" type="text" id="name" value={name} placeholder="Your name is..?" onChange={(e) => setName(e.target.value)} required autoComplete="off" />
        </div>
        <div className="feedback-form__field">
          <label className="feedback-form__label" htmlFor="email"><p className="feedback-form__label">Email</p></label>
          <input className="feedback-form__input" type="email" id="email" value={email} placeholder="What's your email?" onChange={(e) => setEmail(e.target.value)} required autoComplete="off" />
        </div>
        <div className="feedback-form__field">
          <label className="feedback-form__label" htmlFor="message"><p className="feedback-form__label">Feedback</p></label>
          <textarea className="feedback-form__input feedback-form__textarea" id="message" value={message} placeholder="Any feedback, questions, or concerns?" onChange={(e) => setMessage(e.target.value)} required autoComplete="off" />
        </div>
<button className="feedback-form__button" type="submit">
  {isSubmitting ? "Submitting..." : "Submit"}
</button>
      </div>
    </form>
  );
}

export default FeedbackForm;

// Based on your response, is the Submit button supposed to be like that? The text stays as "Submitting..." for a long time?