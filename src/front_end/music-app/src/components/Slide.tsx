import React from "react";
import Slider from "react-slick";
import { Box, Image } from "theme-ui";
import { DataShowCase } from "../untils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface DataSlide {
    dataSlide: DataShowCase[] | undefined;
}

const Slide = ( { dataSlide }:DataSlide) => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return(
        <Box
            sx={{
                margin: '10px 320px 10px 210px',
                "@media only screen and (max-width: 1260px)": {
                    margin: '10px 0px 10px 210px',
                }
            }}
        >
            <Slider {...settings}>
                {dataSlide?.map((item, index:any) => {
                    return(
                        // eslint-disable-next-line react/jsx-key
                        <Box 
                            key={index}
                        >
                            <Image
                                alt=""
                                src={item?.imageUrl}
                                sx={{
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                }}
                            />
                        </Box>
                    );
                })}
            </Slider>
        </Box>
    );
}
export default Slide;