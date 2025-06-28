import PropTypes from 'prop-types'
import Features from '../Features/Features';

const Priceoption = ({ option }) => {
    const { name, price, features} = option;
    return (
        <div className='bg-gray-950 rounded-lg p-4 flex flex-col'>
            <h2>
                <span className='text-5xl font-extrabold text-center'>{price}</span>
            </h2>
            <h3 className='text-center text-2xl my-6'>{name}</h3>
            <div className='pl-6 flex-grow'>
            {
                features.map((features,index)=><Features key={index} features={features}></Features>)
            }
            </div>
            <button className='bg-green-600 text-black font-extrabold hover:bg-stone-500 hover:text-white w-full p-2'>Buy Now</button>
        </div>
    );
};

Priceoption.propTypes = {
    option: PropTypes.object
}

export default Priceoption;