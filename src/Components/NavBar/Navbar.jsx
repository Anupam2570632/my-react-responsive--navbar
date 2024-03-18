import Path from "./Path";
import PropTypes from 'prop-types'

const Navbar = ({ menu }) => {
    const navbar = [
        {
            "id": 1,
            "title": "Home",
            "url": "/"
        },
        {
            "id": 2,
            "title": "About Us",
            "url": "/about"
        },
        {
            "id": 3,
            "title": "Services",
            "url": "/services"
        },
        {
            "id": 4,
            "title": "Contact",
            "url": "/contact"
        }
    ];

    return (
        <ul className={`absolute z-10 bg-yellow-300 ${menu ? 'top-10 bg-yellow-300' : '-top-60 md:bg-yellow-300 bg-red-500'} duration-1000 md:static p-6 md:p-2  flex flex-col md:gap-12 md:flex-row my-2`} >
            {
                navbar.map((item, idx) => <Path key={idx} item={item} />)
            }
        </ul >
    );
};

Navbar.propTypes={
    menu: PropTypes.bool
}

export default Navbar;