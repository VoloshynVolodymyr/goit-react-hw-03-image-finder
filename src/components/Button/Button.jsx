import PropTypes from 'prop-types';
import { ButtonMore } from "./Button.styled";

export default function Button({ text = '', onClick }) {
  return (
    <ButtonMore type="button" onClick={onClick}>
      {text}
    </ButtonMore>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};