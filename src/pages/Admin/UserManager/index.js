import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { PencilSquareIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { getAllUser } from '~/service/ApiService';

function UserManager() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const us = await getAllUser();
        setUsers(us);
      } catch (error) {
        console.error('Error in component:', error);
      }
    };
    fetchData();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded">
      <div className="">
        <p className="text-[0.9rem] pb-2 border-b-2">
          Tổng số người dùng:
          <span className="text-[0.9rem] font-semibold"> {users.length}</span>
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
      </div>
      <table className="min-w-full bg-white border border-gray-300 rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 pl-3 pr-1 border-b text-[0.8rem]">ID</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Tên</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Email</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">SĐT</th>
            {/* <th className="py-2 px-4 border-b text-[0.8rem]">Loại tài khoản</th> */}
            <th className="py-2 px-4 border-b text-[0.8rem]">Ngày sinh</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id} className="text-[0.8rem]">
              <td className="py-2 pl-3 pr-1 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.full_name}</td>
              <td className="py-2 px-4 border-b">{item.email}</td>
              <td className="py-2 px-4 border-b">{item.phone_number}</td>
              {/* <td className="py-2 px-4 border-b">{item.role}</td> */}
              <td className="py-2 px-4 border-b">{item.birthday}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex gap-[3px]">
                  <button
                    onClick={openModal}
                    className="flex items-center justify-between bg-[#334155] hover:bg-[#4b5f7b] text-white text-[0.7rem] px-[6px] py-[4px] rounded-[5px]"
                  >
                    <PencilSquareIcon className="h-4 w-4 mr-[2px]" />
                    Phân quyền
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
          <div className="font-semibold text-[#334155] border-b-2 pb-3">Phân quyền</div>
          <div>
            <div className="flex justify-between items-center py-3">
              <div>Quản trị viên</div>
              <div className="flex justify-center items-center">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div
                    class="w-11 h-6 flex items-center bg-gray-200 peer-focus:outline-none 
                  peer-focus:ring-4 rounded-full
                   peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                     after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                  after:w-5 after:transition-all  peer-checked:bg-[#334155]"
                  ></div>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center py-3">
              <div>Khách hàng</div>
              <div className="flex justify-center items-center">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" checked />
                  <div
                    class="w-11 h-6 flex items-center bg-gray-200 peer-focus:outline-none 
                  peer-focus:ring-4 rounded-full
                   peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                     after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                  after:w-5 after:transition-all  peer-checked:bg-[#334155]"
                  ></div>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center py-3">
              <div>Nhân viên</div>
              <div className="flex justify-center items-center">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div
                    class="w-11 h-6 flex items-center bg-gray-200 peer-focus:outline-none 
                  peer-focus:ring-4 rounded-full
                   peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                     after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                  after:w-5 after:transition-all  peer-checked:bg-[#334155]"
                  ></div>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center py-3">
              <div>Quản lí</div>
              <div className="flex justify-center items-center">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div
                    class="w-11 h-6 flex items-center bg-gray-200 peer-focus:outline-none 
                  peer-focus:ring-4 rounded-full
                   peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                     after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                  after:w-5 after:transition-all  peer-checked:bg-[#334155]"
                  ></div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <button
              onClick={() => closeModal()}
              className="flex items-center justify-between mt-1 ml-2 rounded-[8px] bg-white text-[0.8rem] px-3 py-[10px] text-gray-600 border"
            >
              <XMarkIcon className="text-gray-600 h-4 w-4 mr-[5px]" />
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManager;
