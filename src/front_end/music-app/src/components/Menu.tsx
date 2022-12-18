import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Flex, Text } from "theme-ui";

const Menu = () => {
    const categories = [
        {   
            index: 1,
            name: "Mới & Hot",
            url: "playlist-moi",
            color: 'rgba(244,246,248,0.9)',
        },
        {
            index: 2,
            name: "Việt Nam",
            url: "nhac-tre-moi",
            color: 'rgba(244,246,248,0.9)',
        },
        {
            index: 3,
            name: "Âu Mỹ",
            url: "pop-moi",
            color: 'rgba(244,246,248,0.9)',
        },
        {
            index: 4,
            name: "Châu Á",
            url: "nhac-han-moi",
            color: 'rgba(244,246,248,0.9)',
        },
    ]
    const router = useRouter();
    const [title, setTitle] = useState('Mới & Hot');
    useEffect(() => {
        if(router.query.slugPlaylists == 'playlist-moi'){
            setTitle('Mới & Hot')
        }
        if(router.query.slugPlaylists == 'nhac-tre-moi'){
            setTitle('Việt Nam')
        }
        if(router.query.slugPlaylists == 'pop-moi'){
            setTitle('Âu Mỹ')
        }
        if(router.query.slugPlaylists == 'nhac-han-moi'){
            setTitle('Châu Á')
        }
    }, [router.query.slugPlaylists])
    return(
        <><Flex
            sx={{
                justifyContent: 'center',
                borderBottom: '1px solid #28313b',
            }}
        >
            {categories?.map((item: any) => {
                if (item?.url == `${router.query.slugPlaylists}`) {
                    item.color = '#28b1f4';
                }
                return (
                    <Flex
                        key={item.index}
                        onClick={() => router.push(item.url)}
                    >
                        <Text as="h4" sx={{ margin: '30px 40px', cursor: 'pointer', color: item.color }}>{item.name}</Text>
                    </Flex>
                );
            })}
        </Flex><Text
            as="h3"
            sx={{
                margin: '20px',
                color: '#c5c9cd',
            }}
        >{title}</Text></>
    );
}
export default Menu;