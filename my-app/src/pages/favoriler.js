import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../layout/header/index';
import kapak from '../assets/images/tanrilar-okulu-kapak.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Favoriler() {
  const navigate = useNavigate();
  const onClickHandler = useCallback(() => navigate('/kitapdetay', {replace: true}), [navigate]);

  return (
  
    <div className='pageBackground content'>
      <Header/>
          <Container>
              <Row>
                <Col className="col-xxl-4 col-xl-6">
                <Card className="card favs" >
                <img src={kapak} alt='library' className='banner'/>
                  <div className="card-body">
                    <h5 className="card-title">Kitap Hakkında</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={onClickHandler} className="btn btn-primary button button__fav">Detay</button>
                  </div>
                </Card> 
                </Col>
              </Row>

          </Container>
    </div>
  
  )
}
