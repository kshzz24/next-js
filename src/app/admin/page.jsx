import styles from "./adminPage.module.css";
import { Suspense } from "react";
import { auth } from "@/lib/auth";
import AdminPost from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForms/adminUserForms";

const AdminPage = async () => {
  const session =  await auth();
  return (
    <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.col}>
        <Suspense fallback={<div>Loading...</div>}>
          <AdminPost />
        </Suspense>
      </div>
      <div className={styles.col}>
        <AdminPostForm userId = {session.user.id} />
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.col}>
        <Suspense fallback={<div>Loading...</div>}>
          <AdminUsers />
        </Suspense>
      </div>
      <div className={styles.col}>
        <AdminUserForm />
      </div>
    </div>
  </div>
  )
}

export default AdminPage