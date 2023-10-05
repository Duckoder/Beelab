import classNames from 'classnames/bind';
import styles from './Searchbar.module.scss';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchBar() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <InputGroup className={cx('search-bar')}>
          <Form.Control placeholder="Tìm kiếm ở đây..." aria-label="Searching here" aria-describedby="basic-addon2" />
          <InputGroup.Text id="basic-addon2" className={cx('search-icon')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#ffffff' }} />
          </InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  );
}

export default SearchBar;
