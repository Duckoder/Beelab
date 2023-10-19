import React from 'react';
import Carousel from '~/components/Layout/components/Carousel';
import classNames from 'classnames';
import styles from './ProductDetail.modules.scss';


function ProductDetail() {
  
	return (
		<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="pro-img-details">
                <img src="https://bizweb.dktcdn.net/100/415/697/products/kem-1-186eb0a8-1b6c-4b55-8c91-f65d44796b49.jpg?v=1692016656817" alt=""/>
            </div>
        </div>
        <div class="col-md-6">
            <h4 class="pro-d-title">
                <a href="#/" class="">
                Thông tin sản phẩm:
                </a>
            </h4>
            <p>
                <div>
                    - Chất liệu: Cotton<br />
                    - Form: Oversize<br />
                    - Màu sắc: Kem<br />
                    - Thiết kế: In Lụa<br />
                </div>
            </p>

            <div class="product_meta">
                <span class="posted_in"> <strong>Categories:</strong> <a rel="tag" href="#/">Áo thun</a>, <a rel="tag" href="#/">Áo Polo</a>, <a rel="tag" href="#/">Áo sơ mi</a>, <a rel="tag" href="#/">Áo Ba Lỗ</a>.</span>
                <span class="tagged_as"><strong>Tags:</strong> <a rel="tag" href="#/">Nam</a>, <a rel="tag" href="#/">Nữ</a>.</span>
            </div>
            <div class="m-bot15">
                <strong>Price : </strong>
                <span class="amount-old">$544</span>
                <span class="pro-price"> $300.00</span>
            </div>
            <div class="form-group">
                <label>Quantity</label>
                <input type="quantity" placeholder="1" class="form-control quantity" />
            </div>
            <p>
                <button class="btn btn-round btn-danger" type="button"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
            </p>
        </div>
    </div>
</div>

	);
}
export default ProductDetail;