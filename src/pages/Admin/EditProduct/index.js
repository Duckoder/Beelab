import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { UserIcon, ArrowUpTrayIcon } from '@heroicons/react/20/solid';
import { useForm, Controller } from 'react-hook-form';
import { getAllCategory, getAllColor, getProductById } from '~/service/ApiService';
import { useParams } from 'react-router-dom';

function EditProduct() {
  let { productId } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [product, setProduct] = useState();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const sizes = ['X', 'XL', 'L'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getAllCategory();
        const colorsData = await getAllColor();
        setCategories(categoriesData);
        setColors(colorsData);
      } catch (error) {
        console.error('error in fetch data: ', error);
        throw error;
      }
    };
    fetchData();
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prod = await getProductById(productId);
        setProduct(prod);
        console.log(prod);

        setValue('name', prod.name);
        setValue('category', prod.category.id);
        setValue('amount', prod.amount);
        setValue('description', prod.description);
      } catch (error) {
        console.error('Error in component:', error);
      }
    };
    fetchData();
  }, []);

  const {
    control: control,
    handleSubmit: handleSubmit,
    formState: { errors: errors, isSubmitting: isSubmitting },
    setValue: setValue,
    getValues: getValues,
    reset: reset,
  } = useForm();

  const onSubmit = async (data) => {
    const updateData = { ...data, displayImage: URL.createObjectURL(selectedFile) };
    console.log(updateData);
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
        <form className="space-y-6 flex w-full" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
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
              <div>
                <label htmlFor="name" className="block text-[0.8rem] text-[#334155] font-semibold mt-2">
                  Tên sản phẩm
                </label>
                <div className="mt-1">
                  <Controller
                    name="name"
                    defaultValue=""
                    control={control}
                    rules={{
                      required: 'Vui lòng nhập nhập tên',
                      pattern: {
                        value: /^[^\d!@#$%^&*()_+={}\[\]:;<>,.?~\\/-]+$/,
                        message: 'Tên sản phẩm không hợp lệ',
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <input
                          placeholder="Tên sản phẩm"
                          className="w-full text-gray-900 bg-gray-50 h-8 text-[0.8rem] px-2 shadow-sm border border-gray-300 rounded"
                          {...field}
                        />
                        <p className="flex bg-[#e54959] text-[#fff] w-fit my-2 px-2 rounded text-[0.8rem]">
                          <div> {errors.idUpdate?.message}</div>
                        </p>
                      </div>
                    )}
                  />
                </div>
              </div>
              <div className="mt-1">
                <label htmlFor="category">Danh mục:</label>
                <Controller
                  name="category"
                  control={control}
                  defaultValue="" // Giá trị mặc định
                  rules={{ required: 'Vui lòng chọn một lựa chọn' }} // Quy tắc xác thực
                  render={({ field, fieldState }) => (
                    <div>
                      <select
                        {...field}
                        id="category"
                        className={`w-full px-3 py-[5px] text-gray-500 bg-white
                       border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600`}
                      >
                        <option value="" disabled hidden>
                          Chọn một
                        </option>
                        {categories.map((item) => {
                          return item.status === 1 && <option value={item.id}>{item.name}</option>;
                        })}
                      </select>
                      {fieldState?.error && <p style={{ color: 'red' }}>{fieldState.error.message}</p>}
                    </div>
                  )}
                />
              </div>
              <div className="mt-1">
                <label htmlFor="size">Size:</label>
                <Controller
                  name="size"
                  control={control}
                  defaultValue="" // Giá trị mặc định
                  rules={{ required: 'Vui lòng chọn một lựa chọn' }} // Quy tắc xác thực
                  render={({ field, fieldState }) => (
                    <div>
                      <select
                        {...field}
                        id="category"
                        className={`w-full px-3 py-[5px] text-gray-500 bg-white
                       border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600`}
                      >
                        <option value="" disabled hidden>
                          Chọn một
                        </option>
                        {sizes.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                      {fieldState?.error && <p style={{ color: 'red' }}>{fieldState.error.message}</p>}
                    </div>
                  )}
                />
              </div>
              <div className="mt-1">
                <label htmlFor="color">Màu:</label>
                <Controller
                  name="color"
                  control={control}
                  defaultValue="" // Giá trị mặc định
                  rules={{ required: 'Vui lòng chọn một lựa chọn' }} // Quy tắc xác thực
                  render={({ field, fieldState }) => (
                    <div>
                      <select
                        {...field}
                        id="category"
                        className={`w-full px-3 py-[5px] text-gray-500 bg-white
                       border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600`}
                      >
                        <option value="" disabled hidden>
                          Chọn một
                        </option>
                        {colors.map((item) => {
                          return <option value={item.id}>{item.name}</option>;
                        })}
                      </select>
                      {fieldState?.error && <p style={{ color: 'red' }}>{fieldState.error.message}</p>}
                    </div>
                  )}
                />
              </div>
              <div>
                <label htmlFor="amount" className="block text-[0.8rem] text-[#334155] font-semibold mt-2">
                  Giá tiền
                </label>
                <div className="mt-1">
                  <Controller
                    name="amount"
                    defaultValue=""
                    control={control}
                    rules={{
                      required: 'Vui lòng nhập nhập giá tiền',
                      pattern: {
                        value: /^[+]?\d+(?:,\d{3})*(?:\.\d{1,2})?$/,
                        message: 'Giá tiền không hợp lệ',
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <input
                          type="number"
                          placeholder="Giá tiền"
                          className="w-full text-gray-900 bg-gray-50 h-8 text-[0.8rem] px-2 shadow-sm border border-gray-300 rounded"
                          {...field}
                        />
                        <p className="flex bg-[#e54959] text-[#fff] w-fit my-2 px-2 rounded text-[0.8rem]">
                          <div> {errors.idUpdate?.message}</div>
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
                    control={control}
                    rules={{
                      required: 'Vui lòng nhập mô tả',
                    }}
                    render={({ field }) => (
                      <div>
                        <textarea
                          className="text-[0.8rem] block p-2.5 w-full h-32 text-gray-900 bg-gray-50 
                      rounded-lg border border-gray-300"
                          {...field}
                        />
                        <p className="flex bg-[#e54959] text-[#fff] w-fit my-2 px-2 rounded text-[0.8rem]">
                          <div> {errors.description?.message}</div>
                        </p>
                      </div>
                    )}
                  />
                </div>
              </div>
              <div className="py-1 flex justify-end">
                <button
                  type="submit"
                  className="rounded-[8px] bg-[#334155] hover:bg-[#4b5f7b]
               text-[0.8rem] px-3 py-[10px] text-white no-underline"
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
