import React from "react";
import { useState } from "react";
import Test from './Test';

const PostLogin = (props) => {

  const [incoming, setIncoming] = useState('');

  const savingName = (name) =>{
    console.log("Post Login===>", name)
    setIncoming(name);
  }
  // useEffect((nameShow)=>{
  //   savingName()
  // },[savingName()] )
  return (
    <>
      <h1>Post login page {incoming}</h1>
      <Test onSave={savingName}/>
    </>
  );
};

export default PostLogin;
