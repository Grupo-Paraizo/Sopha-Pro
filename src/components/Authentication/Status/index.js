import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from '../Account';

const Status = () => {
   const [status, setStatus] = useState(false)
   const { getSession, logout } = useContext(AccountContext);

   useEffect(() => {
      getSession().then((session) => {
         console.log("Session: ", session);
         setStatus(true);
      });
      // eslint-disable-next-line
   }, []);

   return (
      <div style={{ fontSize: "24px" }}>
         {status ? <button onClick={logout}>Sair</button> : "Login"}
      </div>
   );
}

export default Status;