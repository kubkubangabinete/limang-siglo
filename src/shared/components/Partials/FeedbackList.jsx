import { useEffect, useState } from 'react';
import { database } from '../../../firebaseConfig';

function FeedbackList() {
	const [feedbackList, setFeedbackList] = useState([]);
  
	useEffect(() => {
	  const feedbackRef = database.ref('feedback');
	  feedbackRef.on('value', (snapshot) => {
		const feedbackData = snapshot.val();
		const feedbackList = feedbackData ? Object.values(feedbackData) : [];
		setFeedbackList(feedbackList);
	  });
	  return () => feedbackRef.off();
	}, []);
  
	return (
	  <ul className="feedback-list">
		{feedbackList.map((feedback) => (
		  <li className="feedback-list__item" key={feedback.id}>
			<p className="feedback-list__text"><span className="feedback-list__label">Name:</span> {feedback.name}</p>
			<p className="feedback-list__text"><span className="feedback-list__label">Email:</span> {feedback.email}</p>
			<p className="feedback-list__text"><span className="feedback-list__label">Message:</span> {feedback.message}</p>
		  </li>
		))}
	  </ul>
	);
  }

export default FeedbackList;
