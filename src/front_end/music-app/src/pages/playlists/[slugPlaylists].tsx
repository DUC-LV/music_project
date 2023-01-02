import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box } from "theme-ui";
import getCategoryPlaylist from "../../service/getCategoryPlaylist";
import ListOfShare from "../../components/ListOfShare";
import Menu from "../../components/Menu";
import { LoadingCSS } from "../../components/SkeletonLoading";
import PlayMusic from "../../components/PlayMusic";
interface  DataPlaylist{
    thumbnail: string | undefined;
    title: string | undefined;
    name: string | undefined;
    artists: Array<DataPlaylist> | undefined;
    key: string | undefined;
    dateModify: string | undefined;
}

const CategoryPlayList = () => {
    const router = useRouter();
    const [dataPlaylist, setDataPlaylist] = useState<Array<DataPlaylist>>();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if(router.query.slugPlaylists){
            setTimeout(() => {
                getCategoryPlaylist.getAll(String(router.query.slugPlaylists)).then(res => {
                    setDataPlaylist(res.data.data)
                    setIsLoading(false);
                })
            }, 200)
        }
    }, [router.query.slugPlaylists])
    
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
                dataListOfShare={dataPlaylist?.map(item => {
                    return {
                        image: item?.thumbnail,
                        title: item?.title,
                        nameArtist: item?.artists?.[0]?.name,
                        key: item?.key,
                    }
                })}
                url="playlist/[slugPlaylist]"
            />
            </>}
            <PlayMusic keySong="" />
        </Box>
    );
}
export default CategoryPlayList;