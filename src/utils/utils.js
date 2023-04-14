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
