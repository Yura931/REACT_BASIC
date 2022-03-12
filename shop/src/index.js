import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'; // ./경로가 아닌 이름만 있는 것 -> 라이브러리 이름, HashRouter -> 라우팅 안전하게 할 수 있게 도와줌
// 서버에게 페이지를 가져다 달라 요청, HashRouter사용 시 /#/ 이후 경로로 요청 서버에 요청하지 않음

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
