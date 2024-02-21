'use client'
import Link from "next/link";
 import styles from './NavLink.module.css';

import {usePathname } from 'next/navigation';

const NavLink = ({item}) => {
   const pathname = usePathname();
  
   console.log(pathname);
   
   return (
    <Link className={`${styles.container} ${pathname === item.pathSegment && styles.active }`}
    href= {item.pathSegment}>{item.title}</Link> 
  )
}

export default NavLink