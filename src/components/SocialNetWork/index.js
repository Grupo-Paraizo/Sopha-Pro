import React from 'react';
import { List } from './styled';

function ContactList() {
   return (
      <List>
         <li><a href=""><img src="../../../Whatsapp.svg" alt=""></img></a></li>

         <li><a href=""><img src="../../../Linkedin.svg" alt=""></img></a></li>

         <li><a href=""><img src="../../../Facebook.svg" alt=""></img></a></li>

         <li><a href=""><img src="../../../Instagram.svg" alt=""></img></a></li>
      </List>
   );
}
export default ContactList;