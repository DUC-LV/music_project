import React, { useCallback, useState } from "react";
import { Box, Flex, Image } from "theme-ui";
import { linkLogo } from "../untils";
import { BsSearch, BsHouseFill, BsArrowDownShort, BsArrowUpShort, BsHeadset } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { TbHeartHandshake } from "react-icons/tb";

const Header = () => {
    const categories  = [
        {
            id: 1,
            name: 'Tìm kiếm',
            icon: <BsSearch />,
            link: '/search'
        },
        {
            id: 2,
            name: 'Trang chủ',
            icon: <BsHouseFill />,
            link: '/'
        },
    ]
    const categoriesDiscover  = [
        {
            id: 1,
            name: 'Bài hát',
            link: '/'
        },
        {
            id: 2,
            name: 'Playlist',
            link: '/'
        },
        {
            id: 3,
            name: 'Video',
            link: '/'
        },
        {
            id: 4,
            name: 'Nghệ sĩ',
            link: '/'
        },
    ]
    const [clickDiscover, setClickDiscover] = useState(true);
    const handleClickDiscover = useCallback(() => {
        setClickDiscover(true)
    }, [])
    const categoriesListenToday = [
        {
            id: 1,
            name: 'Chủ đề',
            link: '/'
        },
        {
            id: 2,
            name: 'Tuyển tập',
            link: '/'
        },
        {
            id: 3,
            name: 'Top 100',
            link: '/'
        },
    ]
    const [clickListenToday, setClickListenToday] = useState(true);
    const handleClickListenToday = useCallback(() => {
        setClickListenToday(false)
    }, [])
    const listMenu = [
        {
            id: 1,
            name: 'BXH NCT',
            icon: <BiBarChart />,
            link: '/search'
        },
        {
            id: 2,
            name: 'Music 4U',
            icon: <TbHeartHandshake />,
            link: '/'
        },
    ]
    return(
        <Box
            sx={{
                width: '200px',
                height: '100%',
                borderRight: '1px solid #28313b',
                position: 'fixed',
                left: '0',
            }}
        >
            <Flex>
                <Image
                    alt=""
                    src={linkLogo}
                    sx={{
                        margin: '20px auto',
                        width: '180px',
                        borderRadius: '10px',
                    }}
                />
            </Flex>
            <Flex
                sx={{
                    justifyContent: 'center',
                    height: '60px',
                    background: '#212a35',
                    alignItems: 'center',
                }}
            >
                <Box as='h5' sx={{ color: 'rgba(244,246,248,0.88)', fontSize: '15px',cursor: 'pointer'}}>Đăng nhập</Box>&ensp;
                <Box sx={{ color: 'rgba(244,246,248,0.88)'}}>|</Box>&ensp;
                <Box as='h5' sx={{ color: 'rgba(244,246,248,0.88)', fontSize: '15px', cursor: 'pointer'}}>Đăng kí</Box>
            </Flex>
            <Flex sx={{ flexDirection: 'column', margin: '20px 20px auto'}}>
                {categories.map(item => {
                    return(
                        <Flex 
                            key={item.id}
                            sx={{
                                marginTop: '20px'
                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    top: "2px",
                                    color: "white",
                                }}
                            >{item.icon}</Box>
                            <Box as='h5' sx={{ color: 'rgba(244,246,248,0.88)', fontSize: '15px',cursor: 'pointer', marginLeft: '15px'}}>{item.name}</Box>
                        </Flex>
                    );
                })}
                <Flex sx={{ marginTop: '20px', position: 'relative'}}>
                    <Box
                        sx={{
                            position: "relative",
                            top: "1px",
                            color: "white",
                        }}
                    >
                        <AiOutlineCompass />
                    </Box>
                    <Box as='h5' sx={{ color: 'rgba(244,246,248,0.88)', fontSize: '15px',cursor: 'pointer', marginLeft: '15px'}} onClick={handleClickDiscover}>Khám phá</Box>
                    {clickDiscover ? 
                        <Box>
                            <BsArrowUpShort style= {{ position: "relative", top: "2px", color: 'white', marginLeft: '37px'}}/>
                        </Box>:
                        <Box>
                            <BsArrowDownShort style= {{ position: "relative", top: "2px", color: 'white', marginLeft: '37px'}}/>
                        </Box>}
                    {clickDiscover && <Flex sx={{ position: 'absolute', flexDirection: 'column', marginTop: '20px'}}>
                        {categoriesDiscover.map(item => {
                            return(
                                <Flex key={item.id}>
                                    <Box as='h6' sx={{ color: 'rgba(244,246,248,0.88)', fontSize: '13px',cursor: 'pointer', marginTop: '20px', marginLeft: '40px'}}>{item.name}</Box>
                                </Flex>
                            );
                        })}
                    </Flex>}
                </Flex>
                <Flex sx={{ marginTop: '170px', position: 'relative'}}>
                    <Box
                        sx={{
                            position: "relative",
                            top: "1px",
                            color: "white",
                        }}
                    >
                        <BsHeadset />
                    </Box>
                    <Box as='h5' sx={{ color: 'rgba(244,246,248,0.88)', fontSize: '15px',cursor: 'pointer', marginLeft: '15px'}} onClick={handleClickListenToday}>Topic hôm nay</Box>
                    {clickListenToday ? 
                        <Box>
                            <BsArrowDownShort style= {{ position: "relative", top: "2px", color: 'white', marginLeft: '5px'}}/>
                        </Box>:
                        <Box>
                            <BsArrowUpShort style= {{ position: "relative", top: "2px", color: 'white',  marginLeft: '5px'}}/>
                        </Box>}
                    {clickListenToday && <Flex sx={{ position: 'absolute', flexDirection: 'column', marginTop: '20px'}}>
                        {categoriesListenToday.map(item => {
                            return(
                                <Flex key={item.id}>
                                    <Box as='h6' sx={{ color: 'rgba(244,246,248,0.88)', fontSize: '13px',cursor: 'pointer', marginTop: '20px', marginLeft: '40px'}}>{item.name}</Box>
                                </Flex>
                            );
                        })}
                    </Flex>}
                </Flex>
                <Flex sx={{ mt: '120px', flexDirection: 'column'}}>
                    {listMenu.map(item => {
                        return(
                            <Flex 
                                key={item.id}
                                sx={{
                                    marginTop: '20px'
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        top: "2px",
                                        color: "white",
                                    }}
                                >{item.icon}</Box>
                                <Box as='h5' sx={{ color: 'rgba(244,246,248,0.88)', fontSize: '15px',cursor: 'pointer', marginLeft: '15px'}}>{item.name}</Box>
                            </Flex>
                        );
                    })}
                </Flex>
            </Flex>
        </Box>
    )
}
export default Header;