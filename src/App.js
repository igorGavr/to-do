import React from 'react';

import './App.css'
import {Actor} from "./components/Actor";
import {Users} from "./components/Users";
const actors = [
    {id:1, name: 'Tom', img: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Tom_Tom_and_Jerry.png'},
    {id:2, name: 'Jerry', img: 'https://cdnb.artstation.com/p/assets/images/images/016/566/013/large/jerome-moore-jerry-mouse-color-copy.jpg?1552619565'},
    {id:3, name: 'BigMom', img: 'https://i.pinimg.com/originals/42/63/73/4263730e595daf27cd55e59c6d872ec6.jpg'},
    {id:4, name: 'Spike', img: 'https://i.pinimg.com/564x/b8/2a/d3/b82ad3de5935dc770d3c37da0648ee7b.jpg'},
]
const App = () => {
  return (
      <div>
          <Users/>
          {actors.map(actor=><Actor key={actor.id} name={actor.name} img={actor.img}/>)}
      </div>
  );
};

export default App;
