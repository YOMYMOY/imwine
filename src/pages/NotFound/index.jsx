import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => {
  return (
    <Container style={{backgroundColor:"red"}}>
        <Row>
            <Col md={6}>
                <h1 className='text-center text-white'>404</h1>
                <p className='text-center text-white'>Page Not Found</p>
            </Col>
        </Row>
    </Container>
  )
}

export default NotFound
