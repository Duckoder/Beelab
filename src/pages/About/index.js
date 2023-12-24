import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

function About() {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>Về Chúng tôi</h3>
      <ol type="1">
        <li>
          <b>Email: </b>beelab@gmail.com
        </li>
        <li>
          <b>Phone: </b> beelab@gmail.com
        </li>
        <li>
          <b>Facebook: </b>beelab@gmail.com
        </li>
        <li>
          <b>Tiktok: </b>beelab@gmail.com
        </li>
        <li>
          <b>Instagram: </b> beelab@gmail.com
        </li>
      </ol>

      <span className={cx('brand')}>BEELAB</span>
      <br></br>
      <span className={cx('slogan')}>Experiment on Your Style</span>
    </div>
  );
}

export default About;
