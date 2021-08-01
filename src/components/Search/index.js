// jogar aqui todos os componentes search, searchbox, search button e search input
import React from 'react';
import { Container, Button, Search } from './styled';

const SearchBox = () => {
   return (
      <Container>
         <Search
            placeholder="Profissionais, cidades ou estados">
         </Search>
         <Button>
            Buscar
         </Button>
      </Container>
   )
}

export default SearchBox;