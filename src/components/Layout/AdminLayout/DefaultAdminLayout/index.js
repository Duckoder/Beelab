import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaSearch, FaRegBell, FaEnvelope } from 'react-icons/fa';
import {
  ChartBarSquareIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  ShoppingBagIcon,
  ChartPieIcon,
} from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

function DefaultAdminLayout({ children }) {
  const [open, setOpen] = useState(true);
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);

  const toggleOpenDropdown1 = () => {
    setOpenDropdown1(!openDropdown1);
  };
  const toggleOpenDropdown2 = () => {
    setOpenDropdown2(!openDropdown2);
  };

  return (
    <div className="min-h-full flex">
      <div className={`bg-[#FFFFFF] min-h-screen ${open ? 'w-72' : 'w-20'} duration-300 text-black px-4 shadow-xl`}>
        <div className="flex mt-2">
          <div className={` ${!open && 'w-0 overflow-hidden'} flex items-center  font-bold text-[1.2rem]`}>
            BEELAB ADMIN
          </div>
          <div className="py-3 flex flex-1 justify-end">
            <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          <Link
            to="/adminpage"
            className={` flex group items-center text-sm gap-3.5 font-medium
                 p-1 no-underline text-black 
                  hover:bg-gray-300 rounded-md`}
          >
            <div>
              <ChartPieIcon className="w-6 h-6" />
            </div>
            <div
              className={`h-full whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
            >
              Tổng quan
            </div>
            <div
              className={`${open && 'hidden'} absolute left-32 bg-white font-semibold whitespace-pre text-gray-950
                   z-50 rounded-md drop-shadow-lg w-0 overflow-hidden group-hover:px-2
                   group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`}
            >
              Tổng quan
            </div>
          </Link>
          <div>
            <button
              onClick={() => toggleOpenDropdown1()}
              className={` flex group items-center text-sm gap-3.5 font-medium
                 p-1 no-underline text-black 
                  hover:bg-gray-300 rounded-md w-full`}
            >
              <div>
                <DocumentTextIcon className="w-6 h-6" />
              </div>
              <div
                className={`h-full whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                } flex items-center justify-between`}
              >
                Quản lý
                <div>
                  <ChevronDownIcon className="w-6 h-6 ml-16" />
                </div>
              </div>

              <div
                className={`${open && 'hidden'} absolute left-32 bg-white font-semibold whitespace-pre text-gray-950
                   z-50 rounded-md drop-shadow-lg w-0 overflow-hidden group-hover:px-2
                   group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`}
              >
                Quản lý
              </div>
            </button>
            <ul
              className={`whitespace-preduration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'} ${
                !openDropdown1 && 'overflow-hidden h-0'
              }`}
            >
              <li className="flex items-center hover:bg-slate-300 px-2 py-2 my-2 rounded">
                <Link to="/adminpage/category-manager" className="text-sm no-underline text-black ">
                  Quản lý danh mục
                </Link>
              </li>
              <li className="flex items-center hover:bg-slate-300 px-2 py-2 my-2 rounded">
                <Link to="/adminpage/product-manager" className="text-sm no-underline text-black ">
                  Quản lý sản phẩm
                </Link>
              </li>
              {/* <li className="flex items-center hover:bg-slate-300 px-2 py-2 my-2 rounded">
                <Link className="text-sm no-underline text-black ">Quản lý khuyến mãi</Link>
              </li> */}
              <li className="flex items-center hover:bg-slate-300 px-2 py-2 my-2 rounded">
                <Link to="/adminpage/user-manager" className="text-sm no-underline text-black ">
                  Quản lý người dùng
                </Link>
              </li>
              {/* <li className="flex items-center hover:bg-slate-300 px-2 py-2 my-2 rounded">
                <Link className="text-sm no-underline text-black ">Quản lý nhà cung cấp</Link>
              </li> */}
              <li className="flex items-center hover:bg-slate-300 px-2 py-2 my-2 rounded">
                <Link to="/adminpage/role-manager" className="text-sm no-underline text-black ">
                  Quản lý vai trò
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/adminpage/bill"
            className={` flex group items-center text-sm gap-3.5 font-medium
                 p-1 no-underline text-black 
                  hover:bg-gray-300 rounded-md`}
          >
            <div>
              <ShoppingBagIcon className="w-6 h-6" />
            </div>
            <div
              className={`h-full whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
            >
              Đơn hàng
            </div>
            <div
              className={`${open && 'hidden'} absolute left-32 bg-white font-semibold whitespace-pre text-gray-950
                   z-50 rounded-md drop-shadow-lg w-0 overflow-hidden group-hover:px-2
                   group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`}
            >
              Đơn hàng
            </div>
          </Link>
          <div>
            <button
              onClick={() => toggleOpenDropdown2()}
              className={` flex group items-center text-sm gap-3.5 font-medium
                 p-1 no-underline text-black 
                  hover:bg-gray-300 rounded-md w-full`}
            >
              <div>
                <ChartBarSquareIcon className="w-6 h-6" />
              </div>
              <div
                className={`h-full whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                } flex items-center justify-between`}
              >
                Báo cáo, thống kê
                <div>
                  <ChevronDownIcon className="w-6 h-6 ml-14" />
                </div>
              </div>

              <div
                className={`${open && 'hidden'} absolute left-32 bg-white font-semibold whitespace-pre text-gray-950
                   z-50 rounded-md drop-shadow-lg w-0 overflow-hidden group-hover:px-2
                   group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`}
              >
                Báo cáo, thống kê
              </div>
            </button>
            <ul
              className={`whitespace-preduration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'} ${
                !openDropdown2 && 'overflow-hidden h-0'
              }`}
            >
              <li className="flex items-center hover:bg-slate-300 px-2 py-2 my-2 rounded">
                <Link to="/admimpage/category-manager" className="text-sm no-underline text-black ">
                  Báo cáo doanh thu
                </Link>
              </li>
              <li className="flex items-center hover:bg-slate-300 px-2 py-2 my-2 rounded">
                <Link to="/admimpage/product-manager" className="text-sm no-underline text-black ">
                  Báo cáo sản phẩm
                </Link>
              </li>
              <li className="flex items-center hover:bg-slate-300 px-2 py-2 my-2 rounded">
                <Link className="text-sm no-underline text-black ">Báo cáo danh mục</Link>
              </li>
              <li className="flex items-center hover:bg-slate-300 px-2 py-2 my-2 rounded">
                <Link className="text-sm no-underline text-black ">Báo cáo khách hàng</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full">
        <header className="bg-white">
          <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px]">
            <div className="flex items-center rounded-[5px]"></div>
            <div className=" flex items-center gap-[15px] relative">
              <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
                <FaRegBell />
                <FaEnvelope />
              </div>
              <div className="flex items-center gap-[15px] relative">
                <div className="">User</div>
                <div className="">
                  <img
                    src="https://i.pinimg.com/originals/4a/fe/31/4afe31b113d6dcfdcd1ebe2783b57421.jpg"
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="bg-slate-100">
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DefaultAdminLayout;
