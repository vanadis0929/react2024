import PropTypes from 'prop-types';

//작성한 css를 불러와서 모듈화시키는 것이 가능 (해당 컴포넌트에서만 사용된다.)
//css문법으로 작성한 css를 스크립트 객체형식으로 불러오는것이 가능.
// module.css / module.sass / css-in-js (styled component) 등의 방법이 있음
import styles from '../css/Button.module.css';

const Button = ({ type = 'button', text, color }) => {
  return (
    <button className={styles.el_btn} type={type} style={{ color }}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Button;
