import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Products from './features/user/wishProducts/ProductList';
import ProductsHome from './features/products/Products';
import SelectLocale from './components/SelectLocale/SelectLocale';

function App(): JSX.Element {
	return (
		<>
			<SelectLocale />
			<ProductsHome />
			<Products />
			<NotFound />
			<Footer />
		</>
	);
}

export default App;
