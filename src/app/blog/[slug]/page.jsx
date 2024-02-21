import styles from "./singlepost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

import { getPost, getUser } from "@/lib/data";

const SinglePostPage = async ({params}) => {
   const { slug } = params;
   
   const postData = await getPost(slug);
   const id = postData.userId;
   const userData = await getUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={postData.img}
          alt=""
          fill
          className={styles.img} 
         />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{postData.title}</h1>
 
        <div className={styles.detail}>
          
          <Suspense fallback={<div>Loading</div>}>
          <PostUser user={userData}/>
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}> 01.01.2024 </span>
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.desc}>
           {postData.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
