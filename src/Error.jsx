import React from 'react';
import { Typography } from '@mui/material';

export default function Error() {
	return (
		<Typography
			sx={{
				display: 'flex',
				justifyContent: 'center',
				fontSize: '2.5rem',
				color: 'white',
			}}
		>
			Page not found.
		</Typography>
	);
}
