import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import { Badge } from "react-bootstrap";
import badgeStyles from "../../styles/PostsPage.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import appStyles from "../../App.module.css";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasloaded] = useState(false);
  const [house, setHouse] = useState(null);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(
          `/posts/?${filter}search=${query}${
            house !== null ? `&house=${house}` : ""
          }`
        );
        setPosts(data);
        setHasloaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    setHasloaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, house, pathname, currentUser]);

  return (
    <Row className="h-auto m-1">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        {/* Search posts text and filter for each House */}
        <Badge
          variant="dark"
          pill
          className={badgeStyles.Badge}
          onClick={() => setHouse(null)}
        >
          ALL
        </Badge>
        <Badge
          variant="dark"
          pill
          className={badgeStyles.Badge}
          onClick={() => setHouse("Gryffindor")}
        >
          Gryffindor
        </Badge>
        <Badge
          variant="dark"
          pill
          className={badgeStyles.Badge}
          onClick={() => setHouse("Slytherin")}
        >
          Slytherin
        </Badge>
        <Badge
          variant="dark"
          pill
          className={badgeStyles.Badge}
          onClick={() => setHouse("Ravenclaw")}
        >
          Ravenclaw
        </Badge>
        <Badge
          variant="dark"
          pill
          className={badgeStyles.Badge}
          onClick={() => setHouse("Hufflepuff")}
        >
          Hufflepuff
        </Badge>

        {/* Text search bar filters and keywords */}

        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <i className={`fas fa-search ${styles.SearchIcon}`} />
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>

        {/* List of posts : map over posts and render each one, show no results asset and show loading spinner */}
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
                style={{ overflow: "inherit" }}
                children={posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Container className={styles.Container}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostsPage;
