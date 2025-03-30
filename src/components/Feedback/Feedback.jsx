import s from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, totalFeedback }) => {
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positiv: {positiveFeedback}</p>
    </div>
  );
};

export default Feedback;
