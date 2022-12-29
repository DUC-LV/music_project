import React from "react";
import { Image, Flex, Text } from "theme-ui";
interface Artist{
    name: string;
}
interface DataContentSong {
    image: string | undefined;
    title: string | undefined;
    artists: Artist[] | undefined;
}

const ContentSong = ({ image, title, artists }: DataContentSong) => {
    return(
        <Flex
            sx={{
                width: '100%',
                height: '75%',
                justifyContent: 'center',
            }}
        >
            <Flex
                sx={{
                    width: '100%',
                    height: '100%',
                    marginX: '24px',
                }}
            >
                <Flex
                    sx={{
                        width: '100%',
                        height: '46%',
                        borderRadius: '4px',
                        // background: 'rgba(244,246,248,0.02)',
                        mt: '16px',
                        py: '12px',
                        flexDirection: 'column',
                    }}
                >
                    <Image
                        alt=""
                        src={image ? image : 'https://avatar-ex-swe.nixcdn.com/song/2022/11/21/4/f/d/3/1669004664657_300.jpg'}
                        sx={{
                            height: '240px',
                            width: '240px',
                            margin: '0 auto',
                            borderRadius: '6px',
                        }}
                    />
                    <Text
                        as="h5"
                        sx={{
                            color: 'rgba(244,246,248,0.88)',
                            margin: '6px 15.5px 6px 15.5px',
                            cursor: 'pointer',
                            ":hover": {
                                color: '#2daaed',
                            }
                        }}
                    >{title}</Text>
                    <Flex>
                        {artists?.map((item:any, index:any) => {
                            return(
                                <Text
                                    key={index}
                                    as="h5"
                                    sx={{
                                        marginLeft: '15.5px',
                                        color: 'rgba(244,246,248,0.5)',
                                        cursor: 'pointer',
                                        ":hover": {
                                            color: '#2daaed',
                                        }
                                    }}
                                >{item?.name}</Text>
                            );
                        })}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
export default ContentSong;