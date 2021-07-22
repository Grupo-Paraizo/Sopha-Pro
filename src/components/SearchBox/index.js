import React from 'react';
import SearchInput from '../SearchInput';
import SearchBtn from '../SearchButton';
import { Container } from './styled';

const SearchContainer = () => {
   return (
      <Container>
         <SearchInput />
         <SearchBtn />
      </Container>
   );
}
export default SearchContainer;