import React, { useContext, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { PencilSquareIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ToastContainer, toast } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';
import {
  getAllCategory,
  getCategoryById,
  addNewCategory,
  isCategoryExist,
  deleteCategory,
  putCategory,
} from '~/service/ApiService';
import { Switch } from '@material-tailwind/react';

function CategoryManager() {
  const {
    control: control1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1, isSubmitting: isSubmitting1 },
    setValue: setValue1,
    getValues: getValues1,
    reset: reset1,
  } = useForm();

  const {
    control: control2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2, isSubmitting: isSubmitting2 },
    setValue: setValue2,
    getValues: getValues2,
    reset: reset2,
  } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoriesName, setCategoriesName] = useState([]);
  const [category, setCategory] = useState(null);
  const [isToggleChecked, setIsToggleChecked] = useState(false);
  const [idCategory, setIdCategory] = useState();

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cate = await getAllCategory();
        setCategories(cate);

        setCategoriesName(cate.map((item) => item.name));
      } catch (error) {
        console.error('Error in component:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {}, [category, idCategory]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    reset1();
    setValue1('id', '');
    setValue1('name', '');
    setValue1('description', '');
  };

  const openModal1 = async (id) => {
    try {
      setIsModalOpen1(true);
      const cate = await getCategoryById(id);
      setValue2('idUpdate', cate.id);
      setValue2('nameUpdate', cate.name);
      setValue2('descriptionUpdate', cate.description);
      setValue2('toggle', cate.status === 1 ? setIsToggleChecked(true) : setIsToggleChecked(false));
      setCategory(cate);
      setIdCategory(id);
      console.log(cate);
    } catch (error) {
      toast.error('Có lỗi xảy ra');
    }
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
    reset2();
    setValue2('idUpdate', '');
    setValue2('nameUpdate', '');
    setValue2('descriptionUpdate', '');
  };

  const onSubmit = async (data) => {
    try {
      if (await isCategoryExist(data.name)) {
        toast.error('Danh mục đã tồn tại');
        closeModal();
        return;
      }
      const updateData = { ...data, status: 1 };
      await addNewCategory(updateData);
      const updateCategory = await getAllCategory();
      setCategories(updateCategory);
      toast.success('Thêm danh mục thành công');
      closeModal();
      console.log(updateData);
    } catch (error) {
      toast.error('Có lỗi xảy ra');
      console.log(error);
    }
  };

  const onUpdate = async (data) => {
    try {
      const convertData = {
        id: idCategory,
        name: data.nameUpdate,
        description: data.descriptionUpdate,
        status: isToggleChecked ? 1 : 0,
      };
      await putCategory(category.id, convertData);
      const updateCategory = await getAllCategory();
      setCategories(updateCategory);
      toast.success('Cập nhật danh mục thành công');
      closeModal1();
    } catch (error) {
      toast.error('Có lỗi xảy ra');
      console.log(error);
    }
  };

  const onDelete = async (id) => {
    const cate = await getCategoryById(id);
    try {
      const convertData = {
        id: id,
        name: cate.name,
        description: cate.description,
        status: 0,
      };
      await putCategory(category.id, convertData);
      const updateCategory = await getAllCategory();
      setCategories(updateCategory);
      toast.success('Xóa danh mục thành công');
      closeModal1();
    } catch (error) {
      toast.error('Có lỗi xảy ra');
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded">
      <div className="">
        <p className="text-[0.9rem] pb-2 border-b-2">
          Tổng số danh mục:
          <span className="text-[0.9rem] font-semibold"> {categories.length}</span>
        </p>
      </div>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center rounded-[5px]">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            list="options"
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
        <datalist id="options">
          {categoriesName.map((option, index) => (
            <option key={index} value={option} />
          ))}
        </datalist>
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
            <th className="py-2 pl-3 pr-1 border-b text-[0.8rem]">Mã</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Tên</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Mô tả</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Trạng thái</th>
            {/* <th className="py-2 px-4 border-b text-[0.8rem]">Ngày tạo</th> */}
            <th className="py-2 px-4 border-b text-[0.8rem]">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => (
            <tr key={item.id} className="text-[0.8rem]">
              <td className="py-2 pl-3 pr-1 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.description}</td>
              {/* <td className="py-2 px-4 border-b">{item.description}</td> */}
              <td className="py-2 px-4 border-b">{item.status === 1 ? 'Enable' : 'Disable'}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex gap-[3px]">
                  <button
                    onClick={() => {
                      openModal1(item.id);
                    }}
                    className="flex items-center justify-between bg-[#334155] hover:bg-[#4b5f7b] text-white text-[0.7rem] px-[6px] py-[4px] rounded-[5px]"
                  >
                    <PencilSquareIcon className="h-4 w-4 mr-[2px]" />
                    Sửa
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="flex items-center justify-between bg-[#C81E1E] hover:bg-[#de9292] text-white text-[0.7rem] px-[6px] py-[4px] rounded-[5px]"
                  >
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
          <div className="font-semibold text-[#334155] border-b-2 pb-3">Thêm danh mục</div>
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit1(onSubmit)}>
            <div>
              <label htmlFor="name" className="block text-[0.8rem] text-[#334155] font-semibold mt-1">
                Tên danh mục:
              </label>
              <div className="mt-1">
                <Controller
                  name="name"
                  control={control1}
                  rules={{
                    required: 'Vui lòng nhập tên danh mục',
                    pattern: {
                      value: /^[^\d!@#$%^&*()_+={}\[\]:;<>,.?~\\/-]+$/,
                      message: 'Tên danh mục không hợp lệ',
                    },
                  }}
                  render={({ field }) => (
                    <div>
                      <input
                        className="w-full text-gray-900 bg-gray-50 h-8 text-[0.8rem] px-2 shadow-sm border border-gray-300 rounded"
                        {...field}
                      />
                      <p className="flex bg-[#e54959] text-[#fff] w-fit my-2 px-2 rounded text-[0.8rem]">
                        <div> {errors1.name?.message}</div>
                      </p>
                    </div>
                  )}
                />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-[0.8rem] text-[#334155] font-semibold mt-1">
                Mô tả:
              </label>
              <div className="mt-1">
                <Controller
                  name="description"
                  control={control1}
                  rules={{
                    required: 'Vui lòng nhập mô tả',
                  }}
                  render={({ field }) => (
                    <div>
                      <textarea
                        className="text-[0.8rem] block p-2.5 w-full text-gray-900 bg-gray-50 
                        rounded-lg border border-gray-300"
                        {...field}
                      />
                      <p className="flex bg-[#e54959] text-[#fff] w-fit my-2 px-2 rounded text-[0.8rem]">
                        <div> {errors1.description?.message}</div>
                      </p>
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="flex justify-end items-center">
              <button
                disabled={isSubmitting1}
                type="submit"
                className="mt-1 rounded-[8px] bg-[#334155] hover:bg-[#4b5f7b] text-[0.8rem] px-3 py-[10px] text-white"
              >
                Thêm danh mục
              </button>
              <button
                type="button"
                onClick={() => closeModal()}
                className="flex items-center justify-between mt-1 ml-2 rounded-[8px] bg-white text-[0.8rem] px-3 py-[10px] text-gray-600 border"
              >
                <XMarkIcon className="text-gray-600 h-4 w-4 mr-[5px]" />
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={`fixed inset-0 z-50 flex items-center justify-center ${isModalOpen1 ? 'visible' : 'hidden'}`}>
        <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={() => closeModal1()}></div>
        <div className="bg-white p-8 max-w-md mx-auto rounded-md shadow-md z-10 text-[0.9rem] w-[80%]">
          <div className="font-semibold text-[#334155] border-b-2 pb-3">Sửa danh mục</div>
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit2(onUpdate)}>
            <div>
              <label htmlFor="name" className="block text-[0.8rem] text-[#334155] font-semibold mt-1">
                Tên danh mục:
              </label>
              <div className="mt-1">
                <Controller
                  name="nameUpdate"
                  defaultValue={category === null ? '' : category.name}
                  control={control2}
                  rules={{
                    required: 'Vui lòng nhập tên danh mục',
                    pattern: {
                      value: /^[^\d!@#$%^&*()_+={}\[\]:;<>,.?~\\/-]+$/,
                      message: 'Tên dnah mục không hợp lệ',
                    },
                  }}
                  render={({ field }) => (
                    <div>
                      <input
                        className="w-full text-gray-900 bg-gray-50 h-8 text-[0.8rem] px-2 shadow-sm border border-gray-300 rounded"
                        {...field}
                      />
                      <p className="flex bg-[#e54959] text-[#fff] w-fit my-2 px-2 rounded text-[0.8rem]">
                        <div> {errors2.nameUpdate?.message}</div>
                      </p>
                    </div>
                  )}
                />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-[0.8rem] text-[#334155] font-semibold mt-1">
                Mô tả:
              </label>
              <div className="mt-1">
                <Controller
                  name="descriptionUpdate"
                  defaultValue=""
                  control={control2}
                  rules={{
                    required: 'Vui lòng nhập mô tả',
                  }}
                  render={({ field }) => (
                    <div>
                      <textarea
                        className="text-[0.8rem] block p-2.5 w-full text-gray-900 bg-gray-50 
                        rounded-lg border border-gray-300"
                        {...field}
                      />
                      <p className="flex bg-[#e54959] text-[#fff] w-fit my-2 px-2 rounded text-[0.8rem]">
                        <div> {errors2.descriptionUpdate?.message}</div>
                      </p>
                    </div>
                  )}
                />
              </div>
            </div>
            <div>
              <div>
                <div className="flex items-start">
                  <label htmlFor="toggle" className="block text-[0.8rem] text-[#334155] font-semibold mt-1">
                    Trạng thái:
                  </label>
                  <label class="relative inline-flex items-center cursor-pointer mx-2">
                    <input
                      type="checkbox"
                      id="toggle"
                      name="toggle"
                      checked={isToggleChecked}
                      onChange={() => setIsToggleChecked(!isToggleChecked)}
                      class="sr-only peer"
                    />
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
                //disabled={!isDirty}
                type="submit"
                className={`mt-1 rounded-[8px] bg-[#334155]
                hover:bg-[#4b5f7b] text-[0.8rem] px-3 py-[10px] text-white`}
              >
                Sửa danh mục
              </button>
              <button
                type="button"
                onClick={() => closeModal1()}
                className="flex items-center justify-between mt-1 ml-2 rounded-[8px] bg-white text-[0.8rem] px-3 py-[10px] text-gray-600 border"
              >
                <XMarkIcon className="text-gray-600 h-4 w-4 mr-[5px]" />
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default CategoryManager;
