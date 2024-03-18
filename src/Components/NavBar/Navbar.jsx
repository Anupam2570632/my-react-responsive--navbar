const Navbar = () => {
    const navbar = [
        {
            id: 1,
            title: "Home",
            url: "/"
        },
        {
            id: 2,
            title: "About Us",
            url: "/about"
        },
        {
            id: 3,
            title: "Services",
            url: "/services"
        },
        {
            id: 4,
            title: "Contact",
            url: "/contact"
        }
    ];

    return (
        <ul>
            {
                navbar.map((item, idx)=> <li key={idx}><a href={item.url}>{item.title}</a></li>)
            }
        </ul>
    );
};

export default Navbar;