import { useContext } from 'react';
import { SideBarCartContext } from '~/context/SideBarCartContext';
import { XCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import CartItem from '~/components/Layout/components/CartItem';
import { CartContext } from '~/context/CartContext';
import { Link } from 'react-router-dom';

function SideBarCart() {
  const { isOpen, handleClose } = useContext(SideBarCartContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      }  w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40wv] xl:max-w-[45vw] transition-all duration-500 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Giỏ hàng ({itemAmount})</div>
        <div onClick={handleClose} className="cursor-pointer h-8 w-8 flex justify-center items-center">
          <XCircleIcon className="h-6 w-6 text-2xl" aria-hidden="true" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[370px] lg:h-[640ps] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem id={item.id} img={item.image} title={item.title} amount={item.amount} price={item.price} />;
        })}
      </div>
      <div className="flex w-full justify-between items-center mb-2 pl-2 mt-2">
        <span className="font-semibold text-sm">TỔNG TIỀN: {parseFloat(total).toFixed(2)}đ</span>
        <div
          onClick={clearCart}
          className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 justify-center items-center text-xl flex border rounded-md hover:bg-red-300"
        >
          <TrashIcon className="h-6 w-6" aria-hidden="true" />
        </div>
      </div>
      <Link
        to="/cartproduct"
        className="bg-gray-200 flex p-3 justify-center items-center text-black w-full font-medium no-underline hover:bg-gray-100"
      >
        Đến Giỏ Hàng
      </Link>
      <Link
        to="/payment"
        className="bg-black flex p-3 justify-center items-center text-white w-full font-medium no-underline mt-2 hover:bg-gray-500"
      >
        Thanh Toán
      </Link>
    </div>
  );
}

export default SideBarCart;
