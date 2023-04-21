# Hogwarts

Hogwarts is a social media platform that has been created based on the beloved Harry Potter saga. The main objective of this platform is to enable users to view posts that are related to the saga. Users who have registered on the platform are able to list posts and access the content that is contained within them.

Only registered users can create, update, and delete posts.Registered users can follow, like, and comment on posts.A user's profile can be viewed by other users and visitors.Profile update functionality is restricted to the profile owner.The CRUD functionality for Likes, Followers, Contacts and Comments is restricted to the respective user."

This is my 5th portfolio project developed as part of the [Code Institute Diploma in Full Stack Development](https://codeinstitute.net/ie/full-stack-software-development-diploma/). It was created to demonstrate skills acquired using the [Django REST Framework](https://www.django-rest-framework.org/) and [React](https://react.dev/) JavaScript library to develop the API and Frontend respectively.

![Website Preview](docs/responsive-web.png)

## Demo

[Frontend - Deployment](https://hogwarts-hf.herokuapp.com/)

### API Project Links

- [API - Repository](https://github.com/llancruzz/hogwarts-api)
- [API - Deployment](https://hogwarts-hp.herokuapp.com/)

## Table of Contents

- [User Experience (UX)](#user-experience-ux)
  - [User Stories](#user-stories)
  - [Agile Methodology](#agile-methodology)
  - [Design](#design)
    - [Wireframes](#wireframes)
    - [Color Scheme](#color-scheme)
    - [Typography](#typography)
    - [Images and Iconography](#images-and-iconography)
- [Features](#features)
  - [Home Page](#home-page)
  - [Navigation](#navigation)
  - [Register (Sign up) / Login](#register-sign-up--login)
  - [Post Creation / Edit Form](#post-creation--edit-form)
  - [Post List View and Search Bar](#post-list-view-and-search-bar)
  - [Post Detail View](#post-detail-view)
  - [Comment List View](#comment-list-view)
  - [Comment Detail View](#comment-detail-view)
  - [Feed](#feed)
  - [Liked](#liked)
  - [Most Followed Users](#most-following-users)
  - [Profile](#profile)
  - [Profile Edit Form](#profile-edit-form)
  - [Username and Password Edit Forms](#username-and-password-edit-forms)
  - [Contact](#contact)
  - [House Profile](#house-profile)
  - [Icons](#icons)
  - [Not Found and Results Page](#not-found-and-results-page)
  - [Components](#components)
    - [Components used in this application](#components-used-in-this-application)
  - [Future Features](#future-features)
- [Testing](#testing)
  - [Bugs](#bugs)
    - [Fixed Bugs](#fixed-bugs)
    - [Remaining Bugs](#remaining-bugs)
- [Technologies Used](#technologies-used)
  - [Languages and Frameworks Used](#languages-and-frameworks-used)
  - [Node Packages / Dependencies Used](#node-packages--dependencies-used)
  - [Programs and Tools Used](#programs-and-tools-used)
- [Deployment](#deployment)
  - [Forking the GitHub Repository](#forking-the-github-repository)
  - [Making a Local Clone](#making-a-local-clone)
  - [Deploying with Heroku](#deploying-with-heroku)
  - [Linking with the API/backend](#linking-with-the-apibackend)
- [Credits](#credits)
  - [Code](#code)
  - [Media](#media)
  - [Acknowledgments](#acknowledgments)

## User Experience (UX)

The initial aims of the project, which formed the basis for user story creation, were to produce a web application that allows registered users to post their image, content and chose its house class of Hogwarts, and search for posts by other users for knowing each other. Key goals for the site were identified as below and used to construct user stories:

- Allow users to search for posts using a filter.
- Allow posts to be liked for future review.
- Allow popular sellers to be followed so new listings can be seen via a newsfeed.
- Registered users can leave comments on posts.
- Site Owners can create / edit / delete its own post.
- Registered users can read and comment on aother user's posts.
- Registered and unregistered users can contact the admin of the site for future issues on web application.

### User Stories

All User Stories can be viewed in the projects GitHub Repository and have been mapped to Epics on the projects [Kanban board](https://github.com/users/llancruzz/projects/10).
Acceptance criteria for each user story can be viewed by opening each User Story on the projects Kanban Board (linked above) or from the table view [here](https://github.com/users/llancruzz/projects/10/views/10). Alternatively all User Stories can be found in a separate readme file [here](USERSTORIES.md).

### Agile Methodology

An Agile Methodology was employed to manage the development of this project. GitHub Projects was used to create User Stories as Issues, each with acceptance criteria and tasks. User Stories were then grouped into Milestones to represent the Epics each belong to and assigned a priority using the MOSCOW prioritization technique.

User Stories were then assigned to 1 of the 4 planned Sprints (or Iterations) to cover the main development phase of the project. The projects Kanban board can be viewed [here](https://github.com/users/llancruzz/projects/10).

Pull requests were linked with a user story when they contributed to completion of the acceptance criteria.

### Design

#### Wireframes

Wireframes were created to visualize the layout of the site and as a reference when translating those designs to the final product. Care was taken at this stage to consider a layout that would work well across a diverse range of viewports. Desktop and Mobile wireframes can be viewed using the button below:

<details><summary>Wireframes for Home Page Authorized</summary>
Home Page Authorized:

![home page authorised](docs/home-page-authorized.png)
</details>
<details><summary>Wireframes for Home Page Unauthorized</summary>
Home Page Unauthorized:

![home page unauthorised](docs/home-page-unauthorized.png)
</details>
<details><summary>Wireframes for Create Post Page</summary>
Create Post Page Authorized:

![create post page authorized](docs/create-page-authorized.png)
</details>
<details><summary>Wireframes for Comment on a Post Page</summary>
Comment on a Post Page:

![comment on a post page](docs/comment-post-page-authorized.png)
</details>
<details><summary>Wireframes for Profile Page</summary>
Profile Page Authorized: 3 Dots means:  EDIT | Profile | Username | Password

![profile page](docs/profile-page-authorized.png)
</details>
<details><summary>Wireframes for Contact Page</summary>
Contact Page Authorized:

![Contact page](docs/contact-page-authorized.png)
</details>
<details><summary>Wireframes for House Profile</summary>
House Profile Authorized:

![house profile page](docs/house-profile-page.png)
</details>
<details><summary>Wireframes for Not Found / Not Results Page</summary>
Not Found | Not Results Page:

![not found not results page](docs/not-found-not-results-page.png)
</details>
<details><summary>Wireframes for Sign In Page</summary>
Sign In Page:

![sign in page](docs/signin-page.png)
</details>
<details><summary>Wireframes for Sign Out Page</summary>
Sign Up Page:

![sign up page](docs/signup-page.png)
</details>

#### Color Scheme

The site's color scheme was intentionally kept to a minimum to ensure clear focus, emphasize status information, and convey a professional aesthetic.

![colour schema](docs/hogwarts.png)


#### Typography

Google fonts was used in this project with both fonts selected for their legibility and simplicity:

1. [Link the font used here](https://fonts.google.com/specimen/DM+Sans)

#### Images and Iconography

The site logo was sourced from [PNGEGG](https://www.pngegg.com/). Please refer to the [Credits section](#credits) for more detail.

## Features

### Home Page

- The home page serves as the entrypoint for the site.
- It contains the navigation bar, a list of posts, and the search bar so users can interact with site content straight away.
- User Stories covered:

![Home Page](docs/home-page-web.png)

### Navigation

![Navigation Page](docs/navbar-page.png)

### Register (Sign up) / Login

![Resgister Sign up Page](docs/sign-up-page.png)
![Register Sign in Page](docs/sign-in-page.png)

### Post Creation / Edit Form

![Post create Page](docs/create-post-page.png)

### Post List View and Search Bar

![Post list view search bar Page](docs/post-search-list-view.png)

### Post Detail View

![Post Detail Page](docs/edit-post-page.png)

### Comment List View

![Comment list Page](docs/comment-post-page.png)

### Comment Detail View

![Comment Detail Page](docs/edit-comment-post-page.png)

### Feed

![Feed Page](docs/feed.png)

### Liked

![Liked Page](docs/liked.png)

### Most Followed Users

![Most Followed Page](docs/most-followed-page.png)

### Profile

![Profile Page](docs/edit-page.png)

### Profile Edit Form

![Profile Edit Page](docs/edit-profile-page.png)

### Username and Password Edit Forms

![Username Page](docs/username-edit-page.png)
![Password Page](docs/password-edit-page.png)

### Contact

![Contact Page](docs/contact-page.png)

### House Profile

![House Profile Page](#)

### Icons

![Icons Page](docs/icons.png)

### Not Found and Results Page

![not found page](docs/not-found.png)
![not results page](docs/not-results.png)

### Components

Components in ReactJS are independent and reusable blocks of code that simplify developments by allowing a developer to break a user interface into elements that can reused across one or multiple applications.

For more details about Component, check my repository that I have created throughout Code Institute clicking in:
[Components](https://github.com/llancruzz/react-components)

A number of components were created during the development of this project and are highlighted below. Benefits common to all components are:

- Ease of development by consolidating code into a single re-usable component that could be used in different parts of the application and debugged by modifying code in a single location.
- Allowed for consistent user experience across pages without code duplication and the complexities of managing duplicated code.

#### Components used in this application

- Asset
  - Used to display a loading spinner, upload image (planned to be used when multiple image uploads are introduced to the site in future versions) and a message when search filters return no results.
  - UX (user experience) is improved by the loading spinner as users are notified when content is being fetched by the application, rather then being presented with a blank or partially complete page while data is loaded.
  - UX is improved by the feedback provided to users when a search returns no results as this provides feedback and prompts them to adjust their search criteria.

- Profile Pciture
  - Used to display the user avatar in different variations throughout the site (based on use and viewport size).
  - UX experience is improved as users can quickly identify the author of posts and their authentication state.

- More Actions Dropdown
  - This component was used on the profile, property detail and note components to present options for object editing and deletion.
  - UX was improved by presenting a consistent menu throughout the site while allowing for different functionality by passing handler functions as arguments (props) to the component.

- NavBar
  - The navigation bar appears on every page and contributes to an improved user experience by providing users to access the majority of site functionality in a consistent way.
  - The Navbar component displays different links and layouts based on authentication state and as such contains a lot of conditional logic. To not have to duplicate this code across each page and have a reusable component saved time and effort during the development cycle.

- NotFound
  - This component is displayed when a user navigates to a resource that doesn't exist.
  - It improves the user experience by providing feedback when an error has occurred and allowing the NavBar to remain accessible so they can continue to use the site.

### Future Features

- Lorem Ipsum

## Testing

Separate testing documentation can be viewed [here](TESTING.md).

### Bugs

#### Fixed Bugs
- Lorem Ipsum
#### Remaining Bugs

No known remaining bugs.

## Technologies Used

### Languages and Frameworks Used

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)
- [React - JavaScript library](https://react.dev/)

### Node Packages / Dependencies Used

- [React Bootstrap](https://react-bootstrap.github.io/) - Component-based library that provides native Bootstrap components as pure React components. Used to create a responsive application/component UI.
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js. Used to make HTTP requests from throughout the application.
- [jwt-decode](https://github.com/auth0/jwt-decode) - Used to decode and extract information from a JWT token.
- react-router-dom - Routing library for the React Javascript library. Used to display different components based on the URL entered in the browser.
- [react-google-maps/api](https://react-google-maps-api-docs.netlify.app/) - Provides bindings to the Google Maps JavaScript API (v3) and lets it be used in applications as React components. Used to display a map of the local area on the property page.
- [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component) - Component which manages the loading of paginated content. Used to automatically load more content as the user browses site content.
- [react-textarea-autosize](https://github.com/Andarist/react-textarea-autosize) - A replacement for the textarea component that automatically resizes. Used to improve the user experience as they create notes.

### Programs and Tools Used

- [dbdiagram](https://dbdiagram.io/home) - Create Database Schema/Entity-Relationship Diagrams
- [Gitpod:](https://code.visualstudio.com/)
  - Visual Studio Code was used as my code editor for this project. A full list
    of plugins used can be found later in this section.
- [Git](https://git-scm.com/)
  - Git was used for version control, using the terminal to commit to Git and
    Push to GitHub.
- [GitHub:](https://github.com/)
  - GitHub is used to store the projects code after being pushed from Git.
- The following modules were installed or enabled in [Gitpod](https://code.visualstudio.com/) to assist with formatting and code linting:
  - [ESLint](https://eslint.org/) - Code Linter.
  - [Prettier](https://prettier.io/) - Code Formatting.


## Deployment

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on
our GitHub account to view and/or make changes without affecting the original
repository by using the following steps...

1. Log in to GitHub and locate the [GitHub
   Repository](https://github.com/ianmeigh/property-direct-backend)
1. At the top of the Repository (not top of page) just above the "Settings"
   Button on the menu, locate the "Fork" Button.
1. Click the button (not the number to the right) and you should now have a copy
   of the original repository in your GitHub account.

### Making a Local Clone

**NOTE**: It is a requirement of the project that you have Python version 3.8 or higher installed locally.

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/llancruzz/hogwarts-api).
1. Under the repository name, click "Code".
1. To clone the repository using HTTPS, under "HTTPS", copy the link.
1. Open your local terminal with git installed
1. Change the current working directory to the location where you want the cloned directory to be created.
1. Type `git clone`, and then paste the URL you copied in Step 3.

    ```console
    ~$ git clone https://github.com/llancruzz/hogwarts-api.git
    ```

1. Press Enter. Your local clone will be created.

    ```console
    $ git clone https://github.com/llancruzz/hogwarts-api.git
    > Cloning into `test-dir`...
    > remote: Counting objects: 10, done.
    > remote: Compressing objects: 100% (8/8), done.
    > remove: Total 10 (delta 1), reused 10 (delta 1)
    > Unpacking objects: 100% (10/10), done.
    ```

    [Click here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) for a more detailed explanation of the process above with pictures.

1. Change the current working directory to the cloned project folder (this will be a child directory in the location you cloned the project).

1. This guide assumes you have Node.js and npm installed locally, if this is not the case please install these now.
1. From the terminal run the command `npm install` to install all project dependencies.
1. Run the command `npm start` to run the application.

### Deploying with Heroku

**NOTE**: It is a prerequisite of deployment to Heroku that you already have access to the following:

**NOTE**: It is assumed you have followed all deployment instructions listed in this readme starting with the section titled 'Forking the GitHub Repository'.

1. Log in to [Heroku](https://www.heroku.com/) and if not taken there automatically, navigate to your personal app dashboard.
2. At the top of the page locate the 'New' drop down, click it and then select 'Create new app'.
3. Give your application a unique name, select a region appropriate to your location and click the 'Create app' button.
4. Your app should now be created. From the menu towards the top of the page select the 'Settings' section and click 'Reveal Config Vars' in the Config vars section. Enter the following key / value pairings:
5. Navigate to the 'Deploy' page using the menu towards the top of the page.
6. Select 'GitHub' from the 'Deployment method' section and you will be prompted to 'Connect to GitHub'.
7. Once connected to your GitHub account you will be able to search for your repository which contains the forked 'Support-Hub' repository.
8. Once the repository is found click 'Connect'.
9. At the bottom of the page find the section named 'Manual deploy', select the 'main' branch in the drop down and click the 'Deploy' button.
10. Once deployment is complete, click the 'View' button to load the URL of the deployed application.

### Linking with the API/backend

You will need to ensure you have set the `axios.defaults.baseURL` in the `api/axiosDefaults.jsx` file to the url of your deployed version of th API.
You should then update the `CLIENT_ORIGIN` config variable in your deployed version of the API to ensure you will be able to make authenticated requests to this API.

## Credits

### Code

- The Moments tutorial produced by Code institute is credited throughout this project as it was used to create the foundations on which I built upon to create my project.
- [React documentation](https://reactjs.org/docs/getting-started.html) - Was used throughout development to gain a better understanding of Hooks.
- [React Bootstrap documentation and examples](https://react-bootstrap.github.io/components/alerts) - Used as a reference when building responsive component layouts.

### Media

- Post Images for demo post content and users avatars were taken from [unsplash](https://unsplash.com/) and [iStock](https://www.istockphoto.com/).

### Acknowledgments

As always a huge thank you to my partner for his patience and support throughout this project.
