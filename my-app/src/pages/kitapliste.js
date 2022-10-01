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
                      <th scope="col">Day</th>
                      <th scope="col">Image</th>
                      <th scope="col">Article Name</th>
                      <th scope="col">Author</th>
                      <th scope="col">Words</th>
                      <th scope="col">Shares</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">2</th>
                      <td className="w-25">
                        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-5.jpg" className="img-fluid img-thumbnail" alt="Sheep"/>
                      </td>
                      <td>Bootstrap Grid 4 Tutorial and Examples</td>
                      <td>Cristina</td>
                      <td>1.434</td>
                      <td>3.417</td>
                    </tr>
                  </tbody>
                </Table>   
                </Col>
              </Row>

          </Container>
    </div>
  
  )
}
