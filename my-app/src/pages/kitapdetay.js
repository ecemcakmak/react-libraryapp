import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../layout/header/index';
import kapak from '../assets/images/tanrilar-okulu-kapak.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function KitapDetay() {
  
   
  return (
  
    <div className='pageBackground content'>
      <Header/>
          <Container>

              <Row>
                <Col className="col-12">
                <Card className="card" >
                <img src={kapak} alt='library' className='banner'/>
                  <div className="card-body">
                    <h5 className="card-title">Kitap Hakkında</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </Card> 
                </Col>
              </Row>

          </Container>
    </div>
  
  )
}
