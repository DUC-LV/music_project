import React from "react";
import { Grid, Box, Image, Text } from "theme-ui";
import { convertSlug } from "../untils";
import { useRouter } from "next/router";
export interface Data {
	image?: string;
	title?: string;
	nameArtist?: string;
	key?: string,
	dateModify?: string,
}
export interface DataList {
	dataListOfShare?: Data [];
}
const ListOfShare = ({dataListOfShare}: DataList) => {
	const router = useRouter();
    return(
        <Grid
			sx={{
				"@media only screen and (min-width: 1024px)": {
                    margin: '20px 20px 20px 20px',
					gridTemplateColumns: ['4','0.4fr 0.4fr 0.4fr 0.4fr'],
				}
			}}
		>
			{dataListOfShare?.map((item:any, index:any) => {
				return(
					<Box
						key={index}
					>
						<Box
							sx={{
								height: '6px',
								width: '60%',
								background: 'rgba(244,246,248,0.05)',
								ml: '20%',
								borderRadius: '4px 4px 0px 0px'
							}}
						></Box>
						<Box
							sx={{
								height: '6px',
								width: '80%',
								background: 'rgba(244,246,248,0.05)',
								ml: '10%',
								borderRadius: '4px 4px 0px 0px'
							}}
						></Box>
						<Image
							onClick={() => {
								router.push({
									pathname: '../playlist/[slugPlaylist]',
									query:{
										slugPlaylist: convertSlug(item.title),
										"key": item.key,
									}
								})
							}}
							alt=""
							src={item?.image}
							sx={{
								borderRadius: '8px',
								cursor: 'pointer',
								":hover": {
									transform: "scale(1)",
									border: "3px solid #28b1f4",
								},
							}}
						/>
						<Text
							as="h5"
							sx={{
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								fontSize: '14px',
								color: '#c5c9cd',
								cursor: 'pointer',
								":hover": {
									color: '#2DAAED',
								},
							}}
						>{item?.title}</Text>
						<Text
							as="h6"
							sx={{
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								fontSize: '12px',
								color: 'rgba(244,246,248,0.5)',
								cursor: 'pointer',
								mt: '5px',
								":hover": {
									color: '#2DAAED',
								},
							}}
						>{item?.nameArtist}</Text>
						<Text
							as="h6"
							sx={{
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								fontSize: '12px',
								color: 'rgba(244,246,248,0.5)',
								cursor: 'pointer',
								mt: '5px',
								":hover": {
									color: '#2DAAED',
								},
							}}
						>{item?.dateModify}</Text>
					</Box>
				);
			})}
		</Grid>
    );
}
export default ListOfShare;
