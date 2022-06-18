import React,{useEffect,useState} from 'react'
import Image from 'next/image';
import Navbar from '../../components/Navbar'
import {Container,Row,Col,ListGroup, Card} from 'react-bootstrap';
import axios from 'axios'
import Cookies from 'js-cookie';
import Link from 'next/link';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 
const slider = (
  <AwesomeSlider>
    <div>1dssssssssssssssssssssss</div>
    <div>2dsssssssssssss</div>
    <div>3dssssssssss</div>
    <div>4dsssssssssssssss</div>
  </AwesomeSlider>
);

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
    <div className='mt-3'>
      {posts.map((post)=>(
        <Card className='px-3 py-3 my-1' key={post._id} style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",borderRadius:"0.5rem"}}>
          <h1 className="px-5">{post.title}</h1>
          <p className="px-5" style={{fontSize:"0.8rem"}}>{post.body}</p>
          <Card style={{position:"relative",maxWidth:"100%",height:"50vh",borderWidth:"0px"}}><Image priority="false" src={"http://localhost:3010/posts/images/"+post.images[0]} layout='fill' objectFit='contain'/></Card>

          </Card>
     ))}
    </div>
  )
}

function LeftSideMenu() {
  return (
    <div className='card mt-3' style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
      <ListGroup >
        <Link href="/posts/newpost"><a><ListGroup.Item style={{display:"flex",alignItems:"center"}}> <div style={{position:"relative",height:"1rem",width:"1rem"}}><Image src="/assets/img/plus.png" layout='fill'/></div> New Post</ListGroup.Item></a></Link>
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
    <Row >
      <Col xs="2" style={{marginTop:"100px",fontSize:"0.7rem"}}><LeftSideMenu/></Col>
      <Col xs="7"  style={{marginTop:"100px",maxHeight:"85vh",overflowY:"scroll"}} className="sc1"><Posts/></Col>
      <Col xs="3"  style={{marginTop:"100px"}}><RightSideMenu/><slider/></Col>
    </Row>
    
    </Container>
    </>
  )
}

export default index