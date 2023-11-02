import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>BEELAB</div>
        <div className={cx('username')}>
          <input className={cx('username-input')} placeholder="Tên đăng nhập" />
        </div>
        <div className={cx('password')}>
          <input className={cx('password-input')} placeholder="Mật khẩu" />
        </div>
        <div className={cx('more-option')}>
          <a className={cx('forgot-password')} href="/forgot-pass">
            Quên mật khẩu?
          </a>
          <a className={cx('register')} href="/register-page">
            Chưa có tài khoản?
          </a>
        </div>
        <div className={cx('submit')}>
          <input className={cx('submit-btn')} value={'ĐĂNG NHẬP'} type="button" />
        </div>
        <div className={cx('back-btn')}>
          <a className={cx('back')} href="/">
            <FontAwesomeIcon icon={faChevronLeft} style={({ color: '#000000' }, { marginRight: '5px' })} />
            Quay lại
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
