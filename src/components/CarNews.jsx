import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  image1 from "../assets/img/news1.jpg"
import  image2 from "../assets/img/news2.jpg"
import  image3 from "../assets/img/news3.jpg"
import  image4 from "../assets/img/news4.jpg"
import  image5 from "../assets/img/news5.jpg"
import  image6 from "../assets/img/news6.jpg"
import NewsCard from './NewsCard';




function CarNews() {

    const newsData = [
        {
          id: 0,
          img: image1,
          desc: "Toyota touts internal combustion engine potential, even in EV age",
        },
        {
          id: 1,
          img: image2,
          desc: "BMW Group India clocks best-ever annual sales in 2023, leads luxury electric car segment",
        },
        {
          id: 2,
          img: image3,
          desc: "MG Astor 2024 launched in India, price starts at Rs 9.98 lakh",
        },
        {
          id: 3,
          img: image4,
          desc: "Kia Sonet facelift launched in India at Rs 7.99 lakh, Tata Nexon & Maruti Suzuki Brezza rival",
        },
        {
          id: 4,
          img: image5,
          desc: "First Shift: New-vehicle inventory reaches 3-year high",
        },
        {
          id: 5,
          img: image6,
          desc: "JLR India sales rise 74% in Q3 on robust demand for Range Rover, Range Rover Velar, Defender",
        },
      ];
    
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
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
              initialSlide: 2,
            },
          },
        ],
      };


  return (
    <div className='p-[10px]'>
        <h1  className='text-black text-4xl  font-bold  text-center'>Cars  <span className='text-primary'>News & Advices</span></h1>
        <p className=" text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
        laborum!
      </p>

      <div className=" mt-8 px-4">
        <Slider {...settings}>
          {newsData.map((item) => (
            <NewsCard key={item.id} img={item.img} desc={item.desc} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CarNews
