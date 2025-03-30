import s from './Options.module.css';

const Options = ({ onLeaveFeedback, onResetFeedback, showResetBtn }) => {
  return (
    <div className={s.wrapper}>
      <button onClick={() => onLeaveFeedback('good')} className={s.btn__option}>
        Good
      </button>
      <button onClick={() => onLeaveFeedback('neutral')} className={s.btn__option}>
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback('bad')} className={s.btn__option}>
        Bad
      </button>

      {showResetBtn && (
        <button onClick={onResetFeedback} className={s.btn__option}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
