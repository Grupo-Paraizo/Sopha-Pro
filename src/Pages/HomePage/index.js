import React from 'react';
import { Page } from './styled';
import Header from '../../components/Header/styled';
import HomeBtn from '../../components/Buttons';
import TextHome from '../../components/TextHome';

const Home = () => {
   return (
      <Page>
         <Header>
            <HomeBtn>
            </HomeBtn>
            <TextHome>
            </TextHome>
         </Header>
      </Page >
   )
}
export default Home;