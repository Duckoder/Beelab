import classNames from 'classnames/bind';
import styles from './ReturnPolicy.module.scss';

const cx = classNames.bind(styles);

function ReturnPolicy() {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>Chính Sách Đổi Trả</h3>
      <ol type="1" style={{ fontWeight: 'bold', marginBottom: 50 }}>
        <li>
          <b>Chính sách đổi sản phẩm</b>
          <ol type="a">
            <li>
              Đổi size
              <ul style={{ fontWeight: 'normal' }} className={cx('content')}>
                <li>Áp dụng 01 lần đổi /1 đơn hàng với các đơn hàng mua online và các đơn hàng mua tại cửa hàng.</li>
                <li>
                  Sản phẩm đổi trong thời gian 3 ngày kể từ ngày mua hàng trên hoá đơn (đối với khách mua hàng trực tiếp
                  tại cửa hàng), 3 ngày kể từ ngày nhận hàng (Đối với khách mua online)
                </li>
                <li>
                  Sản phẩm còn mới nguyên tem, tags và mang theo hoá đơn mua hàng, sản phẩm chưa giặt và không dơ bẩn,
                  hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.
                </li>
                <li>Không áp dụng đối với các sản phẩm là phụ kiện</li>
              </ul>
            </li>
            <li>
              Đổi sản phẩm lỗi
              <br></br>
              Điều kiện áp dụng
              <ul style={{ fontWeight: 'normal' }} className={cx('content')}>
                <li>Sản phẩm lỗi kỹ thuật: Sản phẩm rách, bung keo, …</li>
              </ul>
              Trường hợp không được giải quyết
              <ul style={{ fontWeight: 'normal' }} className={cx('content')}>
                <li>Sản phầm đã qua sử dụng</li>
              </ul>
              Đối với sản phẩm lỗi kỹ thuật cần phản hồi đến TEELAB trong vòng 3 ngày, kể từ ngày mua hàng trên hoá đơn
              đối với khách mua trực tiếp tại cửa hàng, 3 ngày kể từ ngày nhận hàng đối với khách mua online.
            </li>
          </ol>
        </li>
        <li>
          Phương thức đổi sản phẩm
          <ul style={{ fontWeight: 'normal' }} className={cx('content')}>
            <li>Hàng mua trực tiếp tại cửa hàng: Đổi trả trực tiếp tại cửa hàng mua hàng</li>
            <li>
              Hàng mua online (thông qua webiste, Shopee, Lazada): liên hệ fanpage Teelab để được hướng dẫn đổi trả
            </li>
          </ul>
        </li>
        <li>
          Chi phí đổi Hàng
          <ul style={{ fontWeight: 'normal' }} className={cx('content')}>
            <li>
              Miễn phí đổi hàng cho khách mua ở TEELAB trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, bị hư
              hỏng trong quá trình vận chuyển hàng.
            </li>
            <li>
              Trong trường hợp không vừa size hay khách hàng không ưng sản phẩm không muốn nhận hàng phiền khách hàng
              trả ship hoàn đơn hàng về
            </li>
          </ul>
        </li>
      </ol>

      <span className={cx('brand')}>BEELAB</span>
      <br></br>
      <span className={cx('slogan')}>Experiment on Your Style</span>
    </div>
  );
}

export default ReturnPolicy;
