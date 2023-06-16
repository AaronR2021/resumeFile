import React from 'react'
import style from './Hero.module.css'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

import GitHubIcon from '@mui/icons-material/GitHub';


import { red,green,black } from '@mui/material/colors';
import Image from 'next/image';
import srcImage from '../public/profile.jpg'

function Hero() {
  return (
    <div className={style.wavyBackground}>
        <div className={style.Banner}>
        {/*Image part*/}
            <div className={style.imageInfo}>
                <div >
                    {/*Image Goes Here*/}
                    <Image src={srcImage} width={150} height={150} alt='AaronRebelo' className={style.ImgRounded}/>
                </div>
                <div>
                    {/*Information*/}
                    <p className={style.Title}>Web Developer</p>
                    <p className={style.Name}>Aaron</p>
                    <p className={style.Name}>Rebelo</p>

                </div>
            </div>
                    {/*name-Info part */}
            <div className={style.contactInfoList}>
                    {/*contact-Info a part */}
                <ul className={style.contactInfo}>
                    <li className={style.logo}><span><GitHubIcon sx={{ color: black }} /></span><span className={style.info}><a href="https://github.com/AaronR2021">Github/AaronR2021</a></span></li>
                    <li className={style.logo}><span ><AlternateEmailIcon sx={{ color: red[500] }} /></span><span className={style.info}><a href="mailto:aaronrebelo.personal@gmail.com">aaronrebelo.personal@gmail.com</a></span></li>
                    <li className={style.logo}><span ><LinkedInIcon color="primary" /></span><span className={style.info}><a href="https://www.linkedin.com/in/aaron-rebelo/">linkedin.com/aaron-rebelo</a></span></li>
                    <li className={style.logo}><span ><SmartphoneIcon sx={{ color: green[500] }} /></span><span className={style.info}><a href="tel:+917899100223">+91-7899100223</a></span></li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Hero