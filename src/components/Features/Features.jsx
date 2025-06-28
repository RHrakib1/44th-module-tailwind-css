import PropTypes from 'prop-types'
import { AiFillCheckCircle } from "react-icons/ai";
const Features = ({ features }) => {
    return (
        <div >
            <h3 className='flex
            gap-2 items-center'><AiFillCheckCircle className='text-yellow-500' ></AiFillCheckCircle>{features}</h3>
        </div>
    );
};

Features.propTypes = {
    features: PropTypes.string
}
export default Features;