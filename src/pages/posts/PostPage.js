import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

function PostPage() {
  /*
  Fetch data about the post with the id that is in the url. 
  Use and  auto-import the useParams hook and destructure it in place with 
  the name of the parameter that it is set in the route, which is ‘id’.  
  */
  const { id } = useParams();

  /* 
  Store the values for inputs on Post Form using useState()
  Destructure the useState hook with:
  post and setPost.
  */
  const [post, setPost] = useState({ results: [] });

  /*
  Create async function and useEffect to fetch the post on mount.
  Make request to the API.
  */
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
        console.log(post);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <Row className="h-100 m-1">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <Post {...post.results[0]} setPosts={setPost} />
        <Container className={appStyles.Content}>Comments</Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default PostPage;
