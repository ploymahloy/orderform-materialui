import { useState } from 'react';
import {
	Box,
	Button,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';

export default function Form() {
	const [age, setAge] = useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<>
			<Typography variant="h1">Form</Typography>
			<Box
				sx={{
					padding: '2rem',
					width: 'fit-content',
					border: '1px solid rgb(148, 148, 148)',
				}}
			>
				<TextField
					id="standard-basic"
					label="First Name"
					variant="standard"
					sx={{ display: 'block' }}
				/>
				<TextField
					id="standard-basic"
					label="Last Name"
					variant="standard"
					sx={{ display: 'block' }}
				/>
				<Select
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={age}
					onChange={handleChange}
					label="Age"
					sx={{ marginTop: '1.25rem', width: '100%' }}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={1}>Shirt</MenuItem>
					<MenuItem value={2}>Hat</MenuItem>
					<MenuItem value={3}>Sweatshirt</MenuItem>
				</Select>
				<TextField
					id="standard-basic"
					label="Quantity"
					variant="standard"
					sx={{ display: 'block' }}
				/>
				<Button
					variant="outlined"
					sx={{
						marginTop: '1.25rem',
						width: '100%',
						fontSize: '1rem',
						color: 'dark',
					}}
				>
					Place Order
				</Button>
			</Box>
		</>
	);
}
