import Carousel from '~/components/Layout/components/Carousel';
import classNames from 'classnames';
import styles from './Home.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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
          <Row key={idx} className="mt-5">
            <h3>Sản phẩm</h3>
            <Row xs={1} md={4} className="g-4">
              {Array.from({ length: 8 }).map((_, idx) => (
                <Col key={idx}>
                  <Card className="text-center me-2">
                    <Card.Img
                      variant="top"
                      src="https://dictionary.cambridge.org/vi/images/thumb/Tshirt_noun_001_18267.jpg?version=5.0.338"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row className='text-center mt-5'>
              <a href='' className='text-dark'>Xem thêm</a>
            </Row>
          </Row>
        ))}
      </Row>
    </div>
  );
}

export default Home;
