import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom'

// import layout
import MainLayout from './layout/MainLayout'
import ProductLayout from './layout/ProductLayout'

// import pages
import Home from './page/HomePage'
import About from './page/AboutPage'
import ProductsPage, { action, productsLoader } from './page/ProductsPage'
import ProductDetailPage, {
	loader as detailLoader,deleteData, edit
} from './page/ProductDetailPage'
import ProductEdit, { save } from './page/ProductEdit'
import ErrorPage from './component/ErrorPage'
import NotFound from './component/NotFound'
import NewProduct, { newAction } from './page/NewProduct'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
			<Route index element={<Home />} />
			<Route path="products" element={<ProductLayout />}>
				<Route
					index
					element={<ProductsPage />}
					loader={productsLoader}
					errorElement={<ErrorPage />}
					action={action}
				/>
				<Route
					path=":id"
					element={<ProductDetailPage />}
					loader={detailLoader} action={edit}
				/>
				<Route path=":id/new" element={<NewProduct />} action={newAction} />
				<Route path=":id/edit" element={<ProductEdit/>} loader={detailLoader} action={save}/>
				<Route path=":id/destroy" action={deleteData}/>
			</Route>
			<Route path="about" element={<About />} />
		</Route>
	)
)
const App = () => <RouterProvider router={router} />
export default App
