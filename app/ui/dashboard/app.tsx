"use client"

import * as React from 'react'; 
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import rtlPlugin from 'stylis-plugin-rtl'; 
import { prefixer } from 'stylis'; 
import { CacheProvider } from '@emotion/react'; 
import createCache from '@emotion/cache'; 
import { TextField } from '@mui/material';

const theme = createTheme({ 
	direction: 'rtl', // Both here and <body dir="rtl"> 
}); 

// Create rtl cache 
const cacheRtl = createCache({ 
	key: 'muirtl', 
	stylisPlugins: [prefixer, rtlPlugin], 
}); 

export default function Direction() { 
	return ( 
		<CacheProvider value={cacheRtl}> 
			<ThemeProvider theme={theme}> 
				<div 
					className="head"
					style={{ 
						width: "fit-content", 
						margin: "auto", 
					}} 
				> 
					<h1 
						style={{ 
							color: "green", 
						}} 
					> 
						GeeksforGeeks 
					</h1> 
					<strong>React MUI Right-to-left util</strong> 
					<br /> 
					<br /> 
				</div> 
				<div dir="rtl" style={{ display: 'flex', 
					justifyContent: 'center' }}> 
					 <TextField id="outlined-basic" label="Outlined" variant="outlined" />
					{/* <input type="text" placeholder="Name" />  */}
				</div> 
			</ThemeProvider> 
		</CacheProvider> 
	); 
} 
