import React from 'react'
import Header from '../layout/header/index';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Box from '../components/box'
import Navbar from '../components/navbar'
export default function KitapListe() {
  return (
  
    <div className='pageBackground content'>
      <Header/>
          <Container>

              <Row>
                <Col className="col-12">
                <Table className="table table-image table__list">
                  <thead>
                    <tr>
                   
                      <th scope="col">Kitap Kapağı</th>
                      <th scope="col">Kitap Evi</th>
                      <th scope="col">Kitap Adı</th>
                      <th scope="col">Yazar</th>
                      
                      <th scope="col">Basım Tarihi</th>
                    </tr>
                  </thead>
                  <tbody> 
                    <tr>
                      <td className="w-25">
                        <a>
                        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-5.jpg" className="img-fluid img-thumbnail" alt="Sheep"/>

                        </a>
                       </td>
                      <td>İnkılap</td>
                      <td>Tanrılar Okulu</td>
                      <td>Stefano D'Anna</td>
                      <td>7.2016</td>
                    </tr>
                  </tbody>
                </Table>   
                </Col>
              </Row>

          </Container>
    </div>
  
  )
}
