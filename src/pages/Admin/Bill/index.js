import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { PencilSquareIcon, TrashIcon, FunnelIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function Bill() {
  const data = [
    {
      id: ' ca3cf812-9a1b-44db-a597-ad75635a8976',
      customer: 'Áo',
      total: 123,
      status: 'Chờ thanh toán',
      payment: 'Momo',
      paymentStatus: 'Đã thanh toán',
      date: '12/09/2003',
    },
    {
      id: ' ca3cf812-9a1b-44db-a597-ad75635a8976',
      customer: 'Áo',
      total: 123,
      status: 'Chờ thanh toán',
      payment: 'Momo',
      paymentStatus: 'Đã thanh toán',
      date: '12/09/2003',
    },
    {
      id: ' ca3cf812-9a1b-44db-a597-ad75635a8976',
      customer: 'Áo',
      total: 123,
      status: 'Chờ thanh toán',
      payment: 'Momo',
      paymentStatus: 'Đã thanh toán',
      date: '12/09/2003',
    },
    {
      id: ' ca3cf812-9a1b-44db-a597-ad75635a8976',
      customer: 'Áo',
      total: 123,
      status: 'Chờ thanh toán',
      payment: 'Momo',
      paymentStatus: 'Đã thanh toán',
      date: '12/09/2003',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu1, setIsOpenMenu1] = useState(false);
  const [isOpenMenu2, setIsOpenMenu2] = useState(false);
  const [isOpenMenu3, setIsOpenMenu3] = useState(false);
  const [isOpenMenu4, setIsOpenMenu4] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown1 = () => {
    setIsOpenMenu1(!isOpenMenu1);
  };
  const toggleDropdown2 = () => {
    setIsOpenMenu2(!isOpenMenu2);
  };
  const toggleDropdown3 = () => {
    setIsOpenMenu3(!isOpenMenu3);
  };
  const toggleDropdown4 = () => {
    setIsOpenMenu4(!isOpenMenu4);
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded">
      <div className="">
        <p className="text-[0.9rem] pb-2 border-b-2">
          Tổng số sản phẩm:
          <span className="text-[0.9rem] font-semibold"> 100</span>
        </p>
      </div>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center rounded-[5px]">
          <input
            type="text"
            className="bg-[#f8f9fc] 
                h-[40px] outline-none pl-[13px] w-[350px] border-none
                rounded-[5px] placeholder:text-[14px] text-[14px] leading-[20px] font-normal"
            placeholder="Tìm kiếm"
          />
          <div
            className="bg-[#334155] hover:bg-[#4b5f7b] h-[40px] px-[14px] flex items-center justify-center cursor-pointer
                  rounded-tr-[5px] rounded-br-[5px]"
          >
            <FaSearch className="text-white" size={16} />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex items-center px-3 py-[10px] text-[0.8rem] ml-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-50 active:text-gray-800"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <FunnelIcon className="h-4 w-4 mx-[3px]" />
              <span className="px-3">Lọc sản phẩm</span>
              <ChevronDownIcon className="h-4 w-4 mx-[3px]" />
            </button>

            {isOpen && (
              <div
                className="origin-top-right text-[0.8rem] absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold ">Filters</div>
                      <div className="flex">
                        <button className="mr-2 text-[#334155]">Áp dụng lọc</button>
                        <button className="text-[#334155]">Xóa lọc</button>
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="flex items-center justify-between w-full border-b-2">
                        <div>Khoảng thời gian</div>
                        <button onClick={() => toggleDropdown1()}>
                          <ChevronDownIcon className="h-4 w-4 mx-[3px]" />
                        </button>
                      </div>
                      <div className={`${!isOpenMenu1 && 'h-0 overflow-hidden'} relative mt-2`}>
                        <input type="date" className="mr-2 p-2" />
                        <input type="date" className="p-2" />
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="flex items-center justify-between w-full border-b-2">
                        <div>Khoảng tiền</div>
                        <button onClick={() => toggleDropdown2()}>
                          <ChevronDownIcon className="h-4 w-4 mx-[3px]" />
                        </button>
                      </div>
                      <div
                        className={`${
                          !isOpenMenu2 && 'h-0 overflow-hidden'
                        } relative mt-2 flex items-center justify-between`}
                      >
                        <input type="number" className="mr-2 p-2" placeholder="Từ" min="0" />
                        <input type="number" className="p-2" placeholder="Đến" min="0" />
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="flex items-center justify-between w-full border-b-2">
                        <div>Trạng thái đơn hàng</div>
                        <button onClick={() => toggleDropdown3()}>
                          <ChevronDownIcon className="h-4 w-4 mx-[3px]" />
                        </button>
                      </div>
                      <div className={`${!isOpenMenu3 && 'h-0 overflow-hidden'} relative mt-2`}>
                        <select
                          className={`w-full px-3 py-[5px] text-gray-500 bg-white
                         border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600`}
                        >
                          <option defaultChecked>Không chọn</option>
                          <option>Laravel 9 with React</option>
                          <option>React with Tailwind CSS</option>
                          <option>React With Headless UI</option>
                        </select>
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="flex items-center justify-between w-full border-b-2">
                        <div>Trạng thái thanh toán</div>
                        <button onClick={() => toggleDropdown4()}>
                          <ChevronDownIcon className="h-4 w-4 mx-[3px]" />
                        </button>
                      </div>
                      <div className={`${!isOpenMenu4 && 'h-0 overflow-hidden'} relative mt-2`}>
                        <select
                          className={`w-full px-3 py-[5px] text-gray-500 bg-white
                         border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600`}
                        >
                          <option defaultChecked>Không chọn</option>
                          <option>Laravel 9 with React</option>
                          <option>React with Tailwind CSS</option>
                          <option>React With Headless UI</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-300 rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 pl-5 pr-7  border-b text-[0.8rem]">Mã đơn</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Khách hàng</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Tổng tiền</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Tình trạng</th>
            <th className="py-2 px-1 border-b text-[0.8rem]">Thanh toán</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Trạng thái thanh toán</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Ngày đặt</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-[0.8rem]">
              <td className="py-2 pl-5 pr-7 border-b font-bold">{item.id}</td>
              <td className="py-2 px-4 border-b ">{item.customer}</td>
              <td className="py-2 px-4 border-b">{parseFloat(item.total).toFixed(3)}đ</td>
              <td className="py-2 px-4 border-b">{item.status}</td>
              <td className="py-2 px-1 border-b">{item.payment}</td>
              <td className="py-2 px-4 border-b">{item.paymentStatus}</td>
              <td className="py-2 px-4 border-b">{item.date}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex gap-[3px]">
                  <Link
                    to="bill-detail"
                    className="flex items-center no-underline justify-between bg-[#334155] hover:bg-[#4b5f7b] text-white text-[0.7rem] px-[6px] py-[4px] rounded-[5px]"
                  >
                    <PencilSquareIcon className="h-4 w-4 mr-[2px]" />
                    Sửa
                  </Link>
                  <button className="flex items-center justify-between bg-[#C81E1E] hover:bg-[#de9292] text-white text-[0.7rem] px-[6px] py-[4px] rounded-[5px]">
                    <TrashIcon className="h-4 w-4 mr-[2px]" />
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-3 border-t-2 pt-3">
        <div className="text-[0.9rem]">
          <div>
            <span>
              Hiển thị
              <span className="font-semibold"> 1</span> - <span className="font-semibold"> 10 </span> trên{' '}
              <span className="font-semibold"> 100 </span>
            </span>
          </div>
        </div>
        <div class="flex max-w-[150px] items-center text-gray-500 h-auto border font-medium rounded">
          <div className="flex-1 flex justify-center items-center cursor-pointer px-3">-</div>
          <div className="flex justify-center items-center px-2">1</div>
          <div className="flex-1  flex justify-center items-center cursor-pointer px-3">+</div>
        </div>
      </div>
    </div>
  );
}

export default Bill;
