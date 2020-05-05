import React from "react";
import Slider from "react-slick";

export default class HomePageSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      centerMode: true,
      centerPadding: "0px"
    };

    return (
      <div>
        <Slider
          ref={slider => (this.slider = slider)}
          {...settings}
          style={{ width: "45em", height: "10em", textAlign: "center" }}
        >
          <div>
            <img
              height="600rem"
              src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="image1"
            />
          </div>
          <div>
            <img
              height="600rem"
              src="https://images.pexels.com/photos/698549/pexels-photo-698549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="image2"
            />
          </div>
          <div>
            <img
              height="600rem"
              src="https://topic.imgix.net/usq/c86c3945-5069-4eda-884f-af1997677303/c86c3945-5069-4eda-884f-af1997677303.jpeg?auto=compress,format&cs=srgb&dpr=1&w=1440&_=59901dd052ed888a567e041dc0ca8b50&bg=%23f0f0f0"
              alt="image3"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
