import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaSearch, FaRegBell, FaEnvelope } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import { FaBagShopping } from 'react-icons/fa6';
import { IoBagAdd } from 'react-icons/io5';

import { MdSpaceDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';

const menus = [
  { name: 'Tổng Quan', link: '/', icon: MdSpaceDashboard },
  { name: 'Quản Lý', link: '/', icon: IoDocumentText },
  { name: 'Bán Hàng', link: '/', icon: FaBagShopping, margin: true },
  { name: 'Nhập Hàng', link: '/', icon: IoBagAdd },
  { name: 'Thống Kê/Báo Cáo', link: '/', icon: MdSpaceDashboard },
];

function DefaultAdminLayout({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="min-h-full flex">
      <div className={`bg-[#FFFFFF] min-h-screen ${open ? 'w-72' : 'w-20'} duration-300 text-black px-4 shadow-lg`}>
        <div className="flex mt-2">
          <div className={` ${!open && 'w-0 overflow-hidden'} flex items-center  font-bold text-[1.2rem]`}>
            BEELAB ADMIN
          </div>
          <div className="py-3 flex flex-1 justify-end">
            <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((item, idx) => {
            return (
              <Link
                to={item.link}
                key={idx}
                className={` ${item.margin && 'mt-3'} flex group items-center text-sm gap-3.5 font-medium
                 p-2 no-underline text-black 
                  hover:bg-gray-300 rounded-md`}
              >
                <div>{React.createElement(item.icon, { size: '20' })}</div>
                <div
                  className={`h-full whitespace-pre duration-500 ${
                    !open && 'opacity-0 translate-x-28 overflow-hidden'
                  }`}
                >
                  {item.name}
                </div>
                <div
                  className={`${open && 'hidden'} absolute left-32 bg-white font-semibold whitespace-pre text-gray-950
                   z-50 rounded-md drop-shadow-lg w-0 overflow-hidden group-hover:px-2
                   group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`}
                >
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full">
        <header className="bg-white shadow">
          <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px]">
            <div className="flex items-center rounded-[5px]">
              <input
                type="text"
                className="bg-[#f8f9fc] 
              h-[40px] outline-none pl-[13px] w-[350px] border-none
              rounded-[5px] placeholder:text-[14px] text-[14px] leading-[20px] font-normal"
                placeholder="Tìm kiếm"
              />
              <div
                className="bg-gray-900 h-[40px] px-[14px] flex items-center justify-center cursor-pointer
                rounded-tr-[5px] rounded-br-[5px]"
              >
                <FaSearch className="text-white" />
              </div>
            </div>
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
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DefaultAdminLayout;
