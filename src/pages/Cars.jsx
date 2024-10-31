import React from "react";
import CarsCard from "../components/ourCars/OurCarsCard";
import image1 from "../assets/img/car1.jpg"
import image2 from "../assets/img/car2.jpg"
import image3 from "../assets/img/car3.jpg"
import image4 from "../assets/img/car4.jpg"
import image5 from "../assets/img/car5.jpg"
import image6 from "../assets/img/car6.jpg"


const Cars = () => {
  const carsData = [
    {
      id: 0,
      img: image1,
      name: "Cadillac Escalade",
      price: "22,440",
    },
    {
      id: 1,
      img: image2,
      name: "BMW 3 Series",
      price: "54,890",
    },
    {
      id: 2,
      img: image3,
      name: "Mercedes",
      price: "75,890",
    },
    {
      id: 3,
      img: image4,
      name: "BMW 7 Series",
      price: "55,789",
    },
    {
      id: 4,
      img: image5,
      name: "Mercedes-Benz",
      price: "95,776",
    },
    {
      id: 5,
      img: image6,
      name: "Range Rover",
      price: "88,450",
    },
  ];

  return (
    <div className=" container pt-24 p-[30px] m-auto">
      <div>
        <h1 className=" font-bold text-4xl text-center">
          Our <span className=" text-primary">Cars</span>
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {carsData.map((item) => {
          return (
            <div>
              <CarsCard
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cars;