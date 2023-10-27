import Carousel from '~/components/Layout/components/Carousel';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Row from 'react-bootstrap/Row';
import ItemCard from '~/components/Layout/components/ItemCard';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className="wrapper">
      <Carousel />

      <Row className="text-center mt-5">
        <h3>Giới thiệu sơ lược về brand</h3>
        <p>
          Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit.
        </p>
      </Row>

      <Row className="mt-5 mb-5">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Row key={idx} className="mt-2">
            <h3>Sản phẩm</h3>
            <ItemCard />
            <Row className="text-center mt-5">
              <a href="" className="text-dark">
                Xem thêm
              </a>
            </Row>
          </Row>
        ))}
      </Row>
    </div>
  );
}

export default Home;
