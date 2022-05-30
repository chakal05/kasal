import middleware from '../../lib/dbConnect';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import moment from 'moment';

const randomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const added = () => {
	return moment().set({
		year: randomInt(2021, 2022),
		month: randomInt(1, 12),
		day: randomInt(1, 30)
	});
};

const expires = () => {
	const day = added();
	return day.add(1, 'month');
};

const fakeData = [
	{
		category: 'clothes',
		description:
			'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
		bild: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'HM',
		newPrice: 3030,
		stock: 1,
		leverans: 12,
		lastPrice: 4433,
		promoted: false,
		title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
	},
	{
		category: 'clothes',
		description:
			'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',

		bild:
			'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',

		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'HM',
		newPrice: 2235,
		stock: 3,
		leverans: 8,
		lastPrice: 4323,
		promoted: false,
		title: 'Mens Casual Premium Slim Fit T-Shirts '
	},
	{
		category: 'clothes',
		description:
			'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',

		bild: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',

		promoted: true,
		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'HM',
		newPrice: 5599,
		stock: 2,
		leverans: 10,
		lastPrice: 6532,
		title: 'Mens Cotton Jacket'
	},
	{
		category: 'clothes',
		description:
			'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',

		bild: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',

		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'HM',
		newPrice: 1596,
		stock: 1,
		leverans: 4,
		lastPrice: 2043,
		promoted: false,
		title: 'Mens Casual Slim Fit'
	},
	{
		category: 'jewelery',
		description:
			"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",

		bild: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',

		promoted: false,
		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'HM',
		newPrice: 1695,
		stock: 5,
		leverans: 5,
		lastPrice: 2013,
		title:
			"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
	},
	{
		category: 'jewelery',
		description:
			'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
		promoted: false,
		bild: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',

		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'HM',
		newPrice: 1680,
		stock: 1,
		leverans: 7,
		lastPrice: 1943,
		title: 'Solid Gold Petite Micropave '
	},
	{
		category: 'jewelery',
		description:
			"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",

		bild: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',

		promoted: true,
		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'HM',
		newPrice: 9990,
		stock: 4,
		leverans: 0,
		lastPrice: 11243,
		title: 'White Gold Plated Princess'
	},
	{
		category: 'jewelery',
		description:
			'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
		promoted: false,
		bild: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',

		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'HM',
		newPrice: 1099,
		stock: 2,
		leverans: 4,
		lastPrice: 2043,
		title: 'Pierced Owl Rose Gold Plated Stainless Steel Double'
	},
	{
		category: 'electronics',
		description:
			'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',

		bild: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',

		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'Elgiganten',
		newPrice: 6400,
		stock: 6,
		leverans: 11,
		lastPrice: 7543,
		promoted: false,
		title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 '
	},
	{
		category: 'electronics',
		description:
			'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',

		bild: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',

		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'Elgiganten',
		newPrice: 1090,
		stock: 1,
		leverans: 5,
		lastPrice: 1443,
		promoted: true,
		title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s'
	},
	{
		category: 'electronics',
		description:
			'3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
		bild: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'Lenovo',
		newPrice: 1090,
		stock: 3,
		leverans: 3,
		lastPrice: 1443,
		promoted: false,
		title:
			'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5'
	},
	{
		category: 'electronics',
		description:
			"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",

		bild: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',

		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'Netonnet',
		newPrice: 1140,
		promoted: true,
		stock: 5,
		leverans: 5,
		lastPrice: 1243,
		title:
			'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive'
	},
	{
		category: 'electronics',
		description:
			'21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',

		bild: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'Netonnet',
		newPrice: 5990,
		promoted: false,
		stock: 2,
		leverans: 10,
		lastPrice: 6543,
		title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin'
	},
	{
		category: 'electronics',
		description:
			'49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
		bild: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
		promoted: true,
		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'Elgiganted',
		newPrice: 9999,
		stock: 12,
		leverans: 7,
		lastPrice: 12343,
		title:
			'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED '
	},
	{
		category: 'clothes',
		description:
			'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
		promoted: false,
		bild: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',

		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'HM',
		newPrice: 5699,
		stock: 4,
		leverans: 10,
		lastPrice: 6743,
		title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"
	},
	{
		category: 'clothes',
		description:
			'100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',

		bild: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'HM',
		newPrice: 2995,
		stock: 1,
		leverans: 9,
		lastPrice: 3043,
		promoted: false,
		title:
			"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket"
	},
	{
		category: 'clothes',
		description:
			"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
		bild: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
		newPrice: 3999,
		stock: 3,
		leverans: 4,
		lastPrice: 5043,
		promoted: false,
		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'HM',
		title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats'
	},
	{
		category: 'clothes',
		description:
			'95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
		bild: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'HM',
		newPrice: 9985,
		stock: 1,
		leverans: 5,
		lastPrice: 12343,
		promoted: true,
		title: "MBJ Women's Solid Short Sleeve Boat Neck V "
	},
	{
		category: 'clothes',
		description:
			'100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
		bild: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'HM',
		newPrice: 7095,
		promoted: false,
		stock: 2,
		leverans: 3,
		lastPrice: 9043,
		title: "Opna Women's Short Sleeve Moisture"
	},
	{
		category: 'clothes',
		description:
			'95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
		bild: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
		added: added(),
		expires: expires(),
		likes: Math.floor(Math.random() * 1001),
		dislikes: Math.floor(Math.random() * 1001),
		saleFrom: 'HM',
		newPrice: 1299,
		stock: 1,
		leverans: 6,
		lastPrice: 1543,
		promoted: true,
		title: 'DANVOUY Womens T Shirt Casual Cotton Short'
	}
];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await middleware;
	const db = client.db('kasal');
	if (req.method === 'GET') {
		const { city, id, category, promoted } = req.query;

		let result;

		if (Object.keys(req.query).length === 0)
			result = await db.collection('products').find({}).toArray();

		if (id ) {
			result = await db
				.collection('products')
				.findOne({
				_id: new ObjectId(id)
				});
		}

		if (category) {
			result = await db
				.collection('products')
				.find({ category })
				.toArray();
		}

		// if (promoted) {
		// 	let dbRes = await db
		// 		.collection('products')
		// 		.find({ promoted: true })
		// 		.toArray();

		// 	result = dbRes.slice(0, 4);
		// }

		res.json(result);
	}
};

export default handler;
