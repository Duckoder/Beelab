import classNames from 'classnames/bind';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>BEELAB</div>
        <div className={cx('name')}>
          <input className={cx('name-input')} placeholder="Họ và tên" />
        </div>
        <div className={cx('phonenum')}>
          <input className={cx('phonenum-input')} placeholder="SDT" />
        </div>
        <div className={cx('mail')}>
          <input className={cx('mail-input')} placeholder="Mail" />
        </div>
        <div className={cx('username')}>
          <input className={cx('username-input')} placeholder="Tên đăng nhập" />
        </div>
        <div className={cx('password')}>
          <input className={cx('password-input')} placeholder="Mật khẩu" />
        </div>
        <div className={cx('re-password')}>
          <input className={cx('re-password-input')} placeholder="Nhập lại mật khẩu" />
        </div>
        <div className={cx('more-option')}>
          <a className={cx('forgot-password')} href="/">
            Về trang chủ
          </a>
          <a className={cx('register')} href="/login-page">
            Đã có tài khoản?
          </a>
        </div>
        <div className={cx('submit')}>
          <input
            className="bg-black text-white hover:bg-slate-400 font-bold tracking-[0.1em]"
            value={'ĐĂNG KÝ'}
            type="button"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
