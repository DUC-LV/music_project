import React from "react";
import { Box, Button, Flex, Grid, Image, Text } from "theme-ui";
import Slider from "react-slick";
import { DataRanking } from "../untils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface DataSlide {
    title: string;
    dataSlide: DataRanking[] | undefined;
}
const RankingHome = ({ dataSlide, title }: DataSlide) => {
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
            <Box
                sx={{
                    height: '200px',
                    width: '100%',
                    background: '#202a35',
                    borderRadius: '10px',
                    mt: '20px'
                }}
            >
                {dataSlide?.map((item:any, index:any) => {
                    return(
                        <Grid key={index}
                            sx={{
                                gridTemplateColumns: ['3','1.5fr 1.5fr 0.15fr'],
                                mt: '20px',
                                backgroundColor: '',
                                margin: '0px 10px 0px 10px',
                            }}
                        >
                            <Flex sx={{ marginTop: '15px', cursor: 'pointer'}}>
                                <Text sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'rgba(244,246,248,0.9)',}}>{item?.highestPosition}</Text>
                                <Image
                                    alt=""
                                    src={item?.thumbnail}
                                    sx={{
                                        height: '36px',
                                        width: '36px',
                                        borderRadius: '5px',
                                        ml: '10px',
                                    }}
                                />
                                <Text sx={{ ml: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'rgba(244,246,248,0.9)',}}>{item?.title}</Text>
                            </Flex>
                            <Flex sx={{ cursor: 'pointer', mt: '18px'}}>
                                {item?.dataArtists?.map((item:any, index:any) => {
                                    return(
                                        <Text key={index} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'rgba(244,246,248,0.9)',}}>{item?.name}</Text>
                                    );
                                })}
                            </Flex>
                            <Text sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'rgba(244,246,248,0.9)',mt: '18px'}}>{item?.dateCreate}</Text>
                        </Grid>
                    )
                })}
                <Flex sx={{ justifyContent: 'center', mt: '11px'}}>
                    <Button 
                        sx={{
                            background: '#202a35',
                            border: '1px solid white', 
                            borderRadius: '5px', 
                            fontSize: '12px', 
                            cursor: 'pointer',
                            ":hover": {
                                background: '#2d2016'
                            }
                        }}
                        >
                            Xem Thêm
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
}
export default RankingHome;