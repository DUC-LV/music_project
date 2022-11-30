import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { Box } from "theme-ui";
import Slide from "../components/Slide";
import getShowCaseHome from "../service/getShowCaseHome";
import { DataShowCase } from "../untils";

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
    const [dataShowCase, setDataShowCase] = useState<Array<DataShowCase>>()
    useEffect(() => {
        getShowCaseHome.getAll().then((res:any) => {
            setDataShowCase(res.data.data)
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
        </Box>
    );
}
export default Home;