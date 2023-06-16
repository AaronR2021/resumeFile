import React,{useState} from 'react'
import style from './Navbar.module.css';
import Image from 'next/image';
import srcImg from '../public/menu.jpg'
import Link from 'next/link';

function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className={style.navigation}>
    <a href="/" className={style.brandName}>
      Aaron Rebelo
    </a>
    <button className={style.hamburger} onClick={()=>setIsNavExpanded(!isNavExpanded)}>
    <Image src={srcImg} width={20} height={20} alt='Icon'/>
    </button>
    <div
      className={isNavExpanded?`${style.navigationMenu} ${style.expanded}`:`${style.navigationMenu}`}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">Articles</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar