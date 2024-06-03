import React from "react";
import { WatchDetail, ProductDetail, LaptopDetail, headphonesDetail } from "../Details/ProductDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ProductSlider.css";
import { Link } from "react-router-dom";

const ProductSlider = () => {
  return (
    <>
      <div id="product-slider-container">
        <div className="slider-title">
          <h1>Today's Deals</h1>
          <span className="product-offer">See all deals</span>
        </div>
        <ProductCardSlider Product={headphonesDetail} />
      </div>

      <ProductCardSlider Product={WatchDetail} />
      <ProductCardSlider Product={ProductDetail} />
      <ProductCardSlider Product={LaptopDetail} />
    </>
  );
};

export default ProductSlider;

const ProductCardSlider = ({ Product }) => {
  const settings2 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings2} className="sliderCarousel">
      {Product.map((item) => (
        <div key={item.id}>
          <ProductCard2 id={item.id} productImage={item.image} productName={item.name} />
        </div>
      ))}
    </Slider>
  );
};

const ProductCard2 = ({ productImage, productName, id }) => {
  return (
    <Link to={`/ProductPaga/${id}`} key={id}>
      <div className="product-card">
        <div className="card-img">
          <img
            className="product-card-img"
            src={`../image/ProductImage/${productImage}`}
            alt={productName}
          />
        </div>
        <div className="product-description">
          <p>
            <span className="discount">Up to 17% off</span>
            <span className="dealOfTheDay">Deal of the Day</span>
          </p>
          <p className="top-bottom-padding product-name">{productName}</p>
        </div>
      </div>
    </Link>
  );
};
