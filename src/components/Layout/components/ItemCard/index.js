import Circle from '@uiw/react-color-circle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ItemCard.module.scss';

const cx = classNames.bind(styles);

function Item(props) {
  return (
    <div className={cx('item-cards')}>
      <div className={cx('img-container')}>
        <div className="d-flex justify-content-center fw-normal">
          <a href={`/product-detail/${props.productId}`}>
            <img src={props.productImage} className={cx('item-img')} href={`/product-detail/${props.productId}`} />
          </a>
        </div>

        <div class={cx('icon-right')}>
          <a href="" className={cx('cart-icon')}>
            <FontAwesomeIcon icon={faCartShopping} style={{ color: '#fff' }} />
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Circle colors={['#f1f1f1', '#000000', '#d0d0d0']} />
      </div>
      <div className="d-flex justify-content-center fw-normal">
        <a href={`/product-detail/${props.productId}`} className={cx('item-name')}>
          {props.productName}
        </a>
      </div>
      <div className="d-flex justify-content-center text-danger fs-5 fw-bold mt-1">{props.productPrice}đ</div>
    </div>
  );
}

export default Item;
