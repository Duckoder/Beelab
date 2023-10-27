import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Circle from '@uiw/react-color-circle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ItemCard.module.scss';

const cx = classNames.bind(styles);

function Item(props) {
  return (
    <Row xs={1} md={4} className=" d-flex justify-content-center">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx} className="p-3 d-flex justify-content-center">
          <div className={cx('item-cards')}>
            <div className={cx('img-container')}>
              <div className="d-flex justify-content-center fw-normal">
                <a href="/product-detail">
                  <img
                    src="https://dictionary.cambridge.org/vi/images/thumb/Tshirt_noun_001_18267.jpg?version=5.0.338"
                    className={cx('item-img')}
                    href="/product-detail"
                  />
                </a>
              </div>

              <div class={cx('icon-right')}>
                <a href="" className={cx('cart-icon')}>
                  <FontAwesomeIcon icon={faCartShopping} style={{ color: '#fff' }} />
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Circle colors={['#f1f1f1', '#000000', '#d0d0d0']} />
            </div>
            <div className="d-flex justify-content-center fw-normal">
              <a href="/product-detail" className={cx('item-name')}>
                Tên sản phẩm
              </a>
            </div>
            <div className="d-flex justify-content-center text-danger fw-bold mt-1">{(idx + 1) * 100}.000 VND</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Item;
