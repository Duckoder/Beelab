import React from 'react';
import { useParams } from 'react-router-dom';

function PaymentResult() {
  const { paymentStatus } = useParams();
  return (
    <div>{paymentStatus === 'success' ? <h1>Thanh toán thành công!</h1> : <h1>Thanh toán không thành công!</h1>}</div>
  );
}

export default PaymentResult;
