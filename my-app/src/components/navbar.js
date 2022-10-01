import { Link } from "react-router-dom";



export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="site-title">

        </Link>
        <ul>
            <CustomLink to="/">Login</CustomLink>
            <CustomLink to="/profile">Profile</CustomLink>
            <CustomLink to="/kitapliste">Kitap Liste</CustomLink>
            <CustomLink to="/kitapdetay">Kitap Detay</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }){
    const path = window.location.pathname
    return(
        <li className={path === to ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
        </li>
    )
}