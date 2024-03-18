import PropTypes from 'prop-types';

const Path = ({ item }) => {

    return (
        <li className='text-blue-700 font-bold px-3 py-1 hover:bg-yellow-500'><a href={item.url}>{item.title}</a></li>
    );
};

Path.propTypes = {
    item: PropTypes.object
}

export default Path;