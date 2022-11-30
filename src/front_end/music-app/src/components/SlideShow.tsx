import React from "react";
import { Box, Image } from "theme-ui";
import { DataTopicEvent } from "../untils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface DataSlide {
    groupName: string;
    dataSlide: DataTopicEvent[] | undefined;
}

const SlideShow = ({ dataSlide, groupName }:DataSlide) => {
    const setting = {
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
	}
    return(
        <Box
            sx={{
                margin: '30px 330px 10px 210px',
                "@media only screen and (max-width: 1260px)": {
                    margin: '10px 0px 10px 210px',
                },
            }}
        >
            <Box as="h2" sx={{ color: 'white'}}>{groupName}</Box>
            <Slider {...setting}>
                {dataSlide?.map((item, index:any) => {
                        return(
                            // eslint-disable-next-line react/jsx-key
                            <Box 
                                key={index}
                                sx={{
                                    mt: '10px',
                                    outline: 'none'
                                }}
                            >
                                <Image
                                    alt=""
                                    src={item?.thumbnail}
                                    sx={{
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        width: '92%',
                                        
                                    }}
                                />
                            </Box>
                        );
                })}
            </Slider>
        </Box>
    );
}
export default SlideShow;