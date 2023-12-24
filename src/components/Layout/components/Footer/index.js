import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted w-100 footer" style={{ backgroundColor: '#000000' }}>
      <section
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        style={{ backgroundColor: '#000000' }}
      >
        <div
          className="me-5
         d-none d-lg-block text-white"
        >
          <span>
            Theo dõi <b style={{ letterSpacing: 5 }}> BEELAB</b> trên các nền tảng khác nhé :{' '}
          </span>
        </div>

        <div className="d-flex">
          <a href="" className={cx('facebook-icon')}>
            <MDBIcon color="white" fab icon="facebook-f" />
          </a>
          <a href="" className={cx('tiktok-icon')}>
            <FontAwesomeIcon icon={faTiktok} style={{ color: '#fff' }} />
          </a>
          <a href="" className={cx('instagram-icon')}>
            <MDBIcon color="white" fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className="text-white" style={{ backgroundColor: '#000000' }}>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{ letterSpacing: 5 }}>
                BEELAB
              </h6>
              <p>Cảm ơn bạn vì đã tin tưởng chúng mình. Hi vọng bạn sẽ có những trải nghiệm tốt !!!</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Đường dẫn</h6>
              <p>
                <a href="/" className={cx('text-reset')}>
                  Trang chủ
                </a>
              </p>
              <p>
                <a href="/product" className={cx('text-reset')}>
                  Sản phẩm
                </a>
              </p>
              <p>
                <a href="#!" className={cx('text-reset')}>
                  Bảng Size
                </a>
              </p>
              <p>
                <a href="#!" className={cx('text-reset')}>
                  Chính sách đổi trả
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Tòa nhà QTSC9 (toà T), đường Tô Ký, phường Tân Chánh Hiệp, quận 12, TP HCM.
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                beelabcontact@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center text-white p-4" style={{ backgroundColor: '#000000' }}>
        © 2023 Copyright: <b style={{ letterSpacing: 5 }}>BEELAB</b>
      </div>
    </MDBFooter>
  );
}

export default Footer;
