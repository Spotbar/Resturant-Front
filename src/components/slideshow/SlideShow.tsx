import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";
import fastfood from "../../assets/images/fastfood.jpg";
import chicken from "../../assets/images/food/chicken.jpg";
import ege from "../../assets/images/food/ege.jpg";
import fried from "../../assets/images/food/fried.jpg";
import shrimp from "../../assets/images/food/shrimp.jpg";
import potato from "../../assets/images/food/potato.jpg";
import potato1 from "../../assets/images/food/potato1.jpg";
const SlideShow = () => {
  const images = [
    {
      original: fastfood,
      thumbnail: fastfood,
    },
    {
      original: chicken,
      thumbnail: chicken,
    },
    {
      original: fried,
      thumbnail: fried,
    },
    {
      original: ege,
      thumbnail: ege,
    },
    {
      original: shrimp,
      thumbnail: shrimp,
    },
    {
      original: potato,
      thumbnail: potato,
    },
    {
      original: potato1,
      thumbnail: potato1,
    },

    // Add more images as needed
  ];

  const galleryOptions = {
    showThumbnails: false,
    showNav: true,
    showFullscreenButton: true,
    showBullets: true,
    showPlayButton: true,
    slideInterval: 3000,
    slideDuration: 450,
    startIndex: 0,
  };

  return (
    <div className="gallery-container h-300px">
      <ImageGallery items={images} {...galleryOptions} />
    </div>
  );
};

export default SlideShow;
