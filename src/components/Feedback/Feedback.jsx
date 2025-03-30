import s from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.tableContainer}>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>{totalFeedback}</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Positiv</strong>
            </td>
            <td>
              <strong>{positiveFeedback}%</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Feedback;
