import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box } from "theme-ui";
import ListOfShare from "../../components/ListOfShare";
import Menu from "../../components/Menu";
import { LoadingCSS } from "../../components/SkeletonLoading";
import getCategoryMusic from "../../service/getCategoryMusic";
interface  DataMusic{
    thumbnail: string | undefined;
    title: string | undefined;
    name: string | undefined;
    artists: Array<DataMusic> | undefined;
    key: string | undefined;
    dateModify: string | undefined;
}


const CategoryMusic = () => {
    const router = useRouter();
    const [dataMusic, setDataMusic] = useState<Array<DataMusic>>();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if(router.query.slugMusics){
            setTimeout(() => {
                getCategoryMusic.getAll(String(router.query.slugMusics)).then(res => {
                    setDataMusic(res.data.song)
                    setIsLoading(false)
                })
            }, 300)
        }
    }, [router.query.slugMusics])
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
            { isLoading ? <LoadingCSS /> : <>
            <ListOfShare
                dataListOfShare={dataMusic?.map(item => {
                    return {
                        image: item?.thumbnail,
                        title: item?.title,
                        nameArtist: item?.artists?.[0].name,
                        key: item?.key,
                        dateModify: item?.dateModify,
                    }
                })}
                url="music/[slugMusic]"
            />
            </>}
        </Box>
    );
}
export default CategoryMusic;