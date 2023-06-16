import React from "react";
import style from './Body.module.css';

function Body() {
  return (
    <div className={style.bodyOuterBox}>
        <div className={style.skillBox}>
            <h4 className={style.titleHandler}>Skills</h4>
            <ul className={style.skillList}>
                <li className={style.skillIndivisual}>Solidity</li>
                <li className={style.skillIndivisual}>Hardhat</li>
                <li className={style.skillIndivisual}>Ethers.js</li>
                <li className={style.skillIndivisual}>React</li>
                <li className={style.skillIndivisual}>Mongoose</li>
                <li className={style.skillIndivisual}>Sequelize</li>
                <li className={style.skillIndivisual}>Express</li>
                <li className={style.skillIndivisual}>Node</li>
                <li className={style.skillIndivisual}>Swagger</li>
                <li className={style.skillIndivisual}>Next</li>
            </ul>
        </div>
        <div className={style.leftBoxInfo}>
     
      <div className={style.aboutMeBox}>
        <h3 className={style.titleHandler}>About Me</h3>
        <p className={style.textReadInfo}>
          Experienced MERN stack developer with a strong passion for web3
          development. Seeking an opportunity in a forward-thinking company that
          fosters a positive learning environment, where I can apply my skills
          to contribute to the organization's growth and enhance my own
          professional journey.
        </p>
      </div>

      <div>
        <h3 className={style.titleHandler}>Education & Learning</h3>
        <p className={style.textReadInfo}>Bachelor Of Engineering(CSE)-Acharya Institute Of Technology(VTU)</p>
        <p className={style.textReadInfo}>MERN Developer Course from Altcampus</p>
        <p className={style.textReadInfo}>WEB3 Developer Course from BlockTrain</p>
      </div>

      <div>
        <h3 className={style.titleHandler}>Work Experience</h3>
        <div>
          <strong className={style.strong}>MERN Stack Developer - Utkal Labs (02/2022 - 09/2022)</strong>
          <ul className={`${style.textReadInfo} ${style.noBulletPoint}`}>
            <li>
              Worked on a surveillance application to safeguard remote
              properties, implementing features such as scheduled feeds, video
              calling, map navigation, and image comparison.
            </li>
            <li >
              Contributed to an application focused on managing KYC for
              customers and registering employees, handling processes like KYC
              approval/rejection, role management, PDF report generation, and
              service area allocation.
            </li>
            <li>
              Developed an application for creating virtual fences in Google
              Maps, allowing users to draw fences based on their chosen
              coordinates and providing features like alert notifications,
              driving location display, and user identification.
            </li>
          </ul>
        </div>

        <div>
          <strong className={style.strong}>MERN Stack Developer - Neviton Softech Pvt Ltd. (09/2022 - 03/2023)</strong>
          <ul className={`${style.textReadInfo} ${style.noBulletPoint}`}>
            <li>
            Worked on projects involving the development of an e-commerce module tailored specifically for a prominent pharmaceutical company. My contributions to this endeavor encompassed various aspects of the module's construction, resulting in a robust and feature-rich solution.
            </li>
            <li>
            Developed and implemented multiple dashboards for a partner portal module, catering to the needs of various vendors, Contributed to the development of intuitive user interfaces, ensuring seamless navigation and efficient data visualization. Conducted thorough testing and debugging to identify and resolve any issues, ensuring the delivery of high-quality and error-free dashboards.
            </li>
            <li>
            worked on writing scripts to automate reading, cleaning and rearranging mock data from files and adding them in appropreate tables in the database.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h4 className={style.titleHandler}>Side Projects</h4>
        <strong className={style.strong}>Personal Project</strong>

        <ul className={`${style.textReadInfo} ${style.noBulletPoint}`}>
          <a href='https://publicnovel-eth.vercel.app/home' className={style.clickable}>
          <li>Public Novel</li>
          </a>
        </ul>
        <strong className={style.strong}>Block Train:</strong>
        <ul className={`${style.textReadInfo} ${style.noBulletPoint}`}>
        <li>Airdrop Project</li>
        <li>ERC20 tokens</li>
        <li>ERC1155 tokens</li>
        <li>ERC721 tokens</li>
        <li>SoulBound token</li>
        </ul>
        <strong className={style.strong}>speedrunethereum:</strong>
        <ul className={`${style.textReadInfo} ${style.noBulletPoint}`}>
        <li>Simple NFT Example</li>
        <li>Decentralized Staking App</li>
        <li>Dice Game</li>
        <li>ERC721 tokens</li>
        <li>MultiSig Wallet</li>
        </ul>
      </div>


        </div>
    </div>
  );
}

export default Body;
