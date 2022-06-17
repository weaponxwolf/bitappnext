import React,{useEffect,useState} from 'react'
import Image from 'next/image';
import Navbar from '../../components/Navbar'
import Link from 'next/link';
import {Container,Row,Col,ListGroup} from 'react-bootstrap';
import axios from 'axios'
import Cookies from 'js-cookie';


function Posts(){

  const [posts, setposts] = useState([])
  useEffect(() => {
    const token = Cookies.get('userdata');
    axios.get('http://localhost:3010/posts', {
      headers: {
        'Authorization': `Token ${token}` 
      }
    })
        .then(response => {
          setposts(response.data)
        });
  }, [])
  
 
  return (
    <div className='card mt-3' style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
      <ListGroup >
      {posts.map((post)=>(
        <ListGroup.Item key={post._id}>{post.title}</ListGroup.Item>
     ))}
      
 
</ListGroup>
    </div>
  )
}

function LeftSideMenu() {
  return (
    <div className='card mt-3' style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
      <ListGroup >
        <Link href="/posts/newpost"><a><ListGroup.Item style={{display:"flex",alignItems:"center"}}> <div style={{position:"relative",height:"1rem",width:"1rem"}}><Image src="/assets/img/plus.png" layout='fill'/></div>New Post</ListGroup.Item></a></Link>
        <Link href="/newpost"><a><ListGroup.Item style={{display:"flex",alignItems:"center"}}> <div style={{position:"relative",height:"1rem",width:"1rem"}}><Image src="/assets/img/plus.png" layout='fill'/></div>New Post</ListGroup.Item></a></Link><
          Link href="/newpost"><a><ListGroup.Item style={{display:"flex",alignItems:"center"}}> <div style={{position:"relative",height:"1rem",width:"1rem"}}><Image src="/assets/img/plus.png" layout='fill'/></div>New Post</ListGroup.Item></a></Link>
          <Link href="/newpost"><a><ListGroup.Item style={{display:"flex",alignItems:"center"}}> <div style={{position:"relative",height:"1rem",width:"1rem"}}><Image src="/assets/img/plus.png" layout='fill'/></div>New Post</ListGroup.Item></a></Link>
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