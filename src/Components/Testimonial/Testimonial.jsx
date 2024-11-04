import React from "react";
import Slider from "react-slick";

const Testimonialdata = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptates at laboriosam tempora ex sunt in, esse pariatur distinctio ab nulla, voluptatum architecto cumque iure modi! Et ad praesentium eum?",
    img: "https://fastly.picsum.photos/id/522/200/300.jpg?hmac=6-KFAVAX70eulRbHj_faT1bRFPGrXhPiDHXe6zPaH-4",
  },
  {
    id: 2,
    name: "Sabir ali",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptates at laboriosam tempora ex sunt in, esse pariatur distinctio ab nulla, voluptatum architecto cumque iure modi! Et ad praesentium eum?",
    img: "https://fastly.picsum.photos/id/727/200/200.jpg?hmac=3t3XFTDKvF4DdvtTj-t8IMm5uwdlyzdECQmn87m3qk0",
  },
  {
    id: 3,
    name: "Dileep Kumar",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptates at laboriosam tempora ex sunt in, esse pariatur distinctio ab nulla, voluptatum architecto cumque iure modi! Et ad praesentium eum?",
    img: "https://fastly.picsum.photos/id/423/200/300.jpg?hmac=Yb4FKqDYd2C1Lvx5F0BDwATeS4vxsllU9vPl228-BXQ",
  },
  {
    id: 4,
    name: "Sam",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptates at laboriosam tempora ex sunt in, esse pariatur distinctio ab nulla, voluptatum architecto cumque iure modi! Et ad praesentium eum?",
    img: "https://fastly.picsum.photos/id/443/200/200.jpg?hmac=ceI_qNYuyS_i8MicdRztsYDJLek0_-IDsEwLhAfaIEo",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-9 mb-10">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-cursive font-bold">Testimonial</h1>
        </div>
        <Slider {...settings}>
          {Testimonialdata.map((data) => (
            <div className="my-3" key={data.id}>
              <div className="flex flex-col gap-4 shadow-lg rounded-xl bg-primary/10 py-6 px-6 mx-4 relative">
                <div className="mb-4 flex justify-center">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <p className="text-xs text-gray-500 text-center">{data.text}</p>
                  <h1 className="text-xl font-bold text-black/80 font-cursive">
                    {data.name}
                  </h1>
                </div>
                <p className="text-9xl text-black/20 font-serif absolute top-0 right-0">,,</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
