import styles from './Sizechart.modules.scss';
import classNames from 'classnames';
import React from 'react';
import Image from 'react-bootstrap/Image'; // or use standard HTML <img> tag
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function SizeChart() {
  return (
    <section className="your-section-class">
      <MDBContainer className="your-container-class">
        <MDBRow className="your-row-class">
          <MDBCol xs="12" sm="12" md="12">
            <h5 className="text-uppercase fw-bold mb-4">
              <MDBIcon color="secondary" icon="gem" className="me-3" />
              Bảng Size
            </h5>
            <div className="conten-page rte">
              <img
                src="https://bizweb.dktcdn.net/100/415/697/files/bang-size.png?v=1639245000729"
                alt="Size Chart"
                rounded
                onError={(e) => {
                  console.error('Image load error:', e);
                }}
              />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
export default SizeChart;
