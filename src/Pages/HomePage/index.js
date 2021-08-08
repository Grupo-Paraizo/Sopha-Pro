import React from 'react';
import { Page } from './styled';

import HomeBtn from '../../components/Buttons';
import TextHome from '../../components/TextHome';

const Home = () => {
   return (
      <Page>
         <div className="header">
            <HomeBtn>
            </HomeBtn>
         </div>
         <section className="main">
            <div className="contentLeft">
               <TextHome>
               </TextHome>
            </div>
            <div className="phone">
               <img src="../../../phone.png" alt=""></img>
            </div>
         </section>
         <footer><a href="/infos" className="footerLink">Como funciona?</a></footer>
      </Page >
   )
}
export default Home;