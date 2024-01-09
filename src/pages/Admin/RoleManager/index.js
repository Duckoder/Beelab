import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { PencilSquareIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';

function RoleManager() {
  const data = [
    { id: 1, name: 'Quản trị viên', descripstion: 'Quản trị viên' },
    { id: 2, name: 'Quản trị viên', descripstion: 'Quản trị viên' },
    { id: 3, name: 'Quản trị viên', descripstion: 'Quản trị viên' },
    { id: 4, name: 'Quản trị viên', descripstion: 'Quản trị viên' },
    { id: 5, name: 'Quản trị viên', descripstion: 'Quản trị viên' },
    { id: 6, name: 'Quản trị viên', descripstion: 'Quản trị viên' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded">
      <div className="">
        <p className="text-[0.9rem] pb-2 border-b-2">
          Tổng số vai trò:
          <span className="text-[0.9rem] font-semibold"> 6</span>
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
          <button
            onClick={openModal}
            className="rounded-[8px] bg-[#334155] hover:bg-[#4b5f7b] text-[0.8rem] px-3 py-[10px] text-white"
          >
            + Thêm danh mục
          </button>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-300 rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 pl-3 pr-1 border-b text-[0.8rem]">ID</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Tên hiển thị</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Mô tả</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-[0.8rem]">
              <td className="py-2 pl-3 pr-1 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.descripstion}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex gap-[3px]">
                  <button
                    onClick={openModal1}
                    className="flex items-center justify-between bg-[#334155] hover:bg-[#4b5f7b] text-white text-[0.7rem] px-[6px] py-[4px] rounded-[5px]"
                  >
                    <PencilSquareIcon className="h-4 w-4 mr-[2px]" />
                    Sửa
                  </button>
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
      <div className={`fixed inset-0 z-50 flex items-center justify-center ${isModalOpen ? 'visible' : 'hidden'}`}>
        <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={() => closeModal()}></div>
        <div className="bg-white p-8 max-w-md mx-auto rounded-md shadow-md z-10 text-[0.9rem] w-[80%]">
          <div className="font-semibold text-[#334155] border-b-2 pb-3">Thêm vai trò</div>
          <div className="flex flex-col my-3">
            <label className="text-[0.8rem] text-[#334155] font-semibold">Mã vai trò:</label>
            <input className="w-full text-gray-900 bg-gray-50 h-8 text-[0.8rem] px-2" placeholder="Nhập tại đây..." />
          </div>
          <div className="flex flex-col my-3">
            <label className="text-[0.8rem] text-[#334155] font-semibold">Tên vai trò:</label>
            <input className="w-full text-gray-900 bg-gray-50 h-8 text-[0.8rem] px-2" placeholder="Nhập tại đây..." />
          </div>
          <div className="flex flex-col my-3">
            <label className="text-[0.8rem] text-[#334155] font-semibold">Mô tả:</label>
            <textarea
              id="message"
              rows="4"
              className="text-[0.8rem] block p-2.5 w-full text-gray-900 bg-gray-50 
                rounded-lg border border-gray-300
                 focus:ring-blue-500 focus:border-blue-500
                 "
            ></textarea>
          </div>
          <div className="flex justify-end items-center">
            <button
              onClick={() => closeModal()}
              className="mt-1 rounded-[8px] bg-[#334155] hover:bg-[#4b5f7b] text-[0.8rem] px-3 py-[10px] text-white"
            >
              Thêm vai trò
            </button>
            <button
              onClick={() => closeModal()}
              className="flex items-center justify-between mt-1 ml-2 rounded-[8px] bg-white text-[0.8rem] px-3 py-[10px] text-gray-600 border"
            >
              <XMarkIcon className="text-gray-600 h-4 w-4 mr-[5px]" />
              Hủy
            </button>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 z-50 flex items-center justify-center ${isModalOpen1 ? 'visible' : 'hidden'}`}>
        <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={() => closeModal1()}></div>
        <div className="bg-white p-8 max-w-md mx-auto rounded-md shadow-md z-10 text-[0.9rem] w-[80%]">
          <div className="font-semibold text-[#334155] border-b-2 pb-3">Sửa vai trò</div>
          <div className="flex flex-col my-3">
            <label className="text-[0.8rem] text-[#334155] font-semibold">Mã vai trò:</label>
            <input className="w-full text-gray-900 bg-gray-50 h-8 text-[0.8rem] px-2" placeholder="Nhập tại đây..." />
          </div>
          <div className="flex flex-col my-3">
            <label className="text-[0.8rem] text-[#334155] font-semibold">Tên vai trò:</label>
            <input className="w-full text-gray-900 bg-gray-50 h-8 text-[0.8rem] px-2" placeholder="Nhập tại đây..." />
          </div>
          <div className="flex flex-col my-3">
            <label className="text-[0.8rem] text-[#334155] font-semibold">Mô tả:</label>
            <textarea
              id="message"
              rows="4"
              className="text-[0.8rem] block p-2.5 w-full text-gray-900 bg-gray-50 
                rounded-lg border border-gray-300
                 focus:ring-blue-500 focus:border-blue-500
                 "
            ></textarea>
          </div>
          <div className="flex justify-end items-center">
            <button
              onClick={() => closeModal1()}
              className="mt-1 rounded-[8px] bg-[#334155] hover:bg-[#4b5f7b] text-[0.8rem] px-3 py-[10px] text-white"
            >
              Thêm vai trò
            </button>
            <button
              onClick={() => closeModal1()}
              className="flex items-center justify-between mt-1 ml-2 rounded-[8px] bg-white text-[0.8rem] px-3 py-[10px] text-gray-600 border"
            >
              <XMarkIcon className="text-gray-600 h-4 w-4 mr-[5px]" />
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleManager;
