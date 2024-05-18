import { products } from '../constants'
import { PopularProductCard } from '../components'

const PopularProducts = () => {
  return (
    <section id='products'
      className='max-container'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Popular</span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 text-slate-gray font-montserrat'>Top quality and design to deliver the best performance and comfort in every step.</p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product, index) => (
          <PopularProductCard key={index} {...product} />
        ))}
      </div>
    </section >
  );
};

export default PopularProducts;