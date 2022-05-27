import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/header';

function MyApp({
	Component,
	pageProps
}: AppProps) {
	return (
		<div className=' bg-slate-50 font-serif'>
		<Header />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
