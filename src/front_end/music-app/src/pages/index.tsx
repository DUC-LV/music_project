// import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { Box } from "theme-ui";
import NewReleases from "../components/NewReleases";
import RankingHome from "../components/RankHome";
import Slide from "../components/Slide";
import SlideShow from "../components/SlideShow";
import { SkeletonSlide, SkeletonSlideShow } from "../components/SkeletonLoading";
import getListTopic from "../service/getListTopic";
import getNewReleases from "../service/getNewReleases";
import getRankingHome from "../service/getRankingHome";
import getShowCaseHome from "../service/getShowCaseHome";
import getTop100 from "../service/getTop100";
import getTopicEventHome from "../service/getTopicEventHome";
import { DataRanking, DataShowCase, DataTopicEvent } from "../untils";
import PlayMusic from "../components/PlayMusic";

// type Props = {
//     dataShowCase: Array<DataShowCase>
// }

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
// 	const resDataShowCase = await getShowCaseHome.getAll()
// 	return{
// 		props: {
// 			dataShowCase:resDataShowCase.data
// 		}
// 	}
// }
const Home = () => {
    const [dataShowCase, setDataShowCase] = useState<Array<DataShowCase>>();
    const [dataTopicEvent, setDataTopicEvent] = useState<Array<DataTopicEvent>>();
    const [dataNewReleases, setDataNewReleases] = useState<Array<DataTopicEvent>>();
    const [dataRanking, setDataRanking] = useState<Array<DataRanking>>();
    const [dataListTopic, setDataListTopic] = useState<Array<DataShowCase>>();
    const [dataTop100, setDataTop100] = useState<Array<DataShowCase>>();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            getShowCaseHome.getAll().then((res:any) => {
                setDataShowCase(res.data.data)
                setIsLoading(false);
            })
        }, 200)
        setTimeout(() => {
            getTopicEventHome.getAll().then((res:any) => {
                setDataTopicEvent(res.data);
                setIsLoading(false);
            })
        }, 200)
        getNewReleases.getAll().then((res:any) => {
            setDataNewReleases(res.data)
        })
        getRankingHome.getAll().then((res:any) => {
            setDataRanking(res.data);
        })
        getListTopic.getAll().then((res:any) => {
            setDataListTopic(res.data.data)
        })
        getTop100.getAll().then((res:any) => {
            setDataTop100(res.data.top100)
        })
            .catch((err:any) => {
                console.log(err.message)
            })
    }, [])
    return(
        <Box sx={{ width: '99%'}}>
            {isLoading ? <SkeletonSlide /> :
                <Slide
                    dataSlide={dataShowCase?.map(item => {
                        return {
                            title: item?.title,
                            key: item?.key,
                            thumbnail: item?.thumbnail,
                            url: item?.url,
                            order: item?.order,
                            imageUrl: item?.imageUrl,
                            description: item?.description,
                        }
                    })}
                />
            }
            {isLoading ? <SkeletonSlideShow /> : <>
                {dataTopicEvent?.slice(0,3)?.map((item:any, index:any) => {
                    return(
                        <Box key={index}>
                            <SlideShow
                                groupName={item?.groupName}
                                dataSlide = {item?.listPlaylist?.map((items:any) => {
                                    return {
                                        title: items?.title,
                                        key: items?.key,
                                        thumbnail: items?.thumbnail
                                    }
                                })}
                                pathnameUrl="playlist"
                                pathnameSlug="slugPlaylist"
                            />
                        </Box>
                    );
                })}</>}
            <NewReleases
                title="Mới phát hành"
                dataSlide = {dataNewReleases?.map((items:any) => {
                    return {
                        title: items?.title,
                        key: items?.key,
                        thumbnail: items?.thumbnail,
                        dateCreate: items?.dateCreate,
                        dateRelease: items?.dateRelease,
                        dataArtists: items?.artists.map((item:any) => {
                            return {
                                artistId: item?.artistId,
                                imageUrl: item?.imageUrl,
                                name: item?.name,
                                shortLink: item?.shortLink,
                            }
                        })
                    }
                })}
            />
            <RankingHome
                title="NCT RealTime"
                dataSlide = {dataRanking?.map((items:any) => {
                    return {
                        title: items?.title,
                        key: items?.key,
                        thumbnail: items?.thumbnail,
                        dateCreate: '04:02',
                        dateRelease: '00:00',
                        highestPosition: items?.highestPosition,
                        dataArtists: items?.artists.map((item:any) => {
                            return {
                                artistId: item?.artistId,
                                imageUrl: item?.imageUrl,
                                name: item?.name,
                                shortLink: item?.shortLink,
                            }
                        })
                    }
                })}
            />
            <SlideShow
                groupName="Chủ đề HOT"
                dataSlide = {dataListTopic?.map((items:any) => {
                    return {
                        title: items?.title,
                        key: items?.key,
                        thumbnail: items?.thumbnail,
                        url: "",
                        description: "",
                        order: "",
                        imageUrl:""
                    }
                })}
                pathnameUrl="topic"
                pathnameSlug="slugTopic"
            />
            <SlideShow
                groupName="Top 100"
                dataSlide = {dataTop100?.map((items:any) => {
                    return {
                        title: items?.title,
                        key: items?.key,
                        thumbnail: items?.thumbnail,
                        url: "",
                        description: "",
                        order: "",
                        imageUrl:""
                    }
                })}
                pathnameUrl="top100"
                pathnameSlug="slugTop100"
            />
            <PlayMusic keySong=""/>
        </Box>
    );
}
export default Home;