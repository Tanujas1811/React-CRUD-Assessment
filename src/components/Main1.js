import React from "react";
import Home from './Home';
import PostForm from "./PostForm";
import Posts from "./Posts";

const Main1 = props => {
  const {activetab,tab3} = props;
    console.log(activetab)
  switch (activetab) {
    case 'tab1':
      return <Home/>;
    case 'tab2':
      return <PostForm action={tab3}/>;
    case 'tab3':
        return <Posts/>;
    default:
      return null;
  }
}

export default Main1;