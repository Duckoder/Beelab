import { useContext } from 'react';
import { XCircleIcon, TrashIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import CartItem from '~/components/Layout/components/CartItem';
import { CartContext } from '~/context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  if (itemAmount === 0) {
    return (
      <div className="py-6">
        <section className="h-28"></section>
        <div className="flex">
          <div className="w-full uppercase font-semibold text-sm lg:text-2xl border-b">Giỏ hàng của bạn</div>
        </div>
        <div className="flex flex-col gap-y-2 h-[370px] lg:h-[640ps] overflow-y-auto overflow-x-hidden border-b py-6 justify-center items-center">
          <div>
            <ShoppingBagIcon className="h-20 w-20" aria-hidden="true" />
          </div>
          <div className="font-semibold text-sm">Bạn chưa có sản phẩm nào</div>
          <Link to="/product" className="font-semibold text-sm no-underline">
            Hãy quay lại và lựa một vài sản phẩm nhé
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="flex">
        <div className="w-full uppercase font-semibold text-sm lg:text-2xl border-b">Giỏ hàng của bạn</div>
      </div>
      <div className="flex flex-col gap-y-2 overflow-y-auto overflow-x-hidden border-b">
        <div className="flex">
          <div className="flex flex-1 justify-between">Thông tin sản phẩm</div>
          <div className="flex flex-1 justify-around">Đơn giá</div>
          <div className="flex justify-end mr-32">Số lượng</div>
          <div className="flex  justify-end">Thành tiền</div>
        </div>
        {cart.map((item) => {
          return (
            <div className="flex py-3">
              <div className="w-32 min-h-[100px] flex items-center justify-center gap-x-2">
                <div>
                  <img
                    src={item.image}
                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                    class=" max-w-[80px] h-17 object-cover object-center"
                  />
                </div>
              </div>

              <div class="ml-4 flex flex-1 flex-col">
                <div>
                  <div class="flex justify-between text-base font-medium text-gray-900 xs:max-w-[150px] md:max-w-[250px] xl:max-w-[250px]">
                    <a
                      href={`/product-detail/${item.id}`}
                      className="font-semibold no-underline text-base text-black p-0"
                    >
                      {item.title}
                    </a>
                  </div>
                  <p class="mt-1 text-sm text-gray-500">Salmon</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    type="button"
                    className="text-sm text-gray-500 font-medium"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
