import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "theme-ui";
import getTypePlaylist from "../../service/getTypePlaylist";
import ListOfShare from "../../components/ListOfShare";
import Menu from "../../components/Menu";
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
    useEffect(() => {
        if(router.query.slugPlaylists){
            getTypePlaylist.getAll(String(router.query.slugPlaylists)).then(res => {
                setDataPlaylist(res.data.data)
            })
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
        </Box>
    );
}
export default CategoryPlayList;