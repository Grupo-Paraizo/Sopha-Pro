import React from 'react';
import { Page } from './styled';
import HomeBtn from '../../components/Buttons';
import TextHome from '../../components/TextHome';

const Home = () => {
   return (
      <Page>

         <div className="header">
            <HomeBtn />
         </div>
         <section className="main">
            <div className="contentLeft">
               <TextHome />
            </div>
            <div className="phone">
               <img src="../../../phone.png" alt=""></img>
            </div>
         </section>
         <footer><h2 className="footerLink">Como funciona?</h2></footer>
      </Page >
   )
}
export default Home;