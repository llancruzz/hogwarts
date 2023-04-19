import { rest } from "msw";

// Mock response: url from axios default file.
const baseURL = "https://hogwarts-hp.herokuapp.com/";

// Store the mocked request handlers in a array.
export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 3,
        username: "lancruz",
        email: "alancruzsilva@gmail.com",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image:
          "https://res.cloudinary.com/llancruzz/image/upload/v1/media/images/profile-pic_yeczcm",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
