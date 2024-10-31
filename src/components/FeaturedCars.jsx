import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import car1 from "../assets/img/car1.jpg";
import car2 from "../assets/img/car2.jpg";
import car3 from "../assets/img/car3.jpg";
import car4 from "../assets/img/car4.jpg";
import car5 from "../assets/img/car5.jpg";
import car6 from "../assets/img/car6.jpg";
import FeatureCard from './FeaturedCard';

function FeaturedCars() {
  const carsData = [
    { id: 0, img: car1, name: "Cadillac Escalade", price: "22,440" },
    { id: 1, img: car2, name: "BMW 3 Series", price: "54,890" },
    { id: 2, img: car3, name: "Mercedes", price: "75,890" },
    { id: 3, img: car4, name: "BMW 7 Series", price: "55,789" },
    { id: 4, img: car5, name: "Mercedes-Benz", price: "95,776" },
    { id: 5, img: car6, name: "Range Rover", price: "88,450" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1023, settings: { slidesToShow: 3, dots: true } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="w-full mt-14">
      <div className="text-center mb-8">
        <h1 className="font-bold text-4xl">
          Featured <span className="text-primary">Cars</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, laborum!</p>
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <Slider {...settings}>
          {carsData.map((item) => (
            <FeatureCard key={item.id} img={item.img} name={item.name} price={item.price} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FeaturedCars;
