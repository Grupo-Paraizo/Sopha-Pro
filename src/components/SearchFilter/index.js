import React from 'react';
import { SearchContainer } from './styled';

function SearchFilter() {
   return (
      <SearchContainer>
         <button>
            <img src="../../../iconList.svg" alt=""></img>
            <p>Filtros de busca</p>
         </button>

      </SearchContainer>
   );
}
export default SearchFilter;