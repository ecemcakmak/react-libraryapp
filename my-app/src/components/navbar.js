import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
import Container from 'react-bootstrap/Container';



export default function Navbar(){
    return <nav className="nav">
            <Container>

<Row>
  <Col className="col-6">
  <Link to="/" classNameName="site-title">

</Link>
<ul>
    <CustomLink to="/">Login</CustomLink>
    <CustomLink to="/profile">Profile</CustomLink>
    <CustomLink to="/kitapliste">Kitap Liste</CustomLink>
    <CustomLink to="/kitapdetay">Kitap Detay</CustomLink>
    <CustomLink to="/favoriler">Favoriler</CustomLink>
</ul>
  </Col>
  <Col className="col-6">
  <div className="input-group">
            <div className="form-outline">
                <input type="search" id="form1" className="form-control" />
            </div>
            <button type="button" className="button button__fav btn btn-primary">
              ara
            </button>
            </div>
  </Col>
</Row>

</Container>
     

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