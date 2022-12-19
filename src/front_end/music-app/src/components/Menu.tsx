import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Flex, Text } from "theme-ui";

const Menu = () => {
    const categories = [
        {   
            index: 1,
            name: "Mới & Hot",
            url: "moi-hot",
            color: 'rgba(244,246,248,0.9)',
        },
        {
            index: 2,
            name: "Việt Nam",
            url: "viet-nam",
            color: 'rgba(244,246,248,0.9)',
        },
        {
            index: 3,
            name: "Âu Mỹ",
            url: "au-my",
            color: 'rgba(244,246,248,0.9)',
        },
        {
            index: 4,
            name: "Châu Á",
            url: "chau-a",
            color: 'rgba(244,246,248,0.9)',
        },
    ]
    const router = useRouter();
    const [title, setTitle] = useState('Mới & Hot');
    useEffect(() => {
        if(router.query.slugPlaylists == 'moi-hot' || router.query.slugMusics == 'moi-hot'){
            setTitle('Mới & Hot');
        }
        if(router.query.slugPlaylists == 'viet-nam' || router.query.slugMusics == 'viet-nam'){
            setTitle('Việt Nam');
        }
        if(router.query.slugPlaylists == 'au-my' || router.query.slugMusics == 'au-my'){
            setTitle('Âu Mỹ');
        }
        if(router.query.slugPlaylists == 'chau-a' || router.query.slugMusics == 'chau-a'){
            setTitle('Châu Á');
        }
    }, [router.query.slugMusics, router.query.slugPlaylists])
    return(
        <><Flex
            sx={{
                justifyContent: 'center',
                borderBottom: '1px solid #28313b',
            }}
        >
            {categories?.map((item: any) => {
                if (item?.url == `${router.query.slugPlaylists}` || item?.url == `${router.query.slugMusics}`) {
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
