import styles from './Cart.modules.scss';
import classNames from 'classnames';
import React from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
  MDBRadio,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from 'mdb-react-ui-kit';
function Cart() {
  return (
    <section className="h-100 h-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col">Thông tin sản phẩm </th>
                  <th scope="col">Size/Màu</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Giá tiền </th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://bizweb.dktcdn.net/100/415/697/products/ts209.jpg?v=1695720506783"
                        fluid
                        className="rounded-3"
                        style={{ width: '120px' }}
                        alt="Clothes"
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">Áo Thun Teelab Local Brand Unisex </p>
                        <p className="mb-0">True Chill Isn’t In The Smoke TS209</p>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-danger">
                            <MDBIcon fas icon="trash text-danger" size="lg" />
                          </a>
                        </MDBCol>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: '500' }}>
                      Đen/M
                    </p>
                  </td>
                  <td className="align-middle">
                    <div class="d-flex flex-row align-items-center">
                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput min={0} type="number" size="sm" style={{ width: '50px' }} defaultValue={2} />

                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: '500' }}>
                      300.000VND
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://bizweb.dktcdn.net/100/415/697/products/ts209.jpg?v=1695720506783"
                        fluid
                        className="rounded-3"
                        style={{ width: '120px' }}
                        alt="Clothes"
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">Áo Thun Teelab Local Brand Unisex</p>
                        <p className="mb-0">True Chill Isn’t In The Smoke TS209</p>
                        <MDBCol md="1" lg="1" xl="1" className="text-end ">
                          <a href="#!" className="text-danger">
                            <MDBIcon fas icon="trash text-danger" size="lg" />
                          </a>
                        </MDBCol>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: '500' }}>
                      Đen/M
                    </p>
                  </td>
                  <td className="align-middle">
                    <div class="d-flex flex-row align-items-center">
                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput min={0} type="number" size="sm" style={{ width: '50px' }} defaultValue={1} />

                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: '500' }}>
                      300.000VND
                    </p>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
          <MDBCard className="shadow-2-strong md-9 mb-lg-0" style={{ borderRadius: '16px' }}>
            <MDBCardBody className="p-4">
              <MDBRow>
                <MDBCol md="6" lg="4" xl="6"></MDBCol>
                <div className="d-flex justify-content-between" style={{ fontWeight: '500' }}>
                  <p className="mb-2">Tổng thu</p>
                  <p className="mb-2">300.000VND</p>
                </div>
                <div className="d-flex justify-content-between" style={{ fontWeight: '500' }}>
                  <p className="mb-2">Vourcher</p>
                  <p className="mb-2">300.000VND</p>
                </div>
                <div className="d-flex justify-content-between" style={{ fontWeight: '500' }}>
                  <p className="mb-0">Vận chuyển</p>
                  <p className="mb-0">300.000VND</p>
                </div>

                <hr className="my-4" />

                <div className="d-flex justify-content-between mb-4" style={{ fontWeight: '500' }}>
                  <p className="mb-2">Thành tiền </p>
                  <p className="mb-2">300.000VND</p>
                </div>

                <MDBBtn block size="lg">
                  <div className="d-flex justify-content-between">
                    <span>Thanh toán </span>
                    <span>300.000VND</span>
                  </div>
                </MDBBtn>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Cart;
