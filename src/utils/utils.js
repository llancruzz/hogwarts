import { axiosReq } from "../api/axiosDefaults";

/*
Create and export fetchMoreData with two arguments: 
resource  and setResource, so that it can render and update different types of data for InfiniteScroll component.
*/
export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};

// Create and export helper function to follow.
export const followHelper = (profile, clickedProfile, following_id) => {
  return profile.id === clickedProfile.id
    ? // This is the profile I clicked on, update its followers count and set its following id.
      {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id,
      }
    : profile.is_owner
    ? // This is the profile of the logged in user update its following count.
      { ...profile, following_count: profile.following_count + 1 }
    : // This is not the profile the user clicled on or the profile the user owns, return it unchanged.
      profile;
};

// Create and export helper function to ufollow.
export const unfollowHelper = (profile, clickedProfile) => {
  return profile.id === clickedProfile.id
    ? // This is the profile I clicked on, update its followers count and set its following id.
      {
        ...profile,
        followers_count: profile.followers_count - 1,
        following_id: null,
      }
    : profile.is_owner
    ? // This is the profile of the logged in user update its following count.
      { ...profile, following_count: profile.following_count - 1 }
    : // This is not the profile the user clicled on or the profile the user owns, return it unchanged.
      profile;
};
