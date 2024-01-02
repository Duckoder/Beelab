import { Fragment, useState, useEffect, useContext } from 'react';
import { Dialog, Disclosure, Popover, Transition, Menu } from '@headlessui/react';
import { Bars3Icon, UserCircleIcon, XMarkIcon, ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { CartContext } from '~/context/CartContext/index';
import CartItem from '../CartItem';

const products = [
  { name: 'Tất cả sản phẩm', href: '/product' },
  { name: "Men's Clothing", href: '/product' },
  { name: 'Jewelery', href: '/product' },
  { name: 'Electronics', href: '/product' },
  { name: 'Womens clothing', href: '/product' },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function TailwindHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  return (
    <div className="w-full top-0 mb-3">
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="hidden lg:flex lg:flex-1">
            <a href="/" className="flex -m-1.5 p-1.5 no-underline">
              <img
                className="h-8 w-auto mr-1"
                src="https://i.pinimg.com/564x/b4/4b/33/b44b3329026166543b583614ba455865.jpg"
                alt=""
              />
              <span className="flex items-center gap-x-1 text-lg font-semibold leading-6 tracking-[0.3em] text-gray-900">
                BEELAB
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex lg:hidden">
            <img
              className="h-8 w-auto mr-1"
              src="https://i.pinimg.com/564x/b4/4b/33/b44b3329026166543b583614ba455865.jpg"
              alt=""
            />
            <span className="flex items-center gap-x-1 text-lg font-semibold leading-6 tracking-[0.3em] text-gray-900">
              BEELAB
            </span>
          </div>

          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Sản Phẩm
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900 no-underline">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <a href="/size" className="text-sm font-semibold leading-6 text-gray-900 no-underline">
              Bảng Size
            </a>
            <a href="/return-policy" className="text-sm font-semibold leading-6 text-gray-900 no-underline">
              Chính Sách Đổi Trả
            </a>
            <a href="/about" className="text-sm font-semibold leading-6 text-gray-900 no-underline">
              Về chúng tôi
            </a>
          </Popover.Group>

          <div className=" lg:flex lg:flex-1 lg:justify-end mr-[5px]">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <div>
                    <span className="  bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 z-50">
                      {itemAmount}
                    </span>
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      <div className="container mx-auto">
                        <div className="">
                          <div className="uppercase font-semibold no-underline text-base text-black p-0 pt-2">
                            Tổng sản phẩm ({itemAmount})
                          </div>
                          <hr />
                          <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640ps] overflow-y-auto overflow-x-hidden border-b">
                            {cart.map((item) => {
                              return (
                                <CartItem
                                  id={item.id}
                                  img={item.image}
                                  title={item.title}
                                  amount={item.amount}
                                  price={item.price}
                                />
                              );
                            })}
                          </div>
                          <hr />
                          <div className="flex w-full justify-between items-center mb-2 pl-2 mt-2">
                            <span className="font-semibold">TỔNG TIỀN: {parseFloat(total).toFixed(2)}đ</span>
                            <div
                              onClick={clearCart}
                              className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 justify-center items-center text-xl flex border rounded-md hover:bg-red-300"
                            >
                              <TrashIcon className="h-6 w-6" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <div className="hidden lg:flex lg:justify-end">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/login-page"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900 no-underline' : 'text-gray-700 no-underline',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          Đăng nhập
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/register-page"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900 no-underline' : 'text-gray-700 no-underline',
                            'block px-4 py-2 text-sm ',
                          )}
                        >
                          Đăng ký
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="flex -m-1.5 p-1.5 no-underline">
                <img
                  className="h-8 w-auto"
                  src="https://i.pinimg.com/564x/b4/4b/33/b44b3329026166543b583614ba455865.jpg"
                  alt=""
                />
                <span className="flex items-center gap-x-1 text-lg font-bold leading-6 tracking-[0.3em] text-gray-900">
                  BEELAB
                </span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Sản phẩm
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="/size"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                  >
                    Bảng Size
                  </a>
                  <a
                    href="/return-policy"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                  >
                    Chính sách đổi trả
                  </a>
                  <a
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                  >
                    Về Chúng Tôi
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="/login-page"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

export default TailwindHeader;
