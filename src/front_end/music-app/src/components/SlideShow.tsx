import React from "react";
import { Box, Image, Text } from "theme-ui";
import { DataTopicEvent } from "../untils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface DataSlide {
    groupName: string;
    dataSlide: DataTopicEvent[] | undefined;
}

const SlideShow = ({ dataSlide, groupName }:DataSlide) => {
    const settings = {
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }  
            },
            {
                breakpoint: 1023,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }  
            },
            {
                breakpoint: 767,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }  
            },

        ]
	}
    return(
        <Box
            sx={{
                margin: '0px 310px 0px 210px',
                "@media only screen and (max-width: 1260px)": {
                    margin: '0px 0px 0px 210px',
                },
                "@media only screen and (max-width: 767px)": {
                    margin: '0px',
                },
            }}
        >
            <Box as="h3" sx={{ color: 'rgba(244,246,248,0.9)', mt: '20px'}}>{groupName}</Box>
            <Slider {...settings}>
                {dataSlide?.map((item, index:any) => {
                        return(
                            // eslint-disable-next-line react/jsx-key
                            <Box key={index}>
                                <Box
                                    sx={{
                                        mt: '15px',
                                        outline: 'none',
                                        width: '94%'
                                    }}
                                >
                                    <Image
                                        alt=""
                                        src={item?.thumbnail}
                                        sx={{
                                            borderRadius: '10px',
                                            cursor: 'pointer',
                                            width: '100%',
                                            ":hover": {
                                                transform: "scale(1)",
                                                border: "3px solid #28b1f4",
                                            },
                                        }}
                                    />
                                </Box>
                                <Text 
                                as="h5" 
                                sx={{ 
                                    textAlign: 'center', 
                                    color: 'rgba(244,246,248,0.9)', 
                                    width: '94%', 
                                    mt: '10px', 
                                    cursor: 'pointer', 
                                    ":hover": {
                                        color: '#28b1f4'
                                    },
                                    "@media only screen and (max-width: 768px)": {
                                        display: 'none',
                                    },
                                }}>
                                    {item?.title}
                                </Text>
                            </Box>
                        );
                    })}
            </Slider>
        </Box>
    );
}
export default SlideShow;
