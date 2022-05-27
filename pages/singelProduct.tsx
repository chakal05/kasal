import {
	faClock,
	faHourglassStart,
	faThumbsDown,
	faThumbsUp,
	faTruck
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import ColList from '../components/columnList';

let pro = {
	category: 'clothes',
	description:
		'100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
	images: [
		'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
		'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
		'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg'
	],
	city: 'Ali-Sabieh',
	added: '2022-01-26',
	expires: '2022-04-23',
	likes: 34,
	dislikes: 9,
	seller: 'Carrefour',
	newPrice: 7095,
	promoted: false,
	stock: 2,
	leverans: 12,
	lastPrice: 43,
	title: "Opna Women's Short Sleeve Moisture"
};

let arrPro = [
	{
		category: 'clothes',
		description:
			"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",

		images: [
			'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg'
		],
		newPrice: 3999,
		stock: 3,
		leverans: 12,
		lastPrice: 43,
		city: 'Arta',
		promoted: false,
		added: '2022-02-11',
		expires: '2022-04-23',
		likes: 34,
		dislikes: 9,
		sellerId: '62470a417e53beb38dae2af6',
		title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats'
	},
	{
		category: 'clothes',
		description:
			'95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',

		images: [
			'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg'
		],
		city: 'Arta',
		added: '2022-01-06',
		expires: '2022-04-23',
		likes: 34,
		dislikes: 9,
		sellerId: '62470a417e53beb38dae2af6',
		newPrice: 9985,
		stock: 1,
		leverans: 12,
		lastPrice: 43,
		promoted: true,
		title: "MBJ Women's Solid Short Sleeve Boat Neck V "
	},
	{
		category: 'clothes',
		description:
			'100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
		images: [
			'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg'
		],
		city: 'Ali-Sabieh',
		added: '2022-01-26',
		expires: '2022-04-23',
		likes: 34,
		dislikes: 9,
		sellerId: '62470a417e53beb38dae2af6',
		newPrice: 7095,
		promoted: false,
		stock: 2,
		leverans: 12,
		lastPrice: 43,
		title: "Opna Women's Short Sleeve Moisture"
	},
	{
		category: 'clothes',
		description:
			'95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
		images: [
			'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg'
		],
		city: 'Djibouti City',
		added: '2022-01-17',
		expires: '2022-04-23',
		likes: 34,
		dislikes: 9,
		sellerId: '62470a417e53beb38dae2af6',
		newPrice: 1299,
		stock: 1,
		leverans: 12,
		lastPrice: 43,
		promoted: true,
		title: 'DANVOUY Womens T Shirt Casual Cotton Short'
	}
];

const TheProduct = () => {
	return (
		<div className=' lg:container  '>
			<div className='bg-white text-sky-900 p-2'>
				<p className='text-sm p-2'>
					{' '}
					{`Hem > Elektronik > Säkerhet > Övervakning > Kamera`}
				</p>
			</div>
			<div className=' lg:flex '>
				<div className='lg:basis-4/5 rounded bg-white mt-2 '>
					<div className='relative w-52 h-52 mx-auto md:w-60 md:h-60'>
						<Image src={pro.images[0]} layout='fill' alt='' />
					</div>
					<div className='flex justify-between border-t mt-5 p-1 '>
						<div className='flex items-center justify-center p-2 md:p-3'>
							<button className='flex mr-3 md:mr-7'>
								<FontAwesomeIcon
									icon={faThumbsUp}
									className='h-4 w-4 mr-1 mt-1 md:h-5 md:w-5  '
								/>
								<span className='md:text-lg'>{pro.likes}</span>
							</button>
							<button className='flex '>
								<FontAwesomeIcon
									icon={faThumbsDown}
									className='h-4 w-4 mt-1.5 mr-1 md:h-5 md:w-5 md:mt-2 '
								/>
								<span className='md:text-lg'>{pro.dislikes}</span>
							</button>
						</div>
						<div className='flex p-2 '>
							<p className='flex items-center  md:text-lg'>
								<FontAwesomeIcon
									icon={faHourglassStart}
									className='h-4 w-4 mr-[2px] '
								/>
								<span className=''>{pro.expires}</span>
							</p>
							<p className='flex items-center ml-3 md:text-lg'>
								<FontAwesomeIcon
									icon={faClock}
									className='h-4 w-4 mr-[4px]  '
								/>
								<span className=''>{pro.added}</span>
							</p>
						</div>
					</div>
					<div className='p-2'>
						<p className='font-bold md:text-xl '> {pro.title} </p>
						<p className='font-bold my-1 md:text-lg '>
							{pro.newPrice}:-kr
							<span className='text-red-500 line-through ml-5'>
								{' '}
								{pro.lastPrice}:-kr{' '}
							</span>
						</p>
						<p className='text-slate-700 my-1 md:text-lg '>
							Rabatt:{' '}
							<span className='text-black font-bold '>{pro.seller}</span>
						</p>{' '}
						<p className='text-slate-700 md:text-lg'>
							Leverans:
							<span className=' my-1 text-black font-bold '>
								{' '}
								{pro.leverans} kr{' '}
							</span>
						</p>
						<p className='my-2'> {pro.description} </p>
					</div>
					<div className='text-right my-1 p-2'>
						<button className='border-2 border-sky-900 text-sky-900 w-28 rounded p-1'>
							{' '}
							Save{' '}
						</button>
						<button className='bg-sky-900 text-white w-28 rounded p-1 ml-3'>
							{' '}
							See deal{' '}
						</button>
					</div>
				</div>
				<div className='hidden  lg:block lg:basis-1/5 lg:mt-2 ml-3'>
					<ColList products={arrPro} />
				</div>
			</div>
			<div className='mt-5  p-2'>
				<p className='text-xl mb-3 font-bold'> Andra har också kollat </p>
				<ul className='grid grid-cols-2 gap-2 md:grid-cols-4'>
					{arrPro.map((item, index) => {
						return (
							<li
								key={index}
								className='bg-white my-2 w-4/5 border-2 rounded mx-auto  p-2 '>
								<div className='relative w-28 h-28 md:w-28 md:h-28 mx-auto '>
									<Image src={item.images[0]} layout='fill' alt='' />
								</div>
								<div className='px-3 my-3 text-center'>
									<p>{item.title}</p>
									<p className='font-bold'>
										{' '}
										{item.newPrice}:-kr
										<span className='text-red-500 line-through ml-3'>
											{' '}
											{item.lastPrice}:-kr{' '}
										</span>
									</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default TheProduct;
