/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// function은 하나의 Component
function App() {
  // ES6 destructuring 문법
  // [10, 100]; 이 두개 데이터를 변수에 담고 싶을 때
  // array, object에 있던 자료를 변수에 쉽게 담고 싶을 때
  // var [a,b] = [10, 100];
  // [state 데이터, state 데이터 변경 함수]

  // 데이터를 저장 할 수 있는 방법 state // 변수 대신 쓰는 데이터 저장공간, useState()를 이용해 만들어야 함
  // 데이터 보관 방법
  // 1. 변수에 넣거나
  // 2. state에 넣거나
      // // 1. {useState} 상단에 첨부
         // 2. useState(데이터) React의 내장 함수를 사용한다는 의미

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 코트 추천', '강남 우동 맛집']); 
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false); // UI 보임/안보임 정보를 state로 저장, if문을 이용해 state가 true일 때 보여지게 함
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  let posts = '강남 고기 맛집';
  let divStyle = { color : 'white', fontSize : '30px'};

  var 어레이 = [2,3,4];
  var 뉴어레이 = 어레이.map(function(a) {
      return a * 2;
  });

  function 제목바꾸기() {
    // 데이터를 복사해서 수정 후 사용하기, 등호를 사용한 복사가 아닌 deep copy를 해야 함, 등호를 사용한 복사는 복사가 아닌 값 공유
    // 값을 공유하는 것이아닌 완전히 새로운 독립적인 값을 가지는 데이터 생성 ... 사용 <Array, Object state 데이터 수정>
    var newArray = [...글제목]; 
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  function 정렬() {
    var newArray = [...글제목];
    newArray.sort();
    글제목변경(newArray);
  }

  addEventListener('click', ()=>{ // () => ES6부터 사용 가능 

  })

  return ( // js함수 안에 html 작성, HTML처럼 생긴 JSX 문법, HTML 대용 
    <div className="App">
      <div className="black-nav"> 
        <div style={divStyle}>개발 Blog</div>
      </div>
      <button onClick={ 정렬 }>가나다순 정렬</button>

      {
        글제목.map(function(a, i){ // 글제목 Array 안에 있는 하나하나의 데이터를 파라미터에 할당
          return  (
          <div className="list" key={i}> 
          {
            i === 0
            ? <h3 onClick={ ()=> { 누른제목변경(i) } }>{ a }<span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span>{ 따봉 }</h3>
            : <h3>{ a }</h3>
          }
          <p>2월 17일 발행</p>
          <hr/>
          </div>
          )
        })
      }

      <div className="publish">
        <input onChange={ (e)=>{ 입력값변경(e.target.value) } }/>
        <button onClick={ ()=>{ 
          var arrayCopy =  [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경( arrayCopy );
        } }>저장</button>
      </div>



        <button onclick={ ()=> { 누른제목변경(0) } }>버튼</button>
        <button onclick={ ()=> { 누른제목변경(1) } }>버튼</button>
        <button onclick={ ()=> { 누른제목변경(2) } }>버튼</button>
      {
        /* if문 대신 중괄호 안에 삼항연산자를 사용해 조건식을 만들 수 있음 */
        modal === true
        ? <Modal 글제목={ 글제목 } 누른제목={ 누른제목 } 입력값={ 입력값 } /> /*Component : HTML을 한 단어로 줄여서 쓸 수 있는 방법, 일종의 자바스크립트 표현식/자료형 -> 온갖 곳에 집어넣을 수 있음*/
        // props로 자식에게 state 전해주는 법 <자식컴포넌트 작명={state명} />
        : null
      }

      <Profile />

    </div>
  );
}

// function은 하나의 Component
// 어떤 UI를 Component로 만드는게 좋을까 -> 반복출현하는 HTML 덩어리들, 자주 변경되는 HTML UI들, 다른 페이지 만드는 경우
// Component 많이 만들경우 단점 : state 사용 복잡해짐 (상위 Component에서 만든 state 사용하려면 props 문법을 이용해야 함) 
function Modal(props) {
  return (
    <div className="modal">
    <h2>{props.글제목[props.누른제목]}</h2>
    <p>날씨</p>
    <p>{props.입력값}</p>
  </div>
  )
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name : 'Kim', age : 30 }
  }

  changeName() {
    this.setState( {name: 'Park'} )
  }

  render(){
    return (
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 { this.state.name }</p>
        <button onClick={ this.changeName.bind(this) }>버튼</button>
      </div>
    )
  }
}

// App 컴포넌트 안 Modal 컴포넌트가 들어가 있음, 부모 컴포넌트, 자식 컴포넌트
// 부모 컴포넌트가 가진 State를 쓸 수 있도록 전송해주어야 자식 컴포넌트에서 사용 가능함
// parameter로 부모에게 전달받은 props 사용 가능
export default App;
