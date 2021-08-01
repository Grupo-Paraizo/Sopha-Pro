// jogar aqui todos os componentes search, searchbox, search button e search input
import React from 'react';
import { Container, Button, Search } from './styled';

const SearchBox = () => {
   return (
      <Container>
         <Search>
            <button type="submit">
               <img src="../../../lupa.svg" alt=""></img>
            </button>
            <input type="text"
               placeholder="Profissionais, cidades ou estados">
            </input>
         </Search>

         <Button>
            Buscar
         </Button>
      </Container>
   )
}

export default SearchBox;