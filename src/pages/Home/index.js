import Carousel from '~/components/Layout/components/Carousel';
import ItemCard from '~/components/Layout/components/ItemCard';
import { getAllProduct } from '~/API/api';
import { useState, useEffect } from 'react';
import { Col, Divider, Row } from 'antd';

function Home() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getAllProduct().then((data) => {
      setProduct(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="wrapper d-flex flex-column justify-content-center mt-3">
      <Carousel />

      <Row className="text-center mt-5">
        <h3>Enjoy Your Youth!</h3>
        <p>
          Không chỉ là thời trang, BEELAB còn là “phòng thí nghiệm” của tuổi trẻ - nơi nghiên cứu và cho ra đời nguồn
          năng lượng mang tên “Youth”. Chúng mình luôn muốn tạo nên những trải nghiệm vui vẻ, năng động và trẻ trung.
        </p>
      </Row>

      <Row className="mt-5 mb-5">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Row
            key={idx}
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Divider orientation="left">
              <h3>Sản phẩm</h3>
            </Divider>
            {products.map((product, index) => (
              <Col className="gutter-row" span={6}>
                <div>
                  <ItemCard
                    key={index}
                    productId={product.id}
                    itemName={product.title}
                    itemPrice={product.price}
                    itemImage={product.image}
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
