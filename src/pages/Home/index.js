import Carousel from '~/components/Layout/components/Carousel';
import ItemCard from '~/components/Layout/components/ItemCard';
import { getAllProduct, getAllCategories } from '~/API/api';
import { useState, useEffect } from 'react';
import { Col, Divider, Row } from 'antd';

function Home() {
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllProduct().then((data) => {
      setProduct(data);
    });
  }, []);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  });

  return (
    <div className="wrapper d-flex flex-column justify-content-center mt-3">
      <Carousel />

      <Row className="d-flex text-center justify-content-center mt-5">
        <h3>Enjoy Your Youth!</h3>
        <p className="fs-6">
          Không chỉ là thời trang, BEELAB còn là “phòng thí nghiệm” của tuổi trẻ - nơi nghiên cứu và cho ra đời nguồn
          năng lượng mang tên “Youth”. Chúng mình luôn muốn tạo nên những trải nghiệm vui vẻ, năng động và trẻ trung.
        </p>
      </Row>

      <Row className="mt-5 mb-5">
        {categories.map((category, index) => (
          <Row
            key={index}
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Divider orientation="left">
              <h3>{category}</h3>
            </Divider>
            {products.map((product, index) => (
              <Col className="gutter-row" span={6}>
                <div>
                  <ItemCard
                    key={index}
                    productId={product.id}
                    productName={product.title}
                    productPrice={product.price}
                    productImage={product.image}
                  />
                </div>
              </Col>
            ))}
          </Row>

          // <Row>
          //   <h3>Sản phẩm</h3>
          //   {products.map((product, index) => (
          //     <Row xs={2} sm={3} md={4} key={idx} className="mt-2 d-flex">
          //       <Col className="p-3">
          //         <ItemCard key={index} itemName={product.title} itemPrice={product.price} itemImage={product.image} />
          //       </Col>
          //     </Row>
          //   ))}

          //   <Row className="text-center mt-5">
          //     <a href="/product" className="text-dark">
          //       Xem thêm
          //     </a>
          //   </Row>
          // </Row>
        ))}
      </Row>
    </div>
  );
}

export default Home;
