/**
 * Carousels.jsx  –  CGS
 *
 * Same structure as akuastrono Carousels.jsx.
 * Images are CGS campus / activity photos hosted at
 * https://akucgs.vercel.app (shared CDN) or referenced
 * as public-folder paths (/images/...).
 *
 * Replace the src values below once you host the CGS
 * images at your own domain / public folder.
 */

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Carousel.css';

// ── CGS campus / activities images ──────────────────────
// Using the akucgs CDN for now; swap to your own paths
// when deploying the CGS build.
const slides = [
  {
    src: 'https://akucgs.vercel.app/images/CGS_Entrance.JPG',
    alt: 'CGS Campus Entrance',
  },
  {
    src: 'https://akucgs.vercel.app/images/achievements.jpeg',
    alt: 'CGS Achievements',
  },
  {
    src: 'https://akucgs.vercel.app/images/newSlide.jpg',
    alt: 'CGS Activities',
  },
  {
    src: 'https://akucgs.vercel.app/images/20210308_145608.jpg',
    alt: 'CGS Events',
  },
  {
    src: 'https://akucgs.vercel.app/images/20210308_145734.jpg',
    alt: 'CGS Field Work',
  },
  {
    src: 'https://akucgs.vercel.app/images/newimage.jpg',
    alt: 'CGS Seminar',
  },
];

const Carousels = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      stopOnHover={true}
      swipeable={true}
      dynamicHeight={true}
    >
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.src} alt={slide.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default Carousels;
