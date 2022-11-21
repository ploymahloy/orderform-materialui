import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import Form from './Form.jsx';
import Orders from './Orders.jsx';
import Error from './Error.jsx';

import './App.css';

const starterOrders = [
	{
		firstName: 'Billy',
		lastName: 'Gibbons',
		orderId: 'ZZTop0000001',
		productName: 'Hat',
		quantity: 2,
		price: 14.99,
	},
	{
		firstName: 'Dusty',
		lastName: 'Hill',
		orderId: 'ZZTop0000002',
		productName: 'Shirt',
		quantity: 1,
		price: 19.99,
	},
	{
		firstName: 'Frank',
		lastName: 'Beard',
		orderId: 'ZZTop0000003',
		productName: 'Hat',
		quantity: 2,
		price: 29.98,
	},
	{
		firstName: 'David',
		lastName: 'Bowie',
		orderId: 'UndrPr3ssr81',
		productName: 'Sweatshirt',
		quantity: 1,
		price: 29.98,
	},
];

const navBackgroundStyles = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	backgroundColor: 'rgb(255, 255, 255)',
};

function App() {
	const [orders, setOrders] = useState(starterOrders);

	useEffect(() => {
		const cachedData = window.localStorage.getItem('ORDERS_ARRAY');
		if (cachedData?.length) {
			setOrders(JSON.parse(cachedData));
		}
	}, []);

	const newOrderFunc = (order) => {
		setOrders((prevOrders) => {
			const newOrders = [order, ...prevOrders];
			window.localStorage.setItem('ORDERS_ARRAY', JSON.stringify(newOrders));
			return newOrders;
		});
	};

	return (
		<Router>
			<div style={navBackgroundStyles}>
				<div>
					<Typography
						sx={{
							marginLeft: '1rem',
							fontSize: '2rem',
							color: 'rgb(33, 150, 243)',
						}}
					>
						Clothing Co.
					</Typography>
				</div>
				<div>
					<Link to="/">
						<Button sx={{ marginRight: '1rem' }} variant="text">
							Place Order
						</Button>
					</Link>
					<Link to="/orders">
						<Button sx={{ marginRight: '1rem' }} variant="text">
							Orders
						</Button>
					</Link>
				</div>
			</div>
			<Routes>
				<Route path="/" element={<Form onSaveOrderData={newOrderFunc} />} />
				<Route path="/orders" element={<Orders orders={orders} />} />
				<Route path="/*" element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
