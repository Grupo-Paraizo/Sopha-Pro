import React from 'react';
import { Page, Main, Header, Footer, ImgContainer, HomeContainer } from './styled';
import HomeBtn from '../../components/Buttons';
import TextHome from '../../components/TextHome';

const Home = () => {
   return (
      <Main>
         <Page>
            <Header>
               <div className="img">
                  <img src="../../../SophaLogo1.svg" alt=""></img>
               </div>
               <HomeBtn />
            </Header>
            <HomeContainer>
               <TextHome />
               <ImgContainer>
                  <img src="../../../SophaLogo.png" alt=""></img>
               </ImgContainer>

            </HomeContainer>
         </Page >
         <Footer><h2 className="footerLink">Como funciona?</h2></Footer>
      </Main>
   )
}
export default Home;