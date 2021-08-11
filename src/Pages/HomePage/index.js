import React from 'react';
import { Page, Main, Header, Footer, ImgContainer, HomeContainer } from './styled';
import HomeBtn from '../../components/Buttons';
import TextHome from '../../components/TextHome';

const Home = () => {
   return (
      <Main>
         <Page>
            <Header>
               <HomeBtn />
            </Header>
            <HomeContainer>
               <ImgContainer>
                  <img src="../../../SophaLogo1.svg" alt=""></img>
                  <img src="../../../SophaLogo2.svg" alt=""></img>
               </ImgContainer>
               <TextHome />
            </HomeContainer>
         </Page >
         <Footer><h2 className="footerLink">Como funciona?</h2></Footer>
      </Main>
   )
}
export default Home;