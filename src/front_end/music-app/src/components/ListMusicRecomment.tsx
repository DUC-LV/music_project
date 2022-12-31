import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image } from "theme-ui";
import getDetailSong from "../service/getDetailSong";
import { BiChevronDown } from "react-icons/bi";
import { useRouter } from "next/router";
import getPlaylistDetail from "../service/getPlaylistDetail";
interface KeyMusic {
    keySong: string | undefined;
}
interface Artist{
    name: string;
}
interface DataPlaying {
    thumbnail: string | undefined;
    title: string | undefined;
    artists: Artist[] | undefined;
}

export const Playing = ({ thumbnail, title, artists }: DataPlaying) => {
    return(
        <Box
            sx={{
                width: '100%'
            }}
        >
            <Flex sx={{ padding: '26px 24px 0px', justifyContent: 'space-between'}}>
                <Text
                    sx={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: 'rgba(244,246,248,0.5)',
                    }}
                >Đang phát</Text>
                <Box>
                    <BiChevronDown style={{ height: '25px', width: '25px', color: 'rgba(244,246,248,0.5)' }}/>
                </Box>
            </Flex>
            <Flex sx={{ padding: '10px 24px', alignItems: 'center'}}>
                <Box>
                    <Image
                        alt=""
                        src={thumbnail}
                        sx={{
                            height: '40px',
                            width: '40px',
                            borderRadius: '4px'
                        }}
                    />
                </Box>
                <Box sx={{ ml: '10px'}}>
                    <Text
                        sx={{
                            fontSize: '14px',
                            fontWeight: '500',
                            color: 'rgba(244,246,248,0.88)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            lineHeight: '20px',
                        }}
                    >{title}</Text>
                    <Flex>
                        {artists?.map((item:any, index:any) => {
                            return(
                                <Text
                                    sx={{
                                        fontSize: '13px',
                                        fontWeight: '400',
                                        color: 'rgba(244,246,248,0.5)',
                                        lineHeight: '18px',
                                    }}
                                    key={index}
                                >{item?.name}</Text>
                            );
                        })}
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
interface DataList {
    title: string | undefined;
    artists: Artist[] | undefined;
}
export const ListMusic = ({keySong}: KeyMusic) => {
    const router = useRouter();
    const [list, setList] = useState<Array<DataList>>();
    useEffect(() => {
        if(router.query.key){
            getPlaylistDetail.getAll(String(router.query.key)).then(res => {
                setList(res.data.song)
            })
        }
    }, [router.query.key])
    return(
        <Box
            sx={{
                background: 'rgba(244,246,248,0.02)',
                height: '76%',
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                    display: 'none'
                },
            }}
        >
            <Box sx={{padding: '16px 24px'}}>
                <Text
                    sx={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: 'rgba(244,246,248,0.5)',
                    }}
                >Danh sách bài hát</Text>
            </Box>
            <Flex
                sx={{
                    height: '2px',
                    width: '85%',
                    background: 'rgba(244,246,248,0.05)',
                    marginX: '24px',
                }}
            ></Flex>
            <Box sx={{ mt: '2px'}}>
                {list?.map((item:any, index:any) => {
                    return(
                        <Flex
                            key={index}
                            sx={{
                                height: '60px',
                                width: '100%',
                                cursor: 'pointer',
                                ":hover": {
                                    background: 'rgba(244,246,248,0.02)'
                                },
                                flexDirection: 'column',
                                background: `${item.key == keySong ? 'rgba(244,246,248,0.05)' : ''}`,
                            }}
                            onClick={() => keySong=item?.key}
                        >
                            <Text
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: 'rgba(244,246,248,0.88)',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    lineHeight: '20px',
                                    marginLeft: '24px',
                                    marginTop: '10px'
                                }}
                            >{item?.title}</Text>
                            <Flex>
                                {item?.artists.map((item:any, index:any) => {
                                    return(
                                        <Text
                                            key={index}
                                            sx={{
                                                fontSize: '13px',
                                                fontWeight: '400',
                                                color: 'rgba(244,246,248,0.5)',
                                                lineHeight: '18px',
                                                marginLeft: '24px'
                                            }}
                                        >{item?.name}</Text>
                                    );
                                })}
                            </Flex>
                        </Flex>
                    )
                })}
            </Box>
        </Box>
    );
}
const ListMusicRecomment = ({ keySong }: KeyMusic) => {
    const [dataPlaying, setDataPlaying] = useState<DataPlaying>();
    useEffect(() => {
        if(keySong){
            getDetailSong.getAll(keySong).then((res:any) => {
                setDataPlaying(res.data);
            })
        }
    }, [keySong])
    return(
        <Box
            sx={{
                width: '100%',
                height: '75%',
            }}
        >
            <Playing
                thumbnail={dataPlaying?.thumbnail}
                title = {dataPlaying?.title}
                artists={dataPlaying?.artists?.map(item => {
                    return{
                        name: item?.name
                    }
                })}
            />
            <ListMusic keySong={keySong}/>
        </Box>
    );
}
export default ListMusicRecomment;