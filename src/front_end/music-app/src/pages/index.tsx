import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { Box } from "theme-ui";
import NewReleases from "../components/NewReleases";
import RankingHome from "../components/RankHome";
import Slide from "../components/Slide";
import SlideShow from "../components/SlideShow";
import getNewReleases from "../service/getNewReleases";
import getRankingHome from "../service/getRankingHome";
import getShowCaseHome from "../service/getShowCaseHome";
import getTopicEventHome from "../service/getTopicEventHome";
import { DataRanking, DataShowCase, DataTopicEvent } from "../untils";

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
    const [dataRanking, setDataRanking] = useState<Array<DataRanking>>()
    useEffect(() => {
        getShowCaseHome.getAll().then((res:any) => {
            setDataShowCase(res.data.data)
        })
        getTopicEventHome.getAll().then((res:any) => {
            setDataTopicEvent(res.data);
        })
        getNewReleases.getAll().then((res:any) => {
            setDataNewReleases(res.data)
        })
        getRankingHome.getAll().then((res:any) => {
            console.log(res.data);
            setDataRanking(res.data);
        })
        .catch((err:any) => {
            console.log(err.message)
        })
    }, [])
    return(
        <Box sx={{ width: '99%'}}>
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
            {dataTopicEvent?.map((item:any, index:any) => {
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
                        />
                    </Box>
                );
            })}
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
        </Box>
    );
}
export default Home;