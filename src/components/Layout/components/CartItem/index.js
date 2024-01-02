import { useContext } from 'react';
import { CartContext } from '~/context/CartContext/index';

function CartItem(props) {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  return (
    <div className="flex py-6">
      <div class="h-32 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mt-2 flex items-center">
        <img
          src={props.img}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          class="w-17 h-17 object-cover object-center"
        />
      </div>

      <div class="ml-4 flex flex-1 flex-col">
        <div>
          <div class="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a
                href={`/product-detail/${props.productId}`}
                className="font-semibold no-underline text-base text-black p-0"
              >
                {props.title}({props.price}đ)
              </a>
            </h3>
            <div className="flex">
              <p class="ml-4 mt-2 text-sm">{parseFloat(props.price * props.amount).toFixed(2)}đ</p>
            </div>
          </div>
          <p class="mt-1 text-sm text-gray-500">Salmon</p>
        </div>
        <div class="flex flex-1 items-end justify-between text-sm">
          <div class="flex flex-1 max-w-[100px] items-center text-gray-500 h-full border font-medium">
            <div
              onClick={() => decreaseAmount(props.id)}
              className="flex-1 h-full flex justify-center items-center cursor-pointer"
            >
              -
            </div>
            <div className="h-full flex justify-center items-center px-2">{props.amount}</div>
            <div
              onClick={() => increaseAmount(props.id)}
              className="flex-1 h-full flex justify-center items-center cursor-pointer"
            >
              +
            </div>
          </div>
          <div class="flex">
            <button
              onClick={() => removeFromCart(props.id)}
              type="button"
              className="font-medium align-middle text-indigo-600 hover:text-indigo-500"
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
