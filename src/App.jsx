import Form from './Form.jsx';
import Navbar from './Navbar.jsx';
import Orders from './Orders.jsx';

import './App.css';
import { useState } from 'react';

const starterOrders = [
	{
		firstName: 'Billy',
		lastName: 'Gibbons',
		orderId: '8h3Hudf6',
		productName: 'Hat',
		quantity: 2,
		price: 14.99,
	},
	{
		firstName: 'Dusty',
		lastName: 'Hill',
		orderId: 'A4310GaB',
		productName: 'Shirt',
		quantity: 1,
		price: 19.99,
	},
	{
		firstName: 'Frank',
		lastName: 'Beard',
		orderId: 'ZI2fZ330',
		productName: 'Hat',
		quantity: 2,
		price: 29.98,
	},
	{
		firstName: 'David',
		lastName: 'Bowie',
		orderId: '811K3Dse',
		productName: 'Sweatshirt',
		quantity: 1,
		price: 29.98,
	},
];

function App() {
	const [orders, setOrders] = useState(starterOrders);

	const newOrderFunc = (order) => {
		setOrders((prevOrders) => {
			return [order, ...prevOrders];
		});
	};

	return (
    <>
      <Navbar />
			<Form onSaveOrderData={newOrderFunc} />
      {/* <Orders orders={orders} /> */}
		</>
	);
}

export default App;
