import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faUser,
	faArrowDown,
	faAngleDown,
	faAngleUp,
	faSearch,
	faAngleRight,
	faList
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const navLinks = ['Hem/Deals', 'Kuponger'];
const categories1 = [
	'Elektronik',
	'Hälsa & kosmetika',
	'För hemmet',
	'Fordon',
	'Fritid & hobby'
];

const categories2 = [
	'Spel & Konsoler',
	'mode & accessoarer',
	'Mat',
	'Finans & Försäkring',
	'Trädgård'
];
type Props = {};
const TheHeader = () => {
	const [showNav, setShowNav] = useState(false);
	const [showDropDown, setShowDropDown] = useState(false);
	const [link, setLink] = useState(navLinks[0]);
	const show = (passedId: string) => {
		const toShow = document.getElementById(passedId);

		switch (passedId) {
			case 'mobile-menu':
				if (toShow?.classList.contains('hidden')) {
					toShow.classList.remove('hidden');
					setShowNav(true);
				} else {
					toShow?.classList.add('hidden');
					setShowNav(false);
				}

				break;

			case 'dropdownNavbar':
				if (toShow?.classList.contains('hidden')) {
					toShow.classList.remove('hidden');
					setShowDropDown(true);
				} else {
					toShow?.classList.add('hidden');
					setShowDropDown(false);
				}

				break;

			default:
				break;
		}
	};

	return (
		<nav className='bg-sky-900 text-white px-2 sm:px-4 py-4  dark:bg-gray-800'>
			<div className=' lg:container  flex flex-wrap justify-between items-center mx-auto'>
				<div className='relative flex'>
					<button
						type='button'
						className='inline-flex items-center mr-2 p-2 text-sm text-white rounded-lg md:hidden hover:bg-white hover:text-sky-900 focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 '
						aria-controls='mobile-menu'
						onClick={() => show('mobile-menu')}
						aria-expanded='false'>
						<FontAwesomeIcon className='w-4 h-4' icon={faBars} />
					</button>
					<Link href='/' passHref>
						<a className='flex items-center'>
							<span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
								KasaL
							</span>
						</a>
					</Link>
				</div>
				<div className='flex md:hidden '>
					<button className='inline-flex items-center mr-1 p-2 text-sm text-white rounded-lg  hover:bg-white hover:text-sky-900  focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 '>
						<FontAwesomeIcon className='w-4 h-4' icon={faUser} />
					</button>
					<button
						onClick={() => show('mobile-menu')}
						className='inline-flex items-center mr-1 p-2 text-sm text-white rounded-lg hover:bg-white hover:text-sky-900  focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 '>
						<FontAwesomeIcon className='w-4 h-4' icon={faSearch} />
					</button>
				</div>

				<div className='hidden w-full md:block md:w-auto' id='mobile-menu'>
					<ul className='flex flex-col mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
						<li>
							<input
								type='text'
								id='search-navbar'
								className='block p-1 pl-5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='Search...'
							/>
						</li>

						{navLinks.map((item, index) => {
							return (
								<li key={index}>
									<button
										onClick={() => setLink(item)}
										className='w-full text-left'>
										<Link href={item === 'Hem/Deals' ? '/' : `/${item}`}>
											<a
												className={
													link === item
														? 'block py-2 pr-4 pl-3 md:-mt-1.5 font-bold  text-white  border-b border-gray-100 hover:bg-white hover:text-sky-900 md:hover:bg-transparent md:border-0 md:underline underline-offset-8 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
														: 'block py-2 pr-4 pl-3 md:-mt-1.5 font-bold  text-white  border-b border-gray-100 hover:bg-white hover:text-sky-900 md:hover:bg-transparent md:border-0 md:hover:underline md:hover:underline-offset-8 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
												}>
												{item}
											</a>
										</Link>
									</button>
								</li>
							);
						})}

						<li>
							<div className=' relative'>
								<button
									id='dropdownNavbarLink'
									onClick={() => show('dropdownNavbar')}
									data-dropdown-toggle='dropdownNavbar'
									className='flex items-center justify-between w-full py-2 pl-3 md:-mt-0.5  pr-4  md:py-[0.2rem] font-bold text-white border-gray-100 hover:bg-white hover:text-sky-900 md:hover:bg-transparent md:border-0 md:hover:underline md:hover:underline-offset-8 md:hover:text-white  md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'>
									Alla kategorier
									{!showDropDown && (
										<FontAwesomeIcon
											className='w-4 h-4 ml-1'
											icon={faAngleDown}
										/>
									)}
									{showDropDown && (
										<FontAwesomeIcon
											className='w-4 h-4 ml-1'
											icon={faAngleUp}
										/>
									)}
								</button>
								<div
									id='dropdownNavbar'
									className='z-10 hidden absolute  bg-white text-black divide-y divide-gray-100 rounded shadow w-full md:w-96 md:right-0 dark:bg-gray-700 dark:divide-gray-600'>
									<div className='flex justify-between p-2'>
										<ul className='text-sm w-1/2 '>
											{categories1.map((iten, index) => {
												return (
													<li key={index} className='p-1 md:p-2'>
														<Link
															href={{
																pathname: '/',
																query: iten
															}}>
															<a className='hover:underline hover:underline-offset-8'>
																{iten}
															</a>
														</Link>
													</li>
												);
											})}
										</ul>

										<ul className='text-sm w-1/2'>
											{categories2.map((iten, index) => {
												return (
													<li key={index} className='p-1 md:p-2 '>
														<Link
															href={{
																pathname: '/',
																query: iten
															}}>
															<a className='hover:underline hover:underline-offset-8'>
																{iten}
															</a>
														</Link>
													</li>
												);
											})}
										</ul>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default TheHeader;
