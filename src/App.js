//import './App.css';
import Tasks from './components/tasks/Tasks';
import Counter from './components/counter/Counter';
import Users from './components/users/Users.jsx';

import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Products from './components/products/Products';
import Movies from './components/movies/Movies';
import MoviePage from './components/movies/MoviePage';
import User from './components/users/User';

function App() {

	return (
		<div>
			<Navigation />
			<Routes>
				<Route path="/todo" element={<Tasks />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/users/" element={<Users />} />
				<Route path="/users/:id" element={<User />} />
				<Route path="/products" element={<Products />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/movies/:id" element={<MoviePage />} />
			</Routes>
		</div>
		
	);
	
}

export default App;
