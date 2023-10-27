import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classNames from 'classnames/bind';
import styles from './ProductDetail.modules.scss';
import Circle from '@uiw/react-color-circle';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProductDetail() {
  const sizeArr = [
    {
      id: 1,
      name: 'X',
    },
    {
      id: 2,
      name: 'L',
    },
    {
      id: 3,
      name: 'XL',
    },
  ];

  const [checked, setChecked] = useState();

  const [counter, setCounter] = useState(1);

  const handleIncreaseNumber = () => {
    setCounter(counter + 1);
  };

  const handleDecreaseNumber = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  const handleChangeColor = () => {
    setIsActive((current) => !current);
  };

  return (
    <Container>
      <Row>
        <div className="col-md-8">
          <div className="pro-img-details">
            <img
              src="https://bizweb.dktcdn.net/100/415/697/products/kem-1-186eb0a8-1b6c-4b55-8c91-f65d44796b49.jpg?v=1692016656817"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4">
          <h5 className={cx('product-name')}>TÊN SẢN PHẨM</h5>
          <hr />
          <h5 className={cx('product-price')}>100.000 VND</h5>
          <div className="mt-3">Thông tin sản phẩm</div>
          <ul className={cx('product-description')}>
            {Array.from({ length: 4 }).map((_, idx) => (
              <li className={cx('product-description-element')} key={idx}>
                Mô tả
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <span>Màu sắc</span>
            <Circle colors={['#f1f1f1', '#000000', '#d0d0d0']} />
          </div>
          <div className="mt-3">
            <span>Size: </span>
            <div className={cx('product-size')}>
              {Array.from(sizeArr).map((sizeArr) => (
                <div key={sizeArr.id}>
                  <input
                    checked={checked === sizeArr.id}
                    id={sizeArr.name}
                    type="radio"
                    className={cx('product-size-element-radio')}
                    onChange={() => setChecked(sizeArr.id)}
                  ></input>
                  <label for={sizeArr.name} className={cx('product-size-element-label')}>
                    {sizeArr.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className={cx('product-number-of')}>
            <InputGroup className="mb-3">
              <Button variant="outline-secondary" onClick={handleDecreaseNumber}>
                -
              </Button>
              <Form.Control
                className="bg-white"
                aria-label="Example text with two button addons"
                value={counter}
                disabled
              />
              <Button variant="outline-secondary" onClick={handleIncreaseNumber}>
                +
              </Button>
            </InputGroup>
          </div>
          <div className={cx('product-status')}>
            Trạng thái: <b className="text-danger ms-1">Còn hàng</b>
          </div>
          <div className={cx('product-order-btn')}>THÊM VÀO GIỎ HÀNG</div>
        </div>
      </Row>
      <Row className={cx('product-detailed-description')}>
        <h3 className="d-flex justify-content-center mt-4">Mô tả sản phẩm</h3>
        <p>....</p>
      </Row>

      <Row className={cx('product-recommend')}>
        <h3 className="d-flex justify-content-center mt-3">Sản phẩm tương tự</h3>
        <Row xs={1} md={5} className=" d-flex justify-content-center mb-5">
          {Array.from({ length: 5 }).map((_, idx) => (
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
      </Row>
    </Container>
  );
}
export default ProductDetail;
