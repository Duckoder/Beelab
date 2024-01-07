import { FaRegCalendarMinus, FaEllipsisV } from 'react-icons/fa';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
} from 'recharts';

const data = [
  { name: 'Tháng 1', VND: 4000000.0 },
  { name: 'Tháng 2', VND: 3000000.0 },
  { name: 'Tháng 3', VND: 2000000.0 },
  { name: 'Tháng 4', VND: 500000.0 },
  { name: 'Tháng 5', VND: 1890000.0 },
  { name: 'Tháng 6', VND: 2390000.0 },
  { name: 'Tháng 7', VND: 3090000.0 },
  { name: 'Tháng 8', VND: 3490000.0 },
  { name: 'Tháng 10', VND: 290000.0 },
  { name: 'Tháng 11', VND: 4490000.0 },
  { name: 'Tháng 12', VND: 1490000.0 },
];

const dataProduct = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function AdminHome() {
  return (
    <div className="pt-[25px] px-[25px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer">Tổng quan</h2>
        <button className="bg-gray-900 text-gray-200 p-3 h-[32px] rounded-[3px] flex items-center justify-center hover:bg-gray-600">
          Tạo báo cáo
        </button>
      </div>
      <div className="grid grid-cols-4 gap-[10px] mt-[25px] pb-[15px]">
        <div
          className="h-[100px] rounded-[8px] bg-white border-l-[4px]
           border-[#4e73df] flex items-center justify-between px-[30px]
           cursor-pointer hover:shadow-lg transform hover:scale-[103%]
           transition duration-300 ease-out"
        >
          <div>
            <h2 className="text-[#b589df] text-[14px] leading-[17px] font-bold ">Doanh thu (tháng)</h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">1.000.000.000đ</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="" />
        </div>
        <div
          className="h-[100px] rounded-[8px] bg-white border-l-[4px]
           border-[#4e73df] flex items-center justify-between px-[30px]
           cursor-pointer hover:shadow-lg transform hover:scale-[103%]
           transition duration-300 ease-out"
        >
          <div>
            <h2 className="text-[#b589df] text-[14px] leading-[17px] font-bold ">Doanh thu (tháng)</h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">1.000.000.000đ</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="" />
        </div>
        <div
          className="h-[100px] rounded-[8px] bg-white border-l-[4px]
           border-[#1cc88a] flex items-center justify-between px-[30px]
           cursor-pointer hover:shadow-lg transform hover:scale-[103%]
           transition duration-300 ease-out"
        >
          <div>
            <h2 className="text-[#1cc88a] text-[14px] leading-[17px] font-bold ">Doanh thu (tháng)</h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">1.000.000.000đ</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="" />
        </div>
        <div
          className="h-[100px] rounded-[8px] bg-white border-l-[4px]
           border-[#4e73df] flex items-center justify-between px-[30px]
           cursor-pointer hover:shadow-lg transform hover:scale-[103%]
           transition duration-300 ease-out"
        >
          <div>
            <h2 className="text-[#b589df] text-[14px] leading-[17px] font-bold ">Doanh thu (tháng)</h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">1.000.000.000đ</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="" />
        </div>
      </div>

      <div className="flex">
        <div className="mt-[22px] w-full h-auto">
          <div className="border bg-white shadow-md cursor-pointer rounded-[4px]">
            <div className="bg-[#f8f9fc] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#edede]">
              <h5 className="font-bold">Biểu đồ doanh thu</h5>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div className="mt-[2px]">
              <ResponsiveContainer width="100%" height={450}>
                <LineChart
                  width={550}
                  height={300}
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 30,
                    bottom: 10,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line connectNulls type="monotone" dataKey="VND" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mt-[22px] w-[50%] h-auto gap-[10px]">
          <div className="border bg-white shadow-md cursor-pointer rounded-[4px]">
            <div className="bg-[#f8f9fc] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#edede]">
              <h5 className="font-bold">Hàng hóa</h5>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div className="mt-[2px]">
              <ResponsiveContainer width="100%" height={450}>
                <BarChart
                  width={500}
                  height={300}
                  data={dataProduct}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="mt-[22px] w-[50%] h-auto ml-4">
          <div className="border bg-white shadow-md cursor-pointer rounded-[4px]">
            <div className="bg-[#f8f9fc] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#edede]">
              <h5 className="font-bold">Hàng hóa</h5>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div className="mt-[2px]">
              <ResponsiveContainer width="100%" height={450}>
                <BarChart
                  width={500}
                  height={300}
                  data={dataProduct}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
