import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

const getPostFromAPI = async () =>{
   const res = await fetch("http://localhost:3000/api/blog");
   if(!res.ok){
    console.log("Error in fetching Data from API");
   }
   return await res.json();
}

const Blog = async () => {
  // const posts =  await getPosts();
  const posts =  await getPostFromAPI();
  return (
    <div className={styles.container}>
      {
         posts.map((post) => (
          <div className={styles.post} key={post.id}>
          <PostCard  post = {post} />
        </div>
         ))
      }
       
  
    </div>
  );
};

export default Blog;
