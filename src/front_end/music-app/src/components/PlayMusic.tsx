import React, {useEffect} from "react";
import { Box } from "theme-ui";
import getDetailSong from "../service/getDetailSong";
interface KeyMusic {
    keySong: string | undefined;
}
const PlayMusic = ({ keySong }: KeyMusic) => {
    useEffect(() => {
        if(keySong){
            getDetailSong.getAll(String(keySong)).then(res => {
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
                right: '0',
                "@media only screen and (max-width: 1260px)": {
                    display: 'none'
                }
            }}
        ></Box>
    );
}
export default PlayMusic;