import React, { useState } from "react";
import { Box, Flex } from "theme-ui";
import { ImPrevious, ImPause, ImPlay2, ImNext } from "react-icons/im";
import { FaRandom } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";

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
const PlayButton = () => {
    const [isPlay, setIsPlay] = useState(false)
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
                    onClick={() => setIsPlay(!isPlay)}
                />
            ):(
                <ImPlay2
                    style={{
                        height: '35px',
                        width: '35px',
                        cursor: 'pointer',
                        color: 'rgba(244,246,248,0.5)'
                    }}
                    onClick={() => setIsPlay(!isPlay)}
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
const AudioControlBar = () => {
    return(
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
            <Box sx={{ margin: '15px'}}>
                <PlayButton />
            </Box>
            <Box sx={{ margin: '15px'}}>
                <NextButton />
            </Box>
            <Box sx={{ margin: '15px'}}>
                <RepeatMusic />
            </Box>
        </Flex>
    );
}
export default AudioControlBar;