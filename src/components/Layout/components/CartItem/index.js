import { useContext } from 'react';
import { CartContext } from '~/context/CartContext/index';
import { XMarkIcon } from '@heroicons/react/24/outline';

function CartItem(props) {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  return (
    <div className="flex py-3">
      <div className="w-32 min-h-[50px] flex items-center justify-center gap-x-2">
        <div>
          <img
            src={props.img}
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            class="max-w-[20px] sm:max-w-[50px] lg:max-w-[70px] h-17 object-cover object-center"
          />
        </div>
      </div>

      <div class="ml-4 flex flex-1 flex-col">
        <div>
          <div class="flex justify-between text-base font-medium text-gray-900">
            <a href={`/product-detail/${props.id}`} className="font-semibold no-underline text-[0.8rem] text-black p-0">
              {props.title}
            </a>
            <button onClick={() => removeFromCart(props.id)} type="button" className="font-medium align-middle">
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <p class="mt-1 text-sm text-gray-500">Salmon</p>
        </div>
        <div class="flex flex-1 items-end justify-between text-sm h-auto">
          <div class="flex flex-1 sm:max-w-[100px]  items-center text-gray-500 h-auto border font-medium">
            <div
              onClick={() => decreaseAmount(props.id)}
              className="flex-1 flex justify-center items-center cursor-pointer"
            >
              -
            </div>
            <div className="flex justify-center items-center px-2">{props.amount}</div>
            <div
              onClick={() => increaseAmount(props.id)}
              className="flex-1  flex justify-center items-center cursor-pointer"
            >
              +
            </div>
          </div>
          <div class="flex-1 flex justify-around items-center text-sm font-medium">
            {parseFloat(props.price).toFixed(2)}đ
          </div>
          <div class="flex-1 flex justify-end items-center text-sm font-medium">
            {parseFloat(props.price * props.amount).toFixed(2)}đ
          </div>
          <div class="flex"></div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
