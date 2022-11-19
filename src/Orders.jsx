import React from 'react';
import {
  Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from '@mui/material';

function createData(
	firstName,
	lastName,
	orderId,
	productName,
	quantity,
	price
) {
	return { firstName, lastName, orderId, productName, quantity, price };
}

const rows = [
	createData('Billy', 'Gibbons', '8h3Hudf6', 'Hat', 2, 39.98),
	createData('Dusty', 'Hill', 'A4310GaB', 'Hat', 2, 39.98),
	createData('Frank', 'Beard', 'ZI2fZ330', 'Shirt', 1, 14.99),
	createData('Mike', 'Jagger', 'RS357kl8', 'Shirt', 3, 42.97),
];

export default function BasicTable() {
	return (
		<TableContainer component={Paper}>
			<Typography variant="h1">
				Orders
			</Typography>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>First Name</TableCell>
						<TableCell>Last Name</TableCell>
						<TableCell>Order ID</TableCell>
						<TableCell>Product Name</TableCell>
						<TableCell>Quantity</TableCell>
						<TableCell>Price</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.orderId}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell scope="row">{row.firstName}</TableCell>
							<TableCell scope="row">{row.lastName}</TableCell>
							<TableCell>{row.orderId}</TableCell>
							<TableCell>{row.productName}</TableCell>
							<TableCell>{row.quantity}</TableCell>
							<TableCell>{'$' + `${row.price}`}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
