import React from 'react';
import { Page, Main, Header, Footer, ImgContainer } from './styled';
import HomeBtn from '../../components/Buttons';
import TextHome from '../../components/TextHome';

const Home = () => {
   return (
      <Main>
         <Page>
            <Header>
               <ImgContainer>
                  <img src="../../../SophaLogo1.svg" alt=""></img>
                  <img src="../../../SophaLogo2.svg" alt=""></img>
               </ImgContainer>
               <div>
                  <HomeBtn />
               </div>
            </Header>
            <div className="contentLeft">
               <TextHome />
            </div>
         </Page >
         <Footer><h2 className="footerLink">Como funciona?</h2></Footer>
      </Main>
   )
}
export default Home;