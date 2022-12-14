import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Text } from "theme-ui";
import getPlaylistDetail from "../../service/getPlaylistDetail";
export interface DataTags{
    name: string | undefined;
}
export interface DataHeaderPlaylist {
    title: string | undefined,
    thumbnail: string | undefined,
    dateModify: string | undefined,
    description: string | undefined,
    tags: DataTags[] | undefined,
}
export interface NameSong {
    name: string | undefined;
}
export interface DurationSong {
    duration: string | undefined;
}
interface DataListSong {
    name: NameSong[] | undefined,
    duration: DurationSong[] | undefined,
}
export const ListSonginPlayList = ({ name, duration }: DataListSong) => {
    return(
        <Box
            sx={{
                mt: '20px',
                ml: '30px',
            }}
        >
            <Text as="h2" sx={{ color: 'rgba(244,246,248,0.88)'}}>Danh sách bài hát</Text>
        </Box>
    );
}

export const HeaderPlayListDetail = ({ title, thumbnail, dateModify, description, tags }:DataHeaderPlaylist) => {
    return(
        <Flex>
            <Box
                sx={{
                    mt: '20px',
                    ml: '30px',
                    flex: 'none'
                }}
            >
                <Box
                    sx={{
                        height: '6px',
                        width: '60%',
                        background: 'rgba(244,246,248,0.05)',
                        ml: '20%',
                        borderRadius: '4px 4px 0px 0px'
                    }}
                ></Box>
                <Box
                    sx={{
                        height: '6px',
                        width: '80%',
                        background: 'rgba(244,246,248,0.05)',
                        ml: '10%',
                        borderRadius: '4px 4px 0px 0px'
                    }}
                ></Box>
                <Image
                    alt=""
                    src={thumbnail}
                    sx={{
                        height: '240px',
                        width: '240px',
                        borderRadius: '8px'
                    }}
                />
            </Box>
            <Box
                sx={{
                    ml: '30px',
                    mt: '30px'
                }}
            >
                <Text as="h3" sx={{ color: 'rgba(244,246,248,0.88)'}}>Playlist:&ensp;{title}</Text><br></br>
                <Text as="p" sx={{ color: 'rgba(244,246,248,0.5)'}}>Ngày Phát Hành:&ensp;{dateModify}</Text><br></br>
                <Text
                    as="p"
                    sx={{
                        color: 'rgba(244,246,248,0.5)',
                        width: '96%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'normal',
                    }}
                    >{description}
                </Text><br></br>
                <Flex>
                    <Text as="h5" sx={{ color: 'rgba(244,246,248,0.5)', fontSize: '14px'}}>Tags:</Text>
                    {tags?.slice(0,3)?.map((item:any, index:any) => {
                        return(
                            <Button
                                key={index}
                                sx={{
                                    color: 'rgba(244,246,248,0.5)',
                                    background: '#27313b',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    ml: '20px',
                                    fontSize: '14px',
                                    borderRadius: '5px 100px 10px 5px',
                                    ":hover": {
                                        color: '#2DAAED',
                                    }
                                }}
                                >{item?.name}
                            </Button>
                        );
                    })}
                </Flex>
            </Box>
        </Flex>
    );
}
const PlayListDetail = () => {
    const router = useRouter();
    const [dataHeaderPlaylist, setDataHeaderPlaylist] = useState<DataHeaderPlaylist>();
    useEffect(() => {
        if(router?.query?.key){
            getPlaylistDetail.getAll(String(router.query.key)).then(res => {
                setDataHeaderPlaylist(res.data)
            })
        }
    }, [router.query.key])
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
            <HeaderPlayListDetail
                title={dataHeaderPlaylist?.title}
                thumbnail={dataHeaderPlaylist?.thumbnail}
                dateModify={dataHeaderPlaylist?.dateModify}
                description={dataHeaderPlaylist?.description}
                tags={dataHeaderPlaylist?.tags?.map(item => {
                    return {
                        name: item?.name,
                    }
                })}
            />
            <ListSonginPlayList

            />
        </Box>
    );
}
export default PlayListDetail;