import Image from 'next/image';
import Link from 'next/link';

const sellers = [
	{ name: 'Elgiganten', logo: '/elgiganten.png' },
	{ name: 'HM', logo: '/hm.png' },
	{ name: 'ICA', logo: '/ica.png' },
	{ name: 'Lenovo', logo: '/lenovo.png' },
	{ name: 'Netonnet', logo: '/netonnet.png' },
	{ name: 'Nike', logo: '/nike.png' }
];

const Companies = () => {
	return (
		<div className='bg-white shadow rounded my-3'>
			<p className='text-center p-2 font-bold border-b mb-2'>
				{' '}
				Popular compangnies{' '}
			</p>
			<ul>
				{sellers.map((item, index) => {
					return (
						<li key={index} className='my-1 '>
							<Link href={''} passHref>
								<a className='flex'>
									<div className=' basis-2/5 px-1 flex items-center justify-center '>
										<div className='relative  lg:w-16 lg:h-16    '>
											<Image src={item.logo} alt='sr' layout='fill' />
										</div>
									</div>
									<div className=' ml-3 flex items-center justify-center'>
										<p className='font-bold text-sky-900'> {item.name} </p>
									</div>
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
			<div className='p-1'>
				<button className='border-2 border-sky-900 text-sky-900 p-1 hover:border-slate-300 w-full rounded mt-3'>
					{' '}
					See all{' '}
				</button>
			</div>
		</div>
	);
};

export default Companies;
