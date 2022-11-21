import React from 'react';
import {
  Box,
	Table,
	TableBody,
	TableCell,
	TableHead,
  TableRow
} from '@mui/material';

export default function Orders({ orders }) {
	return (
		<Box sx={{ margin: '5rem 2rem', borderRadius: '5px', backgroundColor: 'white' }}>
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
		</Box>
	);
}
