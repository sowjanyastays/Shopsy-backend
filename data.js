import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Sowjanya',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('whydontwe'),
      isAdmin: true,
    },
    {
      name: 'Jennie',
      email: 'jennie@gmail.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Women slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', 
      price: 900,
      countInStock: 20,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'This beautiful blue sweater is so cozy and stylish, with its soft knit fabric and flattering fit that will make you feel comfortable and confident wherever you go.',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Women Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 600,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'These comfortable track pants are perfect for lounging or working out, with their lightweight and breathable fabric that allows for freedom of movement and their trendy design that will keep you looking stylish and relaxed.',
    },
    {
      // _id: '3',
      name: 'Nike White leggings',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 700,
      countInStock: 35,
      brand: 'Nike',
      rating: 4.0,
      numReviews: 14,
      description: 'This classic white t-shirt is a versatile wardrobe staple that can be dressed up or down, with its soft and breathable material providing all-day comfort and its timeless style ensuring that you always look fresh and polished.',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant for Women',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 500,
      countInStock: 5,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'These sleek track pants are a must-have for any active lifestyle, featuring a comfortable and stretchy material that moves with you and a modern design that will keep you looking effortlessly cool both in and out of the gym.',
    },
  ],
};
export default data;
