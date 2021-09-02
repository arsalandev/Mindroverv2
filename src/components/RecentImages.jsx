import React from "react";
import "./css/recentimages.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
// import "swiper/components/pagination/pagination.min.css";
// import 'swiper/css/navigation';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
// import "swiper/bundle";
import { Card, Button } from "react-bootstrap";
import Data from "./Data/mindRoverData.json";


SwiperCore.use([Pagination, Navigation, Scrollbar]);

const RecentImages = () => {
  return (
    <>
  
      <Swiper
        spaceBetween={20}
        slidesPerView={6}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {Data.map((Data, index) =>(
            <SwiperSlide>
            <Card  style={{ width: '20rem' }}>
              <Card.Img variant="top" style={{ height: '250px'}} src={Data.imagesUrls} />
              <Card.Body>
                <Card.Title>
                  <div className="d-flex justify-content-around">
                    <span className="badge bg-secondary">Type: {Data.type}</span>
                  </div>
                </Card.Title>
                <Card.Text>
                  <div className="d-flex justify-content-around">
                    <span className="badge bg-secondary">{Data.uploadtime}</span>
                  </div>
                </Card.Text>
                <Card.Text>
                  <div className="d-flex justify-content-around">
                    <span className="badge bg-primary">{Data.filetype}</span>
                    {/* <span className="badge bg-primary">{Data.count}</span> */}
                    <span className="badge bg-primary">{Data.algorithm}</span>
                    <span className="badge bg-primary">{Data.filesize}</span>
                  </div>
                </Card.Text>
             
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
        </Swiper>
 
        
             
    </>
  );
};

export default RecentImages;
