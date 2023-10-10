import classNames from 'classnames/bind';
import styles from './Searchbar.module.scss';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchBar() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <InputGroup className='w-25 h-75'>
          <Form.Control placeholder="Tìm kiếm ở đây..." aria-label="Searching here" aria-describedby="basic-addon2" />
          <InputGroup.Text id="basic-addon2" className='bg-dark'>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#ffffff' }} />
          </InputGroup.Text>
        </InputGroup>
        <FontAwesomeIcon icon={faCartShopping} size="lg" style={{color: "#212529",}}  className='ms-3'/>
      </div>
    </div>
  );
}

export default SearchBar;
