import s from './Options.module.css';

const Options = ({ onLeaveFeedback, onResetFeedback, showResetBtn }) => {
  return (
    <div className={s.wrapper}>
      <button onClick={() => onLeaveFeedback('good')} className={s.btnOption}>
        Good
      </button>
      <button onClick={() => onLeaveFeedback('neutral')} className={s.btnOption}>
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback('bad')} className={s.btnOption}>
        Bad
      </button>

      {showResetBtn && (
        <button onClick={onResetFeedback} className={s.btnOption}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
