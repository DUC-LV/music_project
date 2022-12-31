import React, { useState, useEffect } from "react";
import {Box, Flex, Text} from "theme-ui";
import { ImPrevious, ImPause, ImPlay2, ImNext } from "react-icons/im";
import { FaRandom } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import Typewriter from "typewriter-effect";
interface LinkStreamSong {
    link: string | undefined;
    title: string | undefined;
    duration: string | undefined;
}
interface PlayButton {
    isPlay: boolean | undefined;
    onClickMusic: () => void;
}
const PrevButton = () => {
    return(
        <Box>
            <ImPrevious
                style={{
                    height: '20px',
                    width: '20px',
                    cursor: 'pointer',
                    color: 'rgba(244,246,248,0.5)'
                }}
            />
        </Box>
    );
}
const PlayButton = ({ isPlay, onClickMusic }: PlayButton) => {
    return(
        <Box>
            { isPlay ? (
                <ImPause
                    style={{
                        height: '35px',
                        width: '35px',
                        cursor: 'pointer',
                        color: 'rgba(244,246,248,0.5)'
                    }}
                    onClick={onClickMusic}
                />
            ):(
                <ImPlay2
                    style={{
                        height: '35px',
                        width: '35px',
                        cursor: 'pointer',
                        color: 'rgba(244,246,248,0.5)'
                    }}
                    onClick={onClickMusic}
                />
            )
            }
        </Box>
    );
}
const NextButton = () => {
    return(
        <Box>
            <ImNext
                style={{
                    height: '20px',
                    width: '20px',
                    cursor: 'pointer',
                    color: 'rgba(244,246,248,0.5)'
                }}
            />
        </Box>
    );
}
const RanDomPlayMusic = () => {
    const [click, setClick] = useState(true);
    return(
        <Box>
            { click ? (
                <FaRandom
                    style={{
                        height: '15px',
                        width: '15px',
                        cursor: 'pointer',
                        color: 'rgba(244,246,248,0.5)'
                    }}
                    onClick={() => setClick(!click)}
                />
            ):(
                <FaRandom
                    style={{
                        height: '15px',
                        width: '15px',
                        cursor: 'pointer',
                        color: '#2daaed'
                    }}
                    onClick={() => setClick(!click)}
                />
            )
            }
        </Box>
    )
}
const RepeatMusic = () => {
    const [click, setClick] = useState(true);
    return(
        <Box>
            { click ? (
                <BiRepost
                    style={{
                        height: '20px',
                        width: '20px',
                        cursor: 'pointer',
                        color: 'rgba(244,246,248,0.5)'
                    }}
                    onClick={() => setClick(!click)}
                />
            ):(
                <BiRepost
                    style={{
                        height: '20px',
                        width: '20px',
                        cursor: 'pointer',
                        color: '#2daaed'
                    }}
                    onClick={() => setClick(!click)}
                />
            )
            }
        </Box>
    );
}
const AudioControlBar = ({ link, title, duration }: LinkStreamSong) => {
    const [playPause, setPlayPause] = useState(false);
    const [audioDom, setAdudioDom] = useState<HTMLAudioElement | null>(null);
    useEffect(() => {
        if (audioDom && playPause === true) {
            audioDom.play();
        }
        if (audioDom && playPause === false) {
            audioDom.pause();
        }

    }, [audioDom, playPause]);
    const IsplayMusic = () => {
        setPlayPause(!playPause);
    };
    return(
        <Box>
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
            >
                <Typewriter
                    options={{
                        strings: title,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Text>
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
                <Text sx={{ fontSize: '13px', color: 'rgba(244,246,248,0.88)'}}>{duration ? duration : '04:31'}</Text>
            </Flex>
            <Flex
                sx={{
                    alignItems: 'center',
                    mt: '10px',
                    height: '50px',
                    width: '100%',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ margin: '15px'}}>
                    <RanDomPlayMusic />
                </Box>
                <Box sx={{ margin: '15px'}}>
                    <PrevButton />
                </Box>
                <audio
                    ref={(element) => setAdudioDom(element)}
                    src={link}
                    autoPlay
                ></audio>
                <Box sx={{ margin: '15px'}}>
                    <PlayButton
                        isPlay={playPause}
                        onClickMusic={IsplayMusic}
                    />
                </Box>
                <Box sx={{ margin: '15px'}}>
                    <NextButton />
                </Box>
                <Box sx={{ margin: '15px'}}>
                    <RepeatMusic />
                </Box>
            </Flex>
        </Box>
    );
}
export default AudioControlBar;