import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, Image, Text } from "theme-ui";
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
export interface DataArtist {
    nameArtist: string | undefined;
}
export interface NameSong {
    name: string | undefined;
    duration: string | undefined;
    artist: DataArtist[] | undefined;
    image: string | undefined;
}

interface DataListSong {
    song: NameSong[] | undefined,
}
export const ListSonginPlayList = ({ song }: DataListSong) => {
    return(
        <Box
            sx={{
                ml: '30px',
                mr: '30px',
                mt: '30px'
            }}
        >
            <Text as="h2" sx={{ color: 'rgba(244,246,248,0.88)'}}>Danh sách bài hát</Text>
            <Box
                sx={{
                    background: "#212a35",
                    borderRadius: '4px', height: '35px'
                }}
            >
                <Grid
                    sx={{
                        gridTemplateColumns: ['3','3.5fr 2fr 1.3fr'],
                        mt: '20px',
                    }}
                >
                    <Text
                        as="h3"
                        sx={{
                            ml: '20px',
                            color: '#dadde0',
                            my: '7px',
                        }}>
                        Tiêu Đề
                    </Text>
                    <Text
                        as="h3"
                        sx={{ 
                            color: '#dadde0',
                            my: '7px'
                        }}>
                        Nghệ Sĩ
                    </Text>
                    <Text
                        as="h3"
                        sx={{
                            textAlign: 'center',
                            color: '#dadde0',
                            my: '7px'
                        }}>
                        Thời Gian
                    </Text>
                </Grid>
            </Box>
            {song?.map((item:any, index:any) => {
                return(
                    <Box
                        key={index}
                        sx={{
                            background: '#212a35',
                            borderRadius: '4px',
                            height: '40px',
                            cursor: 'pointer',
                            ":hover": {
                                background: 'rgba(244,246,248,0.05)'
                            }
                            }}
                        >
                        <Grid
                            sx={{
                                gridTemplateColumns: ['3','3.5fr 2fr 1.3fr'],
                                mt: '5px',
                                backgroundColor: '',
                            }}
                        >
                            <Flex>
                                {/* <Image
                                    alt=""
                                    src={item?.image}
                                    sx={{
                                        height: '20px',
                                        width: '40px'
                                    }}
                                /> */}
                                <Text
                                    sx={{
                                        marginX: '20px',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: "ellipsis",
                                        color: 'rgba(244,246,248,0.88)',
                                        fontSize: '14px',
                                        my: '10px',
                                        fontWeight: '700'
                                    }}>
                                    {item?.name}
                                </Text>
                            </Flex>
                            <Text
                                sx={{
                                    my: '10px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow:'ellipsis',
                                    fontWeight: '700'
                                }}
                            >
                                {item?.artist?.map((items:any, index :any) => {
                                    return(
                                        <Text key={index}
                                            sx={{
                                                fontSize: '14px',
                                                color: 'rgba(244,246,248,0.5)',
                                            }}>
                                            {items?.nameArtist}&emsp;
                                        </Text>
                                    );
                                })}
                            </Text>
                            <Text 
                                sx={{
                                    textAlign: 'center', 
                                    fontSize: '14px', 
                                    color: 'rgba(244,246,248,0.5)', 
                                    my: '10px',
                                    fontWeight: '700'
                                }}>
                                {item?.duration}
                            </Text>
                        </Grid>
                    </Box>
                );
            })}
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
                <Flex
                    sx={{
                        "@media only screen and (max-width: 768px)": {
                            display: 'none'
                        }
                    }}
                >
                    <Text as="h5" sx={{ color: 'rgba(244,246,248,0.5)', fontSize: '14px'}}>Tags:</Text>
                    {tags?.slice(0,3)?.map((item:any, index:any) => {
                        return(
                            <Box
                                key={index}
                                sx={{
                                    color: 'rgba(244,246,248,0.5)',
                                    background: '#27313b',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    ml: '20px',
                                    fontSize: '14px',
                                    height: '30px',
                                    padding: '5px 10px',
                                    position: 'relative',
                                    bottom: '5px',
                                    borderRadius: '5px 100px 10px 5px',
                                    ":hover": {
                                        color: '#2DAAED',
                                    },
                                }}
                                >{item?.name}
                            </Box>
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
    const [dataSong, setDataSong] = useState<DataListSong>()
    useEffect(() => {
        if(router?.query?.key){
            getPlaylistDetail.getAll(String(router.query.key)).then(res => {
                setDataHeaderPlaylist(res.data)
                setDataSong(res.data)
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
                song={dataSong?.song?.map((item:any) => {
                    return{
                        name: item?.title,
                        duration: item?.duration,
                        image : item?.thumbnail,
                        artist: item?.artists?.map((items:any) => {
                            return {
                                nameArtist: items?.name,
                            }
                        }),
                    }
                })}
            />
        </Box>
    );
}
export default PlayListDetail;
