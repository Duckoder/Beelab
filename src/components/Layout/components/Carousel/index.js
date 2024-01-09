import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styles from './Carousel.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

function Carousels() {
  return (
    <div className="shadow-lg">
      <MDBCarousel showIndicators>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_1.jpg?1703758476085"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_2.jpg?1703758476085"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_3.jpg?1703758476085"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_4.jpg?1703758476085"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_5.jpg?1703758476085"
          alt="..."
        />
      </MDBCarousel>
    </div>
  );
}

export default Carousels;
