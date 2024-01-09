import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { UserIcon, ArrowUpTrayIcon } from '@heroicons/react/20/solid';

function CreateProduct() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="bg-white rounded h-auto text-[0.8rem] p-6">
      <div className="py-3">
        <Link
          to="/adminpage/product-manager"
          className="rounded-[8px] bg-[#334155] hover:bg-[#4b5f7b] text-[0.8rem] px-3 py-[10px] text-white no-underline"
        >
          Quay lại
        </Link>
      </div>
      <div className="py-3">
        <h6>Tạo sản phẩm mới</h6>
      </div>
      <div className="flex">
        <div className="w-[40%] bg-white shadow-md rounded">
          <div className="container mx-auto p-4">
            <div
              className="relative bg-gray-300 flex items-center justify-center rounded"
              style={{ paddingTop: '133.33%' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {selectedFile === null ? (
                  <UserIcon className="w-10 h-10 text-gray-400" />
                ) : (
                  <img src={URL.createObjectURL(selectedFile)} />
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center my-3">
              <div className="text-[1.2rem] font-bold">Ảnh sản phẩm</div>
              <div className="text-gray-400 py-2">JPG, JPEG hoặc PNG, khuyến khích tỉ lệ 3:4</div>
            </div>
            <div>
              <input id="fileInput" type="file" onChange={handleFileChange} className="sr-only" />
              <label
                htmlFor="fileInput"
                className="cursor-pointer border flex justify-center 
                items-center rounded-[8px] bg-[#334155] hover:bg-[#4b5f7b] text-[0.8rem] px-3 py-[5px]
                 text-white"
              >
                <ArrowUpTrayIcon className="w-4 h-4" />
                Tải ảnh lên
              </label>
              {selectedFile && (
                <div className="mt-1 w-full">
                  <button
                    type="file"
                    onClick={() => removeFile()}
                    className="rounded-[8px] bg-gray-300 text-gray-500 hover:bg-[#a9a9a9]  text-[0.8rem]
                     w-full py-[5px]
                   "
                  >
                    Xóa ảnh
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-[60%] ml-1 bg-white shadow-md rounded">
          <div className="p-3">
            <div className="flex flex-col my-3">
              <label className="text-[0.8rem] text-[#334155] font-semibold">Tên sản phẩm:</label>
              <input className="w-full text-gray-900 bg-gray-50 h-8 text-[0.8rem] px-2" placeholder="Tên sản phẩm" />
            </div>
            <div className="flex flex-col my-3">
              <label className="text-[0.8rem] text-[#334155] font-semibold">Danh mục:</label>
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
            <div className="flex flex-col my-3">
              <label className="text-[0.8rem] text-[#334155] font-semibold">Màu:</label>
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
            <div className="flex flex-col my-3">
              <label className="text-[0.8rem] text-[#334155] font-semibold">Giá:</label>
              <input
                className="w-full text-gray-900 bg-gray-50 h-8 text-[0.8rem] px-2"
                placeholder="Nhập tại đây..."
                type="number"
                min={0}
              />
            </div>
            <div className="flex flex-col my-3">
              <label className="text-[0.8rem] text-[#334155] font-semibold">Mô tả:</label>
              <textarea
                id="message"
                rows="4"
                className="text-[0.8rem] block p-2.5 w-full h-[250px] text-gray-900 bg-gray-50 
              rounded-lg border border-gray-300
               focus:ring-blue-500 focus:border-blue-500
               "
              ></textarea>
            </div>
            <div className="py-1 flex justify-end">
              <button
                className="rounded-[8px] bg-[#334155] hover:bg-[#4b5f7b]
                 text-[0.8rem] px-3 py-[10px] text-white no-underline"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
