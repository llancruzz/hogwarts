import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import ProfilePicture from "./ProfilePicture";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  // Call custom useCurrentUser hook to be able to display icons.
  const currentUser = useCurrentUser();

  // Call custom useSetCurrentUser hook to be able to sign out page.
  const setCurrentUser = useSetCurrentUser();

  // Destructure the values from useClickOutsideToggle hooks.
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  /*
  Handle function to be able to sign out.
  Make request to the logout endpoint in API.
  Set the currentUser to null to reflet the users logged out state.
  */
  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  const createPostIcon = (
    <NavLink
      exact
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >
      <i className="fa-solid fa-wand-sparkles"></i>Create
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/houses"
      >
        <i className="fa-brands fa-fort-awesome"></i>House
      </NavLink>
      <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/feed"
      >
        <i className="fa-solid fa-book-open"></i>Feed
      </NavLink>
      <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
      >
        <i className="fa-solid fa-broom-ball"></i>Liked
      </NavLink>
      <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/contact/create"
      >
        <i className="fa-solid fa-envelope-open-text"></i>Contact
      </NavLink>
      <NavLink exact className={styles.NavLink} onClick={handleSignOut} to="/">
        <i className="fa-solid fa-person-running"></i>Sign out
      </NavLink>
      <NavLink
        exact
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <ProfilePicture
          src={currentUser?.profile_image}
          text="Profile"
          height={40}
        />
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup"
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      fixed="top"
      expand="md"
      variant="light"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo hogwarts" height="100" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && createPostIcon}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
