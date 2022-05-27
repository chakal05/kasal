import { setEnv } from './shared';

const dev = setEnv();

const getByCity = async (
	city: string
) => {
	const res = await fetch(
		`${dev}/api/getProducts/?city=${city}`
	);
	const products = await res.json();
	return products;
};

const getByCategory = async (
	category: string
) => {
	const res = await fetch(
		`${dev}/api/getProducts/?category=${category}`
	);
	const products = await res.json();
	return products;
};

const getPromoted = async () => {
	const res = await fetch(
		`${dev}/api/getProducts/?promoted=${true}`
	);
	const products = await res.json();
	return products;
};

const getProductById = async (
	id: string
) => {
	const res = await fetch(
		`${dev}/api/getProducts/?id=${id}`
	);
	const product = await res.json();
	return product;
};

export {
	getByCity,
	getByCategory,
	getPromoted,
	getProductById
};
