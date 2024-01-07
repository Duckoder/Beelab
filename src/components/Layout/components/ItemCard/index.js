import Circle from '@uiw/react-color-circle';
import classNames from 'classnames/bind';
import styles from './ItemCard.module.scss';
import { CartContext } from '~/context/CartContext/index';
import { useContext } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Item(props) {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={props.productImage}
              alt="Front of men&#039;s Basic Tee in black."
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>
        <div
          className="absolute top-6 -right-11 group-hover:right-2 bg-red-500 p-2 flex flex-col items-center justify-center gap-y-2
          transition-all duration-300"
        >
          <button onClick={() => addToCart(props.productObj, props.productId)}>
            <div className=" flex justify-center items-center text-white w-auto h-auto">
              <PlusIcon className="h-6 w-6 text-3xl" aria-hidden="true" />
            </div>
          </button>
        </div>
      </div>
      <div>
        <div className="uppercase">{props.productCategory}</div>
        <Link to={`/product-detail/${props.productId}`} className="no-underline">
          <h2 className="font-semibold mb-1 text-sm text-black leading-4">{props.productName}</h2>
        </Link>
        <div className="text-red-500 font-semibold ">{parseFloat(props.productPrice).toFixed(3)}đ</div>
      </div>
    </div>
  );
}

export default Item;
