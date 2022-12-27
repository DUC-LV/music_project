import React from "react";
import { Box } from "theme-ui";
import Header from "./Header";
import PlayMusic from "./PlayMusic";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
	return(
		<Box>
			<Header />
            <PlayMusic keySong=""/>
			{children}
		</Box>
	)
}
export default Layout;