import React from 'react';
import { useLocation } from 'react-router-dom';
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';

export default function Orders(props) {
	const location = useLocation();
	const orders = location.state?.orders;

	return (
		<TableContainer component={Paper}>
			<Typography variant="h1">Orders</Typography>
			<Table sx={{ minWidth: 600 }} aria-label="simple table">
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
					{orders.map((order) => (
						<TableRow
							key={order.orderId}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell scope="row">{order.firstName}</TableCell>
							<TableCell scope="row">{order.lastName}</TableCell>
							<TableCell>{order.orderId}</TableCell>
							<TableCell>{order.productName}</TableCell>
							<TableCell>{order.quantity}</TableCell>
							<TableCell>{'$' + `${order.price}`}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
