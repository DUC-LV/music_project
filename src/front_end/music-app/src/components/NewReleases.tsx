import React, { useState } from "react";
import { Box, Flex, Image, Text } from "theme-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  DataTopicEvent, getFullTimeFromDatetime } from "../untils";
import Slider from "react-slick";
import { BsCalendarCheck, BsCalendarWeek } from "react-icons/bs"
interface DataSlide {
    title: string;
    dataSlide: DataTopicEvent[] | undefined;
}

const NewReleases = ({ dataSlide, title }: DataSlide) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        // pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots:any) => (
            <Flex sx={{ justifyContent: "center"}}>
                {dataSlide?.slice(0,6)?.map((item:any, index:any) => {
                    // console.log(getFullTimeFromDatetime(item?.dateCreate))
                    // console.log(getFullTimeFromDatetime(item?.dateRelease))
                    return(
                        <Box key={index}>
                            <Image
                                alt=""
                                src={item?.thumbnail}
                                sx={{
                                    height: '80px',
                                    width: '80px',
                                    margin: '10px',
                                    cursor: 'pointer',
                                    borderRadius: '10px',
                                    ":hover": {
                                        transform: `scale(1)`,
                                        border: "3px solid #28b1f4",
                                        
                                    },
                                    
                                }}
                            />
                        </Box>
                    )
                })}
            </Flex>
        ),
        // customPaging: (i:any) => (
        //     <div
        //     style={{
        //         width: "30px",
        //         color: "blue",
        //         border: "1px blue solid"
        //     }}
        //     >
        //     {i + 1}
        //     </div>
        // )
        };
    return(
        <Box
            sx={{
                margin: '0px 320px 0px 210px',
                "@media only screen and (max-width: 1260px)": {
                    margin: '0px 0px 0px 210px',
                },
                "@media only screen and (max-width: 767px)": {
                    margin: '0px',
                },
            }}
        >
            <Box as="h3" sx={{ color: 'rgba(244,246,248,0.9)', mt: '20px'}}>{title}</Box>
            <Slider {...settings}>
                {dataSlide?.slice(0,6)?.map((item, index:any) => {
                    return(
                        <Flex
                            sx={{
                                margin: '10px 10px 80px 0px',
                                // margin: '10px 10px 0px 0px',
                                background: '#202a35',
                                height: '200px', 
                            }}
                            key={index}
                        >
                            <Flex>
                                <Image
                                    alt=""
                                    src={item?.thumbnail}
                                    sx={{
                                        height: '160px',
                                        width: '160px',
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        ":hover": {
                                            transform: "scale(1)",
                                            border: "3px solid #28b1f4",
                                        },
                                        margin: '20px 0px 0px 10px'
                                    }}
                                />
                                <Flex sx ={{ ml: '10%'}}>
                                    <Box>
                                        <Text 
                                        as="h3" 
                                        sx={{ 
                                            color: 'rgba(244,246,248,0.9)', 
                                            mt: '20px',
                                            cursor: 'pointer',
                                            ":hover": {
                                                color: '#28b1f4'
                                            },
                                        }}
                                        >
                                            {item?.title}
                                        </Text>
                                        <Flex  sx={{ mt: '10px'}}>
                                            {item?.dataArtists?.map((item:any, index:any) => {
                                                return(
                                                    <Flex key={index}>
                                                        <Flex>
                                                            <Image
                                                                alt=""
                                                                src={item?.imageUrl}
                                                                sx={{
                                                                    height: '20px',
                                                                    width: '20px',
                                                                    borderRadius: '50%',
                                                                    cursor: 'pointer',
                                                                }}
                                                            />
                                                        </Flex>
                                                        <Text 
                                                            as="p" 
                                                            sx={{ 
                                                                color: 'rgba(244,246,248,0.9)',
                                                                ml: '8px',
                                                                fontSize: '12px',
                                                                mt: '2px',
                                                                cursor: 'pointer',
                                                                ":hover": {
                                                                    color: '#28b1f4'
                                                                },
                                                            }}
                                                        >
                                                            {item?.name}
                                                        </Text>&ensp;
                                                    </Flex>
                                                );
                                            })}
                                        </Flex>
                                        <Flex sx={{ mt: '10px'}}>
                                            <BsCalendarCheck style={{ color: 'rgba(244,246,248,0.9)', position: 'relative', top: '3px'}}/>&ensp;
                                            <Text
                                                as="p" 
                                                sx={{ 
                                                    color: 'rgba(244,246,248,0.9)',
                                                    fontSize: '14px',
                                                }}
                                            >
                                                Ngày tạo:
                                            </Text>&ensp;
                                            <Text
                                                as="p" 
                                                sx={{ 
                                                    color: 'rgba(244,246,248,0.9)',
                                                    fontSize: '14px',
                                                }}
                                            >
                                                {getFullTimeFromDatetime(item?.dateCreate)}
                                            </Text>
                                        </Flex>
                                        <Flex sx={{ mt: '10px'}}>
                                            <BsCalendarWeek style={{ color: 'rgba(244,246,248,0.9)', position: 'relative', top: '2px'}}/>&ensp;
                                            <Text
                                                as="p" 
                                                sx={{ 
                                                    color: 'rgba(244,246,248,0.9)',
                                                    fontSize: '14px',
                                                }}
                                            >
                                                Ngày phát hành:
                                            </Text>&ensp;
                                            <Text
                                                as="p" 
                                                sx={{ 
                                                    color: 'rgba(244,246,248,0.9)',
                                                    fontSize: '14px',
                                                }}
                                            >
                                                {getFullTimeFromDatetime(item?.dateRelease)}
                                            </Text>
                                        </Flex>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Flex>
                    );
                })}
            </Slider>
        </Box>
    );
}
export default NewReleases;