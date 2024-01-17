import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Selector from '~/components/Layout/components/Selector';
import { BanknotesIcon, CreditCardIcon } from '@heroicons/react/20/solid';
import CartItem from '~/components/Layout/components/CartItem';
import { getAllProvinces, vnPayPayment } from '~/service/ApiService';

function Payment() {
  const [provinces, setProvinces] = useState([]);
  const paymentData = { amount: 1000000, orderInfo: `Thanh toan don hang` };
  const [redirect, setRedirect] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provs = await getAllProvinces();
        setProvinces(provs);
      } catch (error) {
        console.error('Error in component:', error);
      }
    };
    fetchData();
  }, []);

  const handlePayment = async () => {
    try {
      const link = await vnPayPayment(paymentData);
      console.log(link);
      window.location.replace(link);
      // setRedirect(link);
      // window.location.href = link;
    } catch (error) {
      console.error('Error in component:', error);
    }
  };

  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 md:grid-cols-1">
        <div className="col-span-2">
          <div className="flex justify-center items-center font-semibold text-2xl tracking-[10px] py-6">
            <a href="/" className=" no-underline text-black">
              BEELAB
            </a>
          </div>
          <div className="grid grid-cols-4 gap-6 px-6">
            <div className="col-span-2">
              <div className="flex">
                <div className="font-semibold text-sm">Thông tin nhận hàng</div>
                <div className="flex flex-1 justify-end font-semibold text-sm">Đăng nhập</div>
              </div>
              <div>
                <div class="relative w-full my-3">
                  <input
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder="  "
                  />
                  <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Họ và tên
                  </label>
                </div>
                <div class="relative w-full h-10 my-3">
                  <input
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder="  "
                  />
                  <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Số điện thoại
                  </label>
                </div>
                <div class="relative w-full h-10 my-3">
                  <input
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder="  "
                  />
                  <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Địa chỉ
                  </label>
                </div>
                <div className="flex my-3">
                  <Selector array={provinces} label="Chọn Tỉnh Thành" />
                </div>
                <div className="flex my-3">
                  <Selector array={provinces} label="Chọn Quận Huyện" />
                </div>
                <div className="flex my-3">
                  <Selector array={provinces} label="Chọn Xã Phường" />
                </div>
              </div>
              <div>
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900">
                  Ghi chú
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ghi chú..."
                ></textarea>
              </div>
            </div>
            <div className="flex-col col-span-2 justify-end">
              <div>
                <div className="font-semibold text-sm">Vận chuyển</div>
                <div className="flex w-full border my-3 h-15 rounded-[7px] items-center p-3">
                  <div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10 rounded-full"
                      ></input>
                    </div>
                  </div>
                  <div className="text-[0.8rem] ml-3">Giao hàng thông thường</div>
                  <div className="text-[0.8rem] flex flex-1 justify-end">20.000đ</div>
                </div>
                <div className="flex w-full border my-3 h-15 rounded-[7px] items-center p-3">
                  <div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10 rounded-full"
                      ></input>
                    </div>
                  </div>
                  <div className="text-[0.8rem] ml-3">Giao hàng hỏa tốc</div>
                  <div className="text-[0.8rem] flex flex-1 justify-end">30.000đ</div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-sm">Hình thức thanh toán</div>
                <div className="flex w-full border my-3 h-15 rounded-[7px] items-center p-3">
                  <div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10 rounded-full"
                      ></input>
                    </div>
                  </div>
                  <div className="text-[0.8rem] ml-3">Thanh toán khi nhận hàng(COD)</div>
                  <div className="text-[0.8rem] flex flex-1 justify-end">
                    <BanknotesIcon
                      className="-mr-1 ml-1 h-auto w-5 flex-shrink-0 text-black"
                      aria-hidden="true"
                    ></BanknotesIcon>
                  </div>
                </div>
                <div className="flex w-full border my-3 h-15 rounded-[7px] items-center p-3">
                  <div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10 rounded-full"
                      ></input>
                    </div>
                  </div>
                  <div className="text-[0.8rem] ml-3">Thanh toán online</div>
                  <div className="text-[0.8rem] flex flex-1 justify-end">
                    <CreditCardIcon
                      className="-mr-1 ml-1 h-auto w-5 flex-shrink-0 text-black"
                      aria-hidden="true"
                    ></CreditCardIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex bg-[#fafafa] md:flex-col">
          <div id="summary" class="w-full px-8 py-3">
            <h1 class="font-semibold text-2xl border-b pb-2 text-[1rem]">
              Đơn hàng(11 sản phẩm)
              {/* ({itemAmount}) */}
            </h1>
            <div className='flex flex-col gap-y-2 h-[200px] md:h-[300px] lg:h-[640ps] overflow-y-auto overflow-x-hidden border-b"'>
              <CartItem
                img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                amount={3}
                price={109.95}
              />
              <CartItem
                img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                amount={3}
                price={109.95}
              />
              <CartItem
                img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                amount={3}
                price={109.95}
              />
              <CartItem
                img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                amount={3}
                price={109.95}
              />
            </div>
            <div class="py-7">
              <label for="promo" class="font-semibold inline-block mb-2 text-sm uppercase">
                Mã giảm giá
              </label>
              <input type="text" id="promo" placeholder="Nhập mã" class="p-2 text-sm w-full" />
            </div>
            <button class="font-semibold bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase w-full">
              Áp dụng
            </button>
            <div class="border-t mt-8">
              <div class="flex font-semibold justify-between pt-6 pb-1 text-sm uppercase">
                <span>Tạm tính</span>
                <span>
                  {/* {parseFloat(total).toFixed(3)}đ */}
                  100.000đ
                </span>
              </div>
              <div class="flex font-semibold justify-between py-1 text-sm uppercase">
                <span>Vận chuyển</span>
                <span>
                  {/* {parseFloat(total).toFixed(3)}đ */}
                  100.000đ
                </span>
              </div>
              <div class="flex font-semibold justify-between pt-1 pb-6 text-sm uppercase">
                <span>Tổng tiền</span>
                <span>
                  {/* {parseFloat(total).toFixed(3)}đ */}
                  100.000đ
                </span>
              </div>
              <button
                onClick={() => handlePayment()}
                class="bg-black font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
              >
                <a href="" className="text-white no-underline">
                  Thanh toán
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
