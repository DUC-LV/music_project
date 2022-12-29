import React, {useEffect, useState } from "react";
import { Box, Flex, Text } from "theme-ui";
import getDetailSong from "../service/getDetailSong";
import AudioControlBar from "./AudioControlBar";
import ContentSong from "./ContentSong";
import ListMusicRecomment from "./ListMusicRecomment";
interface KeyMusic {
    keySong: string | undefined;
}
interface Artist{
    name: string;
}
interface StreamUrls{
    quality: string | undefined;
    streamUrl: string | undefined;
}
export interface Song {
    title: string | undefined;
    thumbnail: string | undefined;
    duration: string | undefined;
    artists: Artist[];
    streamUrls: StreamUrls[];
}
const PlayMusic = ({ keySong }: KeyMusic, ) => {
    const [dataSong, setDataSong] = useState<Song>();
    const [show, setShow] = useState(true);
    const [txt, setTxt] = useState('')
    useEffect(() => {
        if(show == true){
            setTxt('Danh sách phát')
        }
        else if(show == false){
            setTxt('Đang phát')
        }
    }, [show])
    useEffect(() => {
        if(keySong){
            getDetailSong.getAll(String(keySong)).then(res => {
                setDataSong(res.data);
                console.log(res.data);
            })
        }
    }, [keySong])
    return(
        <Box
            sx={{
                width: '320px',
                height: '100%',
                borderLeft: '1px solid #28313b',
                position: 'fixed',
                top: '0px',
                right: '0',
                "@media only screen and (max-width: 1260px)": {
                    display: 'none'
                },
            }}
        >
            { show ?
                <ContentSong
                    image={dataSong?.thumbnail}
                    title = {dataSong?.title}
                    artists={dataSong?.artists.map((item:any) => {
                        return {
                            name: item?.name
                        }
                    })}
                />:
                <ListMusicRecomment />
            }
            <Flex
                sx={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Flex
                    onClick={() => {
                        setShow(!show);
                    }}
                    sx={{
                        height: '40px',
                        width: '168px',
                        background: 'rgba(244,246,248,0.02)',
                        borderRadius: '20px',
                        color: 'rgba(244,246,248,0.5)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        cursor: 'pointer',
                        fontSize: '13px',
                    }}
                >{txt}</Flex>
                <Box sx={{ mt: '30px'}}>
                    <Text
                        as="h5"
                        sx={{
                            color: 'rgba(244,246,248,0.88)',
                            textAlign: 'center',
                            cursor: 'pointer',
                            ":hover": {
                                color: '#2daaed',
                            }
                        }}
                    >{dataSong?.title}</Text>
                    <Flex sx={{ justifyContent: 'space-between', position: 'relative', marginX: '20px'}}>
                        <Text sx={{ fontSize: '13px', color: 'rgba(244,246,248,0.88)'}}>00:00</Text>
                        <Box
                            sx={{
                                height: '2px',
                                width: '70%',
                                background: 'rgba(244,246,248,0.05)',
                                position: 'absolute',
                                top: '10px',
                                left: '42px'
                            }}
                        ></Box>
                        <Text sx={{ fontSize: '13px', color: 'rgba(244,246,248,0.88)'}}>{dataSong?.duration ? dataSong?.duration : '04:31'}</Text>
                    </Flex>
                    <AudioControlBar />
                </Box>
            </Flex>
        </Box>
    );
}
export default PlayMusic;