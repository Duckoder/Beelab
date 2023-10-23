import classNames from 'classnames/bind';
import styles from './Searchbar.module.scss';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Stack from 'react-bootstrap/Stack';

const cx = classNames.bind(styles);

function SearchBar() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Stack direction="horizontal" gap={3}>
          <div className="p-2">
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
          <div className="p-2">
            <FontAwesomeIcon icon={faCartShopping} style={{ color: '#000000' }} />
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default SearchBar;
