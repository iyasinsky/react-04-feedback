import propTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string),
  onLeaveFeedback: propTypes.func,
};
