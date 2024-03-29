import LoadingOrError from 'components/LoadingOrError';
import type { ReactElement } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.css';

const Home = lazy(async () => import('pages/Home'));
const SlowLoading = lazy(async () => import('pages/SlowLoading'));

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/slow' element={<SlowLoading />} /> {/* Simulate slow loading */}
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
