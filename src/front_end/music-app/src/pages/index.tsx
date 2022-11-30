import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { Box } from "theme-ui";
import Slide from "../components/Slide";
import SlideShow from "../components/SlideShow";
import getShowCaseHome from "../service/getShowCaseHome";
import getTopicEventHome from "../service/getTopicEventHome";
import { DataShowCase, DataTopicEvent } from "../untils";

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
    const [dataTopicEvent, setDataTopicEvent] = useState<Array<DataTopicEvent>>()
    useEffect(() => {
        getShowCaseHome.getAll().then((res:any) => {
            setDataShowCase(res.data.data)
        })
        getTopicEventHome.getAll().then((res:any) => {
            console.log(res.data)
            setDataTopicEvent(res.data);
        })
        .catch((err:any) => {
            console.log(err.message)
        })
    }, [])
    return(
        <Box>
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
        </Box>
    );
}
export default Home;