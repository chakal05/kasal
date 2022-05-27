import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { type } from 'os';

type Props = {
	products: {}[];
};

const ColList: React.FC<Props> = ({ products }) => {
	return (
		<div className='bg-white shadow rounded'>
			<p className='text-center p-2 font-bold border-b mb-2'>
				{' '}
				Popular products{' '}
			</p>
			<ul className='divide-y '>
				{products.map((i: any, index: number) => {
					return (
						<li key={index} className='py-2'>
							<Link href={''} passHref>
								<a className='flex'>
									<div className='basis-2/5 py-1 flex items-center justify-center'>
										<div className='relative  lg:w-14 lg:h-14   '>
											<Image src={i.images[0]} alt='sr' layout='fill' />
										</div>
									</div>
									<div className='basis-3/5 px-1'>
										<p className='text-[12px] font-bold text-sky-900 '>
											<span className='flex text-sm'>
												<FontAwesomeIcon
													icon={faThumbsUp}
													className='w-3 mr-1 '
												/>
												{i.likes}
											</span>
											<span className='flex flex-row text-slate-600'>
												{' '}
												{i.title.length > 35
													? `${i.title.slice(0, 35)}...`
													: i.title}
											</span>
											<span className=' text-sm'> {i.newPrice} kr</span>
										</p>
									</div>
								</a>
							</Link>
						</li>
					);
				})}
			</ul>

			<div className='p-1'>
				<button className='border-2 font-bold text-sky-900 border-sky-900 hover:border-slate-300 p-1 w-full rounded mt-3'>
					{' '}
					See all{' '}
				</button>
			</div>
		</div>
	);
};

export default ColList;
