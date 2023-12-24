import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SearchBar from '../SearchBar';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <SearchBar />
      <div className={cx('inner')}>
        <Container fluid className="">
          <div className={cx('navbar-responsive')}>
            <ul className={cx('navbar-container')}>
              <li className={cx('nav-links')}>
                <a href="/product" className={cx('nav-items')}>
                  SẢN PHẨM
                </a>
              </li>
              <li className={cx('nav-links')}>
                <a href="/about" className={cx('nav-items')}>
                  VỀ CHÚNG TÔI
                </a>
              </li>
              <li className={cx('nav-links')}>
                <a href="/" className={cx('nav-logo')}>
                  BEELAB
                </a>
              </li>
              <li className={cx('nav-links')}>
                <a href="/size" className={cx('nav-items')}>
                  BẢNG SIZE
                </a>
              </li>
              <li className={cx('nav-links')}>
                <a href="/return-policy" className={cx('nav-items')}>
                  CHÍNH SÁCH ĐỔI TRẢ
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '10px',
              marginBottom: '15px',
            }}
          >
            <div style={{ flex: 1, height: '1px', backgroundColor: ' #000000a4' }} />
          </div>
          <Row className={cx('container-navbar')}>
            {Array.from({ length: 8 }).map((_, idx) => (
              <Col key={idx} className="d-flex justify-content-center">
                <a href="/product" className={cx('list-product')}>
                  SP
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default Header;
