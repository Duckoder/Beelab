function BillDetail() {
  return (
    <div>
      <div className="bg-white rounded p-4  shadow-md">
        <h5 className="font-bold">Chi tiết đơn hàng</h5>
        <div>
          <div className="flex text-[0.9rem] justify-between items-center">
            <div className="font-bold ">
              Mã đơn hàng:
              <span className="font-normal ml-1">qedqwedhqkwjdhkqj</span>
            </div>
            <div className="font-bold">
              Ngày đặt:
              <span className="font-normal ml-1">qedqwedhqkwjdhkqj</span>
            </div>
            <div className="font-bold flex items-center ">
              Trạng thái đơn hàng:
              <div>
                <select
                  className={`w-full px-3 py-[3px] text-gray-500 bg-white font-normal ml-1
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
          <div>
            <div className="py-3 font-bold">Danh sách sản phẩm</div>
          </div>
          <div className="flex text-[0.9rem] ">
            <div className="w-[10%]">
              <img
                src="https://i.pinimg.com/564x/0e/7e/09/0e7e098dc61d45370af0e591fdc64a0f.jpg"
                alt="example"
                className="w-full rounded shadow-lg"
              />
            </div>
            <div className="w-[70%] ml-2">
              <div className="font-bold pb-2">Tên sản phẩm</div>
              <div>Loại:</div>
              <div>Giá</div>
              <div>Số lượng: </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[50%] text-[0.9rem] mt-3 bg-white rounded shadow-md p-4">
          <h5 className="font-bold py-2">Thông tin giao hàng</h5>
          <div className="mt-2">
            <label className="text-[0.8rem] text-[#334155] font-semibold">Họ và tên người nhận:</label>
            <input
              className="w-full text-gray-900 bg-gray-50 h-8 text-[0.8rem] px-2"
              placeholder="Nhập tại đây..."
              disabled
            />
          </div>
          <div className="mt-2">
            <label className="text-[0.8rem] text-[#334155] font-semibold">Số điện thoại:</label>
            <input
              className="w-full text-gray-900 bg-gray-50 h-8 text-[0.8rem] px-2"
              placeholder="Nhập tại đây..."
              disabled
            />
          </div>
          <div className="mt-2">
            <label className="text-[0.8rem] text-[#334155] font-semibold">Địa chỉ:</label>
            <input
              className="w-full text-gray-900 bg-gray-50 h-8 text-[0.8rem] px-2"
              placeholder="Nhập tại đây..."
              disabled
            />
          </div>
        </div>
        <div className="w-[50%] text-[0.9rem] mt-3 bg-white rounded shadow-md p-4 ml-2">
          <h5 className="font-bold py-2">Thông tin thanh toán</h5>
          <div className="py-2 border-b-2">
            <div className="flex justify-between py-2">
              <div className="text-[#334155] font-semibold">Tổng giá trị đơn hàng:</div>
              <div>12312312đ</div>
            </div>
            <div className="flex justify-between py-2">
              <div className="text-[#334155] font-semibold">Phí vận chuyển:</div>
              <div>12312312đ</div>
            </div>
            <div className="flex justify-between py-2">
              <div className="text-[#334155] font-semibold">Giảm giá:</div>
              <div>-0đ</div>
            </div>
          </div>
          <div className="py-2 border-b-2">
            <div className="flex justify-between py-2">
              <div className="text-[#334155] font-semibold text-[1rem]">Tổng giá trị đơn hàng:</div>
              <div className="text-[1rem]">12312312đ</div>
            </div>
          </div>
          <div className="py-2">
            <div className="flex justify-between py-2">
              <div className="text-[#334155] font-semibold ">Phương thức thanh toán:</div>
              <div className="">Thanh toán khi nhận hàng</div>
            </div>
            <div className="flex justify-between py-2">
              <div className="text-[#334155] font-semibold ">Trạng thái thanh toán:</div>
              <div className="">
                <select
                  className={`w-full px-3 py-[3px] text-gray-500 bg-white font-normal ml-1 text-[0.8rem]
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
    </div>
  );
}

export default BillDetail;
