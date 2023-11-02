import classNames from 'classnames/bind';
import styles from './Searchbar.module.scss';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser, faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Overflow from 'react-overflow-indicator';

const cx = classNames.bind(styles);

function SearchBar() {
  //Giá tạm thời cho tới khi có data
  const price = 150;

  const [counter, setCounter] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleIncreaseNumber = () => {
    setCounter(counter + 1);
  };

  const handleDecreaseNumber = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('fixed-nav')}>
        <div className={cx(menuOpen ? 'open' : 'close')}>
          <p>sdasd</p>
        </div>
        {/* <div className={cx('menu-side-responsive')}>
        </div> */}
        <div
          className={cx('menu-icon-responsive')}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#000000' }} />
        </div>
        <div className={cx('logo-responsive')}>
          <a href="/" className={cx('nav-links')}>
            BEELAB
          </a>
        </div>
        <div className={cx('inner')}>
          <div className={cx('search-icon-responsive')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#000000' }} />
          </div>
          <div className={cx('search-bar')}>
            <InputGroup className="">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#000000' }} />
              </InputGroup.Text>
            </InputGroup>
          </div>
          <div className={cx('cart-btn')}>
            <div className={cx('navigation')}>
              <a href="/cartproduct">
                <FontAwesomeIcon icon={faCartShopping} style={{ color: '#000000' }} />
              </a>
              <div className={cx('navigation-content')}>
                <Overflow style={{ maxHeight: 500 }}>
                  <Overflow.Content>
                    <Row className={cx('container-navbar')}>
                      {Array.from({ length: 8 }).map((_, idx) => (
                        <Stack direction="horizontal" gap={2}>
                          <div className="p-2">
                            <img
                              src="https://dictionary.cambridge.org/vi/images/thumb/Tshirt_noun_001_18267.jpg?version=5.0.338"
                              className=""
                            />
                          </div>
                          <div className="p-2">
                            <div className="">Tên sản phẩm</div>
                            <div className="">Màu / Size</div>
                            <div className="">Số lượng</div>
                            <div className="">
                              <InputGroup className="mb-3">
                                <Button variant="outline-secondary" onClick={handleDecreaseNumber}>
                                  -
                                </Button>
                                <Form.Control
                                  aria-label="Example text with two button addons"
                                  value={counter}
                                  disabled
                                />
                                <Button variant="outline-secondary" onClick={handleIncreaseNumber}>
                                  +
                                </Button>
                              </InputGroup>
                            </div>
                            <div>
                              Đơn giá:
                              <span className="text-danger p-2 fw-bold">{counter * price}</span>
                            </div>
                          </div>
                        </Stack>
                      ))}
                    </Row>
                  </Overflow.Content>
                </Overflow>
              </div>
            </div>
          </div>
          <div className={cx('login-btn')}>
            <a href="/login-page">
              <FontAwesomeIcon icon={faUser} style={{ color: '#000000' }} />{' '}
            </a>
          </div>
          {/* </Stack> */}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
