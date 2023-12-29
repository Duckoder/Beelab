import classNames from 'classnames/bind';
import styles from './Searchbar.module.scss';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import Overflow from 'react-overflow-indicator';
import Sidebar from '../Sidebar';
import { Button, InputNumber, Space, Avatar, Badge } from 'antd';
import axios from 'axios';

const cx = classNames.bind(styles);

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.trim() === '') {
        setSuggestions([]); // Clear suggestions when search term is empty
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(`https://fakestoreapi.com/products?query=${searchTerm}`);
        setSuggestions(response.data); // Assuming the response is an array of suggestions
        setLoading(false);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //Giá tạm thời cho tới khi có data

  const price = 150;
  const [value, setValue] = useState('99');

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={cx('wrapper')}>
      <div className={cx(menuOpen ? 'open' : 'close')}>
        <Sidebar />
      </div>
      <div className={cx('fixed-nav')}>
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
            <input type="text" placeholder="Type to search..." value={searchTerm} onChange={handleInputChange} />
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ul>
                {suggestions.map((suggestion) => (
                  <li key={suggestion.id}>{suggestion.text}</li>
                  // Render other suggestion details as needed
                ))}
              </ul>
            )}
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#000000' }} /> */}
            {/* <Autocomplete /> */}
          </div>
          <div className={cx('search-bar')}>
            <InputGroup className="">
              <Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <InputGroup.Text id="basic-addon2">
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#000000' }} />
              </InputGroup.Text>
            </InputGroup>
          </div>
          <div className={cx('cart-btn')}>
            <div className={cx('navigation')}>
              <a href="/cartproduct">
                <Badge count={1}>
                  <Avatar
                    shape="square"
                    style={{ backgroundColor: '#f5f5f5' }}
                    icon={<FontAwesomeIcon icon={faCartShopping} style={{ color: 'black' }} />}
                  />
                </Badge>
              </a>

              <div className={cx('navigation-content')}>
                <Overflow style={{ maxHeight: 500 }}>
                  <Overflow.Content>
                    <Row className={cx('container-navbar')}>
                      {Array.from({ length: 8 }).map((_, idx) => (
                        <Stack direction="horizontal" gap={2} key={idx}>
                          <div className="p-2">
                            <img
                              src="https://dictionary.cambridge.org/vi/images/thumb/Tshirt_noun_001_18267.jpg?version=5.0.338"
                              className=""
                              alt="avatar"
                            />
                          </div>
                          <div className="p-2">
                            <div className="">Tên sản phẩm</div>
                            <div className="">Màu / Size</div>
                            <div className="">Số lượng</div>
                            <div className="">
                              <Space>
                                <InputNumber min={1} max={10} value={value} onChange={setValue} />
                                <Button
                                  type="primary"
                                  onClick={() => {
                                    setValue(1);
                                  }}
                                >
                                  Reset
                                </Button>
                              </Space>
                            </div>
                            <div>
                              Đơn giá:
                              <span className="text-danger p-2 fw-bold">{value * price}</span>
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
