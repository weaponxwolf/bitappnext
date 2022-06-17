import React,{useEffect,useState} from 'react'
import Image from 'next/image';
import Navbar from '../../components/Navbar'
import {Container,Row,Col,ListGroup, Card} from 'react-bootstrap';
import axios from 'axios'
import Cookies from 'js-cookie';

function Post(props){
  return(
<>
</>
  )
}

function Posts(){

  const [posts, setposts] = useState([])
  useEffect(() => {
    console.log(Cookies.get('userdata'));
    const token = '..your token..';
    
    axios.get('http://localhost:3010/posts', {
      headers: {
        'Authorization': `Basic ${token}` 
      }
    })
        .then(response => {
          console.log(response.data);
          setposts(response.data)
        });
  }, [])
  
 
  return (
    <div className='card mt-3' style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
      <ListGroup >
      {posts.map((post)=>(
        <ListGroup.Item key={post._id}>
        <Card className='px-5 pt-5 py-5'>{post.title}<p>{post.body}</p></Card>
        </ListGroup.Item>
     ))}
      
 
</ListGroup>
    </div>
  )
}

function LeftSideMenu() {
  return (
    <div className='card mt-3' style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
      <ListGroup >
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
    </div>
  )
}
function RightSideMenu() {
  return (
    <div className='card mt-3' style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
      <ListGroup >
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
    </div>
  )
}


const index = () => {
  
  return (
    <>
    <Navbar/>
    <Container>
    <Row>
      <Col xs="3"><LeftSideMenu/></Col>
      <Col xs="6"><Posts/></Col>
      <Col xs="3"><RightSideMenu/></Col>
    </Row>
    
    </Container>
    </>
  )
}

export default index