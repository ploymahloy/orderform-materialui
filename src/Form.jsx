import { useEffect, useState } from 'react';
import {
	Box,
	Button,
	InputAdornment,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	TextField,
	Typography,
} from '@mui/material';

export default function Form({ onSaveOrderData }) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [product, setProduct] = useState('');
	const [quantity, setQuantity] = useState('');
	const [price, setPrice] = useState('');
	const quantityMenu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	// Generate random Order IDs
	const makeId = () => {
		var result = '';
		var characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < 12; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}
		return result;
	};

	// Converts product value integer to product name
	const productName = () => {
		switch (product) {
			case 1:
				return 'Shirt';
				break;
			case 2:
				return 'Hat';
				break;
			case 3:
				return 'Sweatshirt';
				break;
		}
	};

  // Calculates order cost on change of product or quantity state
  useEffect(() => {
    if (quantity > 0) {
      switch (product) {
        case 1:
          setPrice((19.99 * quantity).toFixed(2));
          break;
        case 2:
          setPrice((14.99 * quantity).toFixed(2));
          break;
        case 3:
          setPrice((29.98 * quantity).toFixed(2));
          break;
      }
    }
  }, [product, quantity]);

	// Sends new order to App, resets form fields
	const submitHandler = (e) => {
		e.preventDefault();

		const newOrder = {
			firstName: firstName,
			lastName: lastName,
			orderId: makeId(),
			productName: productName(),
			quantity: quantity,
			price: price,
		};

		onSaveOrderData(newOrder);
		setFirstName('');
		setLastName('');
		setProduct('');
		setQuantity('');
		setPrice('');
	};

	return (
		<>
			<Typography variant="h1">Form</Typography>
			{/* Form */}
			<Box
				sx={{
					padding: '2rem',
					width: 'fit-content',
					border: '1px solid rgb(148, 148, 148)',
				}}
			>
				<TextField
					label="First Name"
					variant="standard"
					fullWidth
					sx={{ marginRight: '5px' }}
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<TextField
					label="Last Name"
					variant="standard"
					fullWidth
					sx={{ marginRight: '5px' }}
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<InputLabel
					style={{
						display: 'block',
						margin: '1rem 0 0',
						color: 'rgb(102, 102, 102)',
					}}
				>
					Product
				</InputLabel>
				<Select
					fullWidth
					value={product}
					onChange={(e) => setProduct(e.target.value)}
				>
					<MenuItem value="">
						<em>Select product</em>
					</MenuItem>
					<MenuItem value={1}>Shirt</MenuItem>
					<MenuItem value={2}>Hat</MenuItem>
					<MenuItem value={3}>Sweatshirt</MenuItem>
				</Select>
				<InputLabel
					style={{
						display: 'inline-block',
						margin: '1rem 0 0',
						color: 'rgb(102, 102, 102)',
					}}
				>
					Quantity
				</InputLabel>
				<Select
					fullWidth
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
				>
					<MenuItem value="">
						<em>Select quantity</em>
					</MenuItem>
					{quantityMenu.map((item) => {
						return (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						);
					})}
				</Select>
				<InputLabel
					htmlFor="outlined-adornment-amount"
					sx={{ margin: '1rem 0 0' }}
				>
					Amount
				</InputLabel>
				<OutlinedInput
					fullWidth
					value={price}
					startAdornment={<InputAdornment position="start">$</InputAdornment>}
					inputProps={{ readOnly: true }}
				/>
				<Button
					variant="outlined"
					fullWidth
					sx={{
						marginTop: '1.25rem',
						fontSize: '1rem',
						color: 'dark',
					}}
					onClick={submitHandler}
				>
					Place Order
				</Button>
			</Box>
		</>
	);
}
