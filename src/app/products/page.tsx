import React from 'react'

const Products = () => {

    const productsData = [
      {id: 1, name:  'Hudareality', price: 50, description: 'Hudareality  Lipstics', image: '/pic2.jpg'}, 
      {id: 2, name:  'Gabrini Brilliant', price: 5, description: 'Gabrini Brilliant Nail Polish', image: '/pic3.jpg'}, 
      {id: 3, name:  'Sensai Mascara', price: 5, description: 'Sensai Mascara', image: '/pic4.jpg'}, 
      {id: 4, name:  'Pen Eyeliner', price: 6, description: 'The First Pen Eyeliner', image: '/pic5.jpg'}, 
      {id: 5, name:  'Sephora', price: 20, description: 'Sephora Best Skin Ever', image: '/pic6.jpg'}, 
      {id: 6, name:  'All Nighter Spray', price: 50, description: 'All Nighter Makeup Spray', image: '/pic7.jpg'}, 
  
    ]
    
  
  return (
    <div className="products grid grid-cols-1 md:grid-cols-3 gap-5 px-10 my-10">
       {productsData.map(products=>(
        <div key={products.id} className="productsCard bg-white p-5 rounded-md shadow-md text-center">
            <img src={products.image} width={300} height={100} alt={products.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" />
            <h3 className="mt-4 text-2xl font-bold">{products.name}</h3>
            <p className="text-gray-500">{products.description}</p>
            <div className="price text-blue-500 text-xl font-semibold mt-2">${products.price}</div>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-blue-700">Add to Cart</button>
        </div>
       ))} 
      </div>
  );
};

export default Products;
