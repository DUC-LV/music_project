import React, { useCallback, useEffect, useState } from "react";
import { Box, Flex, Image } from "theme-ui";
import { linkLogo } from "../untils";
import { BsSearch, BsHouseFill, BsArrowDownShort, BsArrowUpShort, BsHeadset } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { TbHeartHandshake } from "react-icons/tb";
import { useRouter } from "next/router";

const Header = () => {
    const categories  = [
        {
            id: 1,
            name: 'Tìm kiếm',
            icon: <BsSearch />,
            link: '/search',
            color: 'rgba(244,246,248,0.9)',
        },
        {
            id: 2,
            name: 'Trang chủ',
            icon: <BsHouseFill />,
            link: '/',
            color: 'rgba(244,246,248,0.9)',
        },
    ]
    const categoriesDiscover  = [
        {
            id: 1,
            name: 'Bài hát',
            link: '/musics/moi-hot',
            color: 'rgba(244,246,248,0.9)',
        },
        {
            id: 2,
            name: 'Playlist',
            link: '/playlists/moi-hot',
            color: 'rgba(244,246,248,0.9)',
        },
        {
            id: 3,
            name: 'Video',
            link: '/videos/moi-hot',
            color: 'rgba(244,246,248,0.9)',
        },
        {
            id: 4,
            name: 'Nghệ sĩ',
            link: '/artist',
            color: 'rgba(244,246,248,0.9)',
        },
    ]
    const [clickDiscover, setClickDiscover] = useState(true);
    const handleClickDiscover = useCallback(() => {
        setClickDiscover(!clickDiscover)
    }, [clickDiscover])
    const categoriesListenToday = [
        {
            id: 1,
            name: 'Chủ đề',
            link: '/topic',
            color: 'rgba(244,246,248,0.9)',
        },
        {
            id: 2,
            name: 'Tuyển tập',
            link: '/collection',
            color: 'rgba(244,246,248,0.9)',
        },
        {
            id: 3,
            name: 'Top 100',
            link: '/top100',
            color: 'rgba(244,246,248,0.9)',
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
            link: '/rank',
            color: 'rgba(244,246,248,0.9)',
        },
        {
            id: 2,
            name: 'Music 4U',
            icon: <TbHeartHandshake />,
            link: '/',
            color: 'rgba(244,246,248,0.9)',
        },
    ]
    const router = useRouter();
    return(
        <Box
            sx={{
                width: '200px',
                height: '100%',
                borderRight: '1px solid #28313b',
                position: 'fixed',
                left: '0',
                top: '0',
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
                <Box as='h5' sx={{ color: 'rgba(244,246,248,0.9)', fontSize: '15px',cursor: 'pointer', ":hover":{ color: '#c2c6ca'}}}>Đăng nhập</Box>&ensp;
                <Box sx={{ color: 'rgba(244,246,248,0.88)'}}>|</Box>&ensp;
                <Box as='h5' sx={{ color: 'rgba(244,246,248,0.88)', fontSize: '15px', cursor: 'pointer',":hover":{ color: '#c2c6ca'} }}>Đăng kí</Box>
            </Flex>
            <Flex sx={{ flexDirection: 'column', margin: '20px 20px auto'}}>
                {categories.map(item => {
                    if(router.pathname == item?.link){
                        item.color = '#28b1f4';
                    }
                    return(
                        <Flex 
                            key={item.id}
                            sx={{
                                marginTop: '20px'
                            }}
                            onClick={() => {
                                router.push(item?.link)
                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    top: "2px",
                                    color: item.color,
                                }}
                            >{item.icon}</Box>
                            <Box as='h5' sx={{ color: item.color, fontSize: '15px',cursor: 'pointer', marginLeft: '15px'}}>{item.name}</Box>
                        </Flex>
                    );
                })}
                <Flex sx={{ marginTop: '20px', position: 'relative'}}>
                    <Box
                        sx={{
                            position: "relative",
                            top: "1px",
                            color: "rgba(244,246,248,0.9)",
                        }}
                    >
                        <AiOutlineCompass />
                    </Box>
                    <Box as='h5' sx={{ color: 'rgba(244,246,248,0.88)', fontSize: '15px',cursor: 'pointer', marginLeft: '15px'}} onClick={handleClickDiscover}>Khám phá</Box>
                    {clickDiscover ? 
                        <Box>
                            <BsArrowUpShort style= {{ position: "relative", top: "2px", color: 'rgba(244,246,248,0.9)', marginLeft: '37px'}}/>
                        </Box>:
                        <Box>
                            <BsArrowDownShort style= {{ position: "relative", top: "2px", color: 'rgba(244,246,248,0.9)', marginLeft: '37px'}}/>
                        </Box>}
                    {clickDiscover && <Flex sx={{ position: 'absolute', flexDirection: 'column', marginTop: '20px'}}>
                        {categoriesDiscover.map(item => {
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            if(router.asPath == item.link){
                                item.color = '#28b1f4';
                            }
                            return(
                                <Flex key={item.id} onClick={() => router.push(item?.link)}>
                                    <Box as='h6' sx={{ color: item.color , fontSize: '13px',cursor: 'pointer', marginTop: '20px', marginLeft: '40px'}}>{item.name}</Box>
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
                            color: "rgba(244,246,248,0.9)",
                        }}
                    >
                        <BsHeadset />
                    </Box>
                    <Box as='h5' sx={{ color: 'rgba(244,246,248,0.88)', fontSize: '15px',cursor: 'pointer', marginLeft: '15px'}} onClick={handleClickListenToday}>Topic hôm nay</Box>
                    {clickListenToday ? 
                        <Box>
                            <BsArrowDownShort style= {{ position: "relative", top: "2px", color: 'rgba(244,246,248,0.9)', marginLeft: '5px'}}/>
                        </Box>:
                        <Box>
                            <BsArrowUpShort style= {{ position: "relative", top: "2px", color: 'rgba(244,246,248,0.9)',  marginLeft: '5px'}}/>
                        </Box>}
                    {clickListenToday && <Flex sx={{ position: 'absolute', flexDirection: 'column', marginTop: '20px'}}>
                        {categoriesListenToday.map(item => {
                            return(
                                <Flex key={item.id}>
                                    <Box as='h6' sx={{ color: 'rgba(244,246,248,0.88)', fontSize: '13px',cursor: 'pointer', marginTop: '20px', marginLeft: '40px', ":hover":{ color: '#c2c6ca'}}}>{item.name}</Box>
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
                                        color: "rgba(244,246,248,0.9)",
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