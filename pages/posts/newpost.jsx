import React,{useState,useCallback} from 'react';
import { Container,Row,Col,ListGroup,ListGroupItem,Form,Button,Card,Textarea } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import Dropzone, {useDropzone} from 'react-dropzone';
import Cookies from 'js-cookie';


function CreatePost(){
    var [images, setImages] = useState([])

    function MyDropzone() {
      const onDrop = useCallback(acceptedFiles => {
        setImages(acceptedFiles);
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
      return (
        <div className='card' {...getRootProps()} style={{backgroundColor:"#e9e9e9",marginTop:"2rem",padding:"2rem"}}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
      )
    }
    
    function createPost(event){
        event.preventDefault();
        const formData = new FormData();
        const token = Cookies.get('userdata');
        var title=event.target.title.value;
        var postbody=event.target.postbody.value;
        formData.append("title", title);
        formData.append("postbody", postbody);
        images.forEach(image=>{
          formData.append("images", image);
        })
        try {
          axios({
            method: "post",
            url: "http://localhost:3010/posts/upload",
            data: formData,
            headers: { "Content-Type": "multipart/form-data", 
              'Authorization': `Token ${token}` 
             },
        }).then(response=>{
          console.log(response.data);
        });
        } catch(error) {
          console.log(error)
        }
    }
    return(
    <>
    <Card style={{padding:"2rem",marginTop:"2rem",boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",borderRadius:"1rem"}}>
    <Form method='POST' onSubmit={createPost} encType="multipart/form-data">
  <Form.Group className="mb-3">
    <Form.Control name='title' type="text" placeholder="Enter Title" required/>
    <br />
    <Form.Label>Enter Post Description</Form.Label>
    <Form.Control name="postbody" as="textarea" rows={3} />
    <MyDropzone/>
  </Form.Group>
  <Button variant="primary" type="submit" placeholder='Enter Description'>
    Preview Post
  </Button>
</Form>
    </Card>
   
    </>)
}

function LeftSideMenu() {
    return (
      <div className='card mt-3' style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
        <ListGroup  style={{ borderRadius:"2rem" }}>
          <Link href="/posts/newpost"><a><ListGroup.Item style={{display:"flex",alignItems:"center"}}> <div style={{position:"relative",height:"1rem",width:"1rem"}}><Image src="/assets/img/plus.png" layout='fill'/></div>New Post</ListGroup.Item></a></Link>
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

const newpost = () => {
  return (
    <>
    <Navbar/>
    <Container>
    <Row>
      <Col xs="3" style={{marginTop:"100px"}}><LeftSideMenu/></Col>
      <Col xs="6" style={{marginTop:"100px"}}>
<CreatePost/>
      </Col>
      <Col xs="3" style={{marginTop:"100px"}}><RightSideMenu/></Col>
    </Row>
    
    </Container>
    </>
  )
}

export default newpost