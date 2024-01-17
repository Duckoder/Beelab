import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ChangePass() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();
  //   try {
  //     const { id, ...postData } = data;
  //     const response = await axios.post('localhost:8080/accounts', postData);
  //     if (response.status === 201) {
  //       // Hiển thị Toast khi đăng ký thành công
  //       toast.success('Đăng ký thành công, bạn sẽ được chuyển hướng đến trang đăng nhập');

  //       // Chuyển hướng về trang đăng nhập
  //       setTimeout(() => {
  //         window.location.href = '/login-page';
  //       }, 5000); // 3 seconds
  //     } else {
  //       // Hiển thị Toast khi có lỗi từ API
  //       toast.error('Có lỗi xảy ra, vui lòng thử lại !!!');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     //toast.error('An error occurred. Please try again.');
  //   }
  // };

  const onSubmit = async (data) => {
    console.log(data);
    toast.success('Đăng ký thành công, bạn sẽ được chuyển hướng đến trang đăng nhập !!!');
    // setTimeout(() => {
    //   window.location.href = '/login-page';
    // }, 5000);
  };

  const password = watch('password');
  const confirmPassword = (value) => {
    // Kiểm tra xác minh mật khẩu khớp với mật khẩu đã nhập
    return value === password || 'Mật khẩu không khớp';
  };

  // const password = watch('password');

  // const hasUppercase = (value) => {
  //   // Kiểm tra xem có ít nhất một chữ cái in hoa trong mật khẩu
  //   return /[A-Z]/.test(value) || 'Mật khẩu phải chữ 1 kí tự in hoa';
  // };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://i.pinimg.com/564x/b4/4b/33/b44b3329026166543b583614ba455865.jpg"
          alt="Your Company"
        />
        <h2 className="mt-0 text-center text-2xl font-bold leading-9 ">
          <Link className="no-underline text-gray-900 tracking-[10px] hover:text-gray-900">BEELAB</Link>
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-900">
              Mật khẩu:
            </label>
            <div className="mt-2">
              <Controller
                name="password"
                control={control}
                rules={{
                  required: 'Vui lòng nhập mật khẩu',
                }}
                render={({ field }) => (
                  <div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="block w-full rounded-md border-0 py-2 px-3 text-[0.8rem]
                      text-gray-900 shadow-md ring-1 ring-inset ring-gray-300
                      placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                      focus:ring-indigo-600  sm:leading-6"
                      {...field}
                    />
                    <p className="flex bg-[#e54959] text-[#fff] w-fit my-2 px-2 rounded text-[0.8rem]">
                      <div> {errors.password?.message}</div>
                    </p>
                  </div>
                )}
              />
            </div>
          </div>
          <div>
            <label htmlFor="repassword" className="block text-sm font-bold leading-6 text-gray-900">
              Nhập lại mật khẩu:
            </label>
            <div className="mt-2">
              <Controller
                name="repassword"
                control={control}
                rules={{
                  required: 'vui lòng xác nhận mật khẩu',
                  validate: confirmPassword,
                }}
                render={({ field }) => (
                  <div>
                    <input
                      id="password"
                      name="repassword"
                      type="password"
                      className="block w-full rounded-md border-0 py-2 px-3 text-[0.8rem]
                      text-gray-900 shadow-md ring-1 ring-inset ring-gray-300
                      placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                      focus:ring-indigo-600  sm:leading-6"
                      {...field}
                    />
                    <p className="flex bg-[#e54959] text-[#fff] w-fit my-2 px-2 rounded text-[0.8rem]">
                      <div> {errors.repassword?.message}</div>
                    </p>
                  </div>
                )}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-start"></div>
            <div className="text-sm">
              <a href="/forgot-pass" className="font-semibold text-[#000000] hover:text-[#4b4b4b]">
                Quên mật khẩu
              </a>
            </div>
          </div>
          <div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#000000]
               px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm
                hover:bg-[#4b4b4b] focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              THAY ĐỔI MẬT KHẨU
            </button>
            <Link
              to="/"
              className="flex w-full justify-center rounded-md bg-[#bebebe] mt-2
              no-underline hover:text-[#ffffff] px-3 py-1.5 text-sm font-semibold 
              leading-6 text-[#ffffff] shadow-sm
                hover:bg-[#a8a7a7] focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 "
            >
              QUAY VỀ MUA SẮM
            </Link>
          </div>
        </form>
        <ToastContainer />

        <p className="mt-10 text-center text-sm text-gray-500">
          Chưa có tài khoản?{' '}
          <a href="/register-page" className="font-semibold leading-6 text-[#000000] hover:text-[#4b4b4b]">
            Đăng ký ngay
          </a>
        </p>
      </div>
    </div>
  );
}

export default ChangePass;
