import Slider from "react-slick";
import { newArr } from "../../../assets/images/index";
import Heading from "../ProductCard/Heading";
import Product from "../ProductCard/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const array = [1, 2, 3, 4, 5, 4, 7];
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        {array.map((index) => (
          <div className="px-2" key={index}>
            <Product
              key={index}
              _id={"10000" + index}
              img={newArr}
              productName="dsa Table Clock dsa Table Clock dsa Table Clock dsa Table Clock"
              price="44.00"
              color="Black"
              badge="New"
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
        ))}
    
      </Slider>
    </div>
  );
};

export default NewArrivals;
