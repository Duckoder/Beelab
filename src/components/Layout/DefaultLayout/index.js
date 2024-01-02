import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Footer from '~/components/Layout/components/Footer';
import TailwindHeader from '~/components/Layout/components/TailwindHeader';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className="relative">
      <TailwindHeader />
      <section className="h-28"></section>
      <div className={cx('container')}>
        <div className={cx('content')}> {children} </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
