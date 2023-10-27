import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styles from './Carousel.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

function Carousels() {
  return (
    <MDBCarousel showIndicators>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://mdbootstrap.com/img/new/slides/041.jpg"
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://mdbootstrap.com/img/new/slides/042.jpg"
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://mdbootstrap.com/img/new/slides/043.jpg"
        alt="..."
      />
    </MDBCarousel>
    // <Carousel>
    //   <Carousel.Item>
    //     <Image
    //       src="https://c4.wallpaperflare.com/wallpaper/531/951/621/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-thumb.jpg"
    //       rounded
    //       className="d-block w-100"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <Image
    //       src="https://c4.wallpaperflare.com/wallpaper/531/951/621/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-thumb.jpg"
    //       rounded
    //       className="d-block w-100"
    //     />
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <Image
    //       src="https://c4.wallpaperflare.com/wallpaper/531/951/621/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-thumb.jpg"
    //       rounded
    //       className="d-block w-100"
    //     />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default Carousels;
