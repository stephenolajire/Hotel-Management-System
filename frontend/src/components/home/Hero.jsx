"use client"

import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import styles from './Hero.module.css';

const Hero = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  const images = [
    '/bg-1.jpg',
    '/hello.jpg',
    // '/bg-3.jpg',
  ];

  return (
    <div className={styles.heroContainer}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        showDots={true}
        removeArrowOnDeviceType={"mobile"}
        className={styles.carousel}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <div
              className={styles.backgroundImage}
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className={styles.contentDiv}>
                <div className={styles.content}>
                  <h1>Welcome to Our Luxury Hotel</h1>
                  <p>Experience the ultimate comfort and elegance</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;