import React from "react";
import "./css/recentimages.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import { Card } from "react-bootstrap";
import Data from "./Data/mindRoverData.json";
import { AiFillPlayCircle } from "react-icons/ai";

SwiperCore.use([Pagination, Navigation, Scrollbar]);

const RecentImages = (props) => {
  // const [Data1, setData] = useState([])

  // const getData= async ()=>{
  //   const res = await fetch('/Data/mindRoverData.json')
  //     console.log(JSON.stringify(res))
  //     return res
  // }
  // useEffect(()=>{
  //   getData()
  //   setData(getData())
  //   setData(Data)
  //   return () => {
  //     setData([])
  //   }
  // },[])

 const pictureChangeHandler = (i) =>{
   let mydata = Data[i]
   console.log(mydata);
 }

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={6}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        scrollbar={{ draggable: true }}
      >
        {Data.map((data, i) => (
          <SwiperSlide>
            <Card style={{ width: "20rem" }}>
              {typeof data.imagesUrls === "string" ? (
                <div style={{ position: "relative" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "250px" }}
                    src={data.imagesUrls}
                  />
                  <div
                    className="d-flex justify-content-around"
                    style={{ position: "absolute", right: "0", top: "0px" }}
                  >
                    <span className="badge bg-secondary">{data.type}</span>
                  </div>
                  <div
                    className="d-flex justify-content-around"
                    style={{
                      position: "absolute",
                      right: "0",
                      bottom: "0px",
                      color: "white",
                    }}
                  >
                    <AiFillPlayCircle size="2em" onClick={()=> pictureChangeHandler(i)}/>
                  </div>
                </div>
              ) : (
                <Swiper
                  slidesPerView={1}
                  autoplay={true}
                  pagination
                  className="w-100"
                >
                  {data.imagesUrls?.map((img, i) => (
                    <SwiperSlide>
                      <div style={{ position: "relative" }}>
                        <Card.Img
                          variant="top"
                          width="100%"
                          style={{ height: "250px" }}
                          src={img}
                        />
                        <div
                          style={{
                            position: "absolute",
                            right: "0",
                            top: "0px",
                          }}
                        >
                          <span className="badge bg-secondary">
                            {data.type}
                          </span>
                        </div>
                        <div
                          className="d-flex justify-content-around"
                          style={{
                            position: "absolute",
                            right: "0",
                            bottom: "0px",
                            color: "white",
                          }}
                        >
                          <AiFillPlayCircle size="2em" />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              <Card.Body>
                <Card.Text>
                  <div className="d-flex justify-content-around">
                    <span className="badge bg-secondary">
                      {data.uploadtime}
                    </span>
                  </div>
                </Card.Text>
                <Card.Text>
                  <div className="d-flex justify-content-around">
                    <span className="badge bg-primary">{data.filetype}</span>
                    <span className="badge bg-primary">{data.algorithm}</span>
                    <span className="badge bg-primary">{data.filesize}</span>
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
