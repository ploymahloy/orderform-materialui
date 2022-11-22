import {
	Box,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';

export default function Orders({ orders }) {
	return (
		<>
			{/* Orders data table */}
			<Box
				sx={{
					display: {
						xs: 'none',
						sm: 'none',
						md: 'block',
						lg: 'block',
						xl: 'block',
					},
					margin: '5rem 2rem',
					borderRadius: '5px',
					backgroundColor: 'white',
				}}
			>
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
			<Box
				sx={{
					display: {
						xs: 'block',
						sm: 'block',
						md: 'none',
						lg: 'none',
						xl: 'none',
					},
				}}
			>
				{/* Individual cards for smaller screens */}
				{orders.map((order) => (
					<Card
						key={order.orderId}
						variant="outlined"
						sx={{ margin: { xs: '1rem 0', sm: '1rem' }, padding: '1rem' }}
					>
						<Typography variant="h5" component="div">
							{`${order.firstName}` + `${' '}` + `${order.lastName}`}
						</Typography>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom
						>
							<strong>Order ID: </strong>
							{order.orderId}
						</Typography>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell
										sx={{ padding: { xs: '5px', sm: '1rem' }, width: '100px' }}
									>
										{`Product: ` + `${order.productName}`}
									</TableCell>
									<TableCell
										sx={{ padding: { xs: '5px', sm: '1rem' }, width: '100px' }}
									>
										{`Quantity: ` + `${' ('}` + `${order.quantity}` + `${')'}`}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell
										sx={{ padding: { xs: '5px', sm: '1rem' }, width: '100px' }}
									>
										{'Total: '}
									</TableCell>
									<TableCell
										sx={{ padding: { xs: '5px', sm: '1rem' }, width: '100px' }}
									>
										{`$` + `${order.price}`}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</Card>
				))}
			</Box>
		</>
	);
}
