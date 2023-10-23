import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Product() {
  return (
    <div>
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
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Product;
