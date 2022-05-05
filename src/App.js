import logo from './logo.svg';
import './App.css';             // css 파일 불러오기
import { useState } from 'react';

function App() {

  let blog = '블로그';
  // state 문법  
  let [title, setTitle] = useState(['아 공부하기 싫다', '집인데도 집가고싶다', '왜 난 햄볶칼 수 없어...']); 
  let [좋아요, 여기는무조건함수가들어가야함] = useState([0, 0, 0]); 

  
  return (
    <div className="App">
      <div className="black-nav">   
        <h4>{ blog }</h4>                      
      </div>
      <div className='list'>
        <h4>{ title[0] }
          <span onClick={ () => { 여기는무조건함수가들어가야함(좋아요+1) }}>😢</span> { 좋아요[0] }
        </h4>
        <p>발행 : 22.05.05</p>                      
      </div>
      <div className='list'>
        <h4>{ title[1] }
          <span onClick={ () => { 여기는무조건함수가들어가야함(좋아요+1) }}>👍</span> { 좋아요[1] } 
        </h4> 
        <p>발행 : 22.05.05</p>                      
      </div>
      <div className='list'>
        <h4>{ title[2] }
          <span onClick={ () => {여기는무조건함수가들어가야함(좋아요+1)}}>😂</span> { 좋아요[2] } 
        </h4>
        <p>Since : 1999.03.04</p>
      </div>
    </div>
  );
}

export default App;
