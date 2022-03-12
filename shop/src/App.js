/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom'; // Link, Route, Switch 라이브러리를 가져 옴 

function App() {

  let [shoes, shoes변경] = useState(Data); //중요한 데이터는 최상위 컴포넌트에 저장해 두는 것이 국룰! 상위 컴포넌트 -> 하위 컴포넌트로 전해주는 props가 이상적인 형태
  // App 컴포넌트에 저장, Redux파일에 보관

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"> Home</Nav.Link> {/* 리액트 라우터 문법을 이용한 버튼 만들기 */}
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch> {/* 경로 매칭 중복 시 맨 위에 것 하나만 보여주도록 */}
        <Route exact path="/">      
            <div className="jumbotron">
              <h1>20% Season Off</h1>
              <p>
                어솨세용~
              </p>
              <p>
                
              </p>
            </div>

            <div className="container">
              <div className="row">
              {
                shoes.map((a,i)=>{
                  return <ShoesList shoes={a} i={i} key={i} /> 
                })
              }
              </div>
            </div>
        </Route>

        <Route path="/detail/:id"> {/* 기본 경로에 매칭되는 것을 다 보여줌 '/', 'detail' 해당하는 라우터 다 보여주게 됨, exact 속성 추가해 해당하는 라우터만 보여지도록 가능 */}
            <Detail shoes={shoes} /> {/* 외부 컴포넌트 불러오기 */}
        </Route>

        <Route path="/:id"> {/* /모든문자 의미, ':' 의미 -> 아무문자나 받겠다는 URL 작명법, 콜론 뒤에 맘대로 작명, 여러개 사용 가능 */}
            <div>아무거나 적었을 때 이거 보여주세요</div>
        </Route>
      </Switch>
      {/*<Route path="/어쩌구" component={Modal}></Route> 해당 경로 요청이 왔을 때컴포넌트를 바로 보여지도록 가능*/}

    </div>
  )
}

function ShoesList(props) { // 상품목록 component, 부모state props문법 전달
  return(
    <div className="col-md-4">
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg' } width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}

export default App;
