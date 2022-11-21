import { Button, Typography } from '@mui/material';

const navBackgroundStyles = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	backgroundColor: 'rgb(255, 255, 255)',
};

export default function Navbar() {
	return (
		<div style={navBackgroundStyles}>
			<div>
				<Typography
					sx={{ marginLeft: '1rem', fontSize: '2rem', color: 'rgb(33, 150, 243)' }}
				>
					Clothing Co.
				</Typography>
			</div>
			<div>
				<Button sx={{ marginRight: '1rem' }} variant="text">
					Place Order
				</Button>
				<Button sx={{ marginRight: '1rem' }} variant="text">
					Orders
				</Button>
			</div>
		</div>
	);
}
