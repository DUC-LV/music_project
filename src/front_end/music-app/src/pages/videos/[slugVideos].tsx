import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, Image, Text } from "theme-ui";
import Menu from "../../components/Menu";
import { SkeletonVideo } from "../../components/SkeletonLoading";
import getCategoryVideo from "../../service/getCategoryVideo";
import { convertSlug } from "../../untils";
import PlayMusic from "../../components/PlayMusic";
export interface DataVideo {
	image?: string;
	title?: string;
	nameArtist?: string;
	key?: string,
}
const CategoryVideo = () => {
    const router = useRouter();
    const [dataVideo, setDataVideo] = useState<Array<DataVideo>>()
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if(router.query.slugVideos){
            setTimeout(() => {
                getCategoryVideo.getAll(String(router.query.slugVideos)).then((res:any) => {
                    console.log(res.data.data)
                    setDataVideo(res.data.data)
                    setIsLoading(false);
                })
            }, 200);
        }
    }, [router.query.slugVideos])
    return(
        <Box
            sx={{
                margin: '0px 320px 0px 200px',
                "@media only screen and (max-width: 1260px)": {
                    margin: '0px 0px 0px 210px',
                },
                "@media only screen and (max-width: 767px)": {
                    margin: '0px',
                },
            }}
        >
            <Menu />
            { isLoading ? <SkeletonVideo /> : <>
            <Grid
                sx={{
                    "@media only screen and (min-width: 1024px)": {
                        margin: '20px 20px 20px 20px',
                        gridTemplateColumns: ['3','0.5fr 0.5fr 0.5fr'],
                    }
                }}
            >
                {dataVideo?.map((item:any, index:any) => {
                    return(
                        <Box
                            key={index}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                }}
                            >
                                <Image
                                    onClick={() => {
                                        router.push({
                                            pathname: '../video/[slugVideo]',
                                            query:{
                                                slugVideo: convertSlug(item.title),
                                                "key": item.key,
                                            }
                                        })
                                    }}
                                    alt=""
                                    src={item?.thumbnail}
                                    sx={{
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        ":hover": {
                                            transform: "scale(1.01)",
                                        }
                                    }}
                                />
                                <Text
                                    as="p"
                                    sx={{
                                        position: 'absolute',
                                        bottom: '4px',
                                        right: '0',
                                        fontSize: '11px',
                                        color: 'rgba(255,255,255,0.88)',
                                        height: '16px',
                                        backgroundImage: 'linear-gradient( to right, rgba(0,0,0,0), rgba(0,0,0,0.6))',
                                        borderRadius: '0 0 8px 0',
                                        lineHeight: '16px',
                                    }}
                                >{item?.duration}</Text>
                            </Box>
                            <Text
                                as="h5"
                                sx={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    fontSize: '14px',
                                    color: '#c5c9cd',
                                    cursor: 'pointer',
                                    ":hover": {
                                        color: '#2DAAED',
                                    },
                                }}
                            >{item?.title}</Text>
                            <Flex>
                                {item?.artists.map((item:any, index:any) => {
                                    return(
                                        <Text
                                            key={index}
                                            as="h6"
                                            sx={{
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                fontSize: '12px',
                                                color: 'rgba(244,246,248,0.5)',
                                                cursor: 'pointer',
                                                mt: '5px',
                                                ":hover": {
                                                    color: '#2DAAED',
                                                },
                                            }}
                                        >{item.name} &emsp;</Text>
                                    );
                                })}
                            </Flex>
                        </Box>
                    )
                })}
            </Grid>
            </>}
            <PlayMusic keySong="" />
        </Box>
    );
}
export default CategoryVideo;