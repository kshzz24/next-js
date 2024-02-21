"use client"

import styles from './links.module.css';
import NavLink from "./navLink/navLink";
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from '@/lib/action';
import { auth } from '@/lib/auth';

   const links = [
     {
       title: "Home",
       pathSegment : "/" 
     },
     {
        title: "About",
        pathSegment : "/about" 
      },
      {
        title: "Blog",
        pathSegment : "/blog" 
      },
      {
        title: "Contact",
        pathSegment : "/contact" 
      },

   ];
  //Temporary


const Links =   ({session}) => {

    const [open, setOpen] = useState(false);

   
  return (
    <div className={styles.container}> 
      <div className={styles.links}>
        {
            links.map((link, id) => (    
                
                <NavLink item={link} key = {id}/>
                
                ))
                
            }
        {
            session?.user ? (
                <>
            { 
             session.user?.isAdmin && (
                 <NavLink item = {{pathSegment: "/admin", title: "Admin"}} />
              ) 
            }
            <form action={handleLogout}>

             <button className={styles.btn}>Logout </button>
            </form>
             </>
           ) : (
               <NavLink item = {{pathSegment: "/login", title: "Login"}} />
               )
            }
        </div>
      
        <Image className={styles.menuBtn} src="/menu.png" alt="" width={30} height={30}  onClick={()=> setOpen((prev) => !prev)}  />
            {
                open && (
                    <div className={styles.mobileLinks}>
                    {links.map((link, id) => (
                        <NavLink item={link} key = {id} />
                    ))}
               </div>
            )
        }
            
    </div>
  )
}

export default Links