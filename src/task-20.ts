import axios from "axios";
interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}
const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};
export async function logThreePosts() {
  const posts = await fetchPosts();
  for (let i = 0; i < 3; i++) {
    console.log(`Title: ${posts[i].title} \nBody: ${posts[i].body}`);
  }
}

export default fetchPosts;
