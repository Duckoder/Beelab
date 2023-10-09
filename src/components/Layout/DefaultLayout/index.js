import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';
import SearchBar from '~/components/Layout/components/SearchBar';
import Carousel from '~/components/Layout/components/Carousel';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <SearchBar />
      <Header />
      <Carousel />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
