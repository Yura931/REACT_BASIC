import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

// 컴포넌트에 직접 스타일 넣어서 스타일링 하기
// 백틱 `글자` 자바스크립트에서 텍스트 입력 할 때 사용할 수 있는 기호
// 백틱 사이에 CSS 선언

// 박스라는 CSS가 입혀져 있는 component를 만든 것
let 박스 = styled.div` 
    padding : 20px;
`;

// `글자${변수명}글자` 백틱 안에 쓸 수 있는 자바스크립트 문법, 글자 중간에 변수, 함수 그대로 넣을 수 있음
// props 중 색상을 가져오겠다는 것
let 제목 = styled.h4`
    font-size : 25px;
    color : ${ props => props.색상 } 
`;


// Lifecycle Hook, 옛 class 방식
class Detail2 extends React.Component {

    // 컴포넌트가 Mount 되었을 때 실행할 코드
    componentDidMount() {
        // Ajax 같은 것도 이 곳에 자주 사용
    }

    // 컴포넌트가 Unmount 되기 직전에 실행할 코드
    componentWillUnmount() {

    }

}

function Detail(props) {

    let [alert, alert변경] = useState(true);

    // useEffect 훅 상단에 import 해서 사용, 요즘 방식
    // 컴포넌트가 mount 되었을 때, 컴포넌트가 update 될 때 특정 코드를 실행할 수 있음
    // useEffect 여러개 사용 가능 순서대로 사용 됨
    useEffect(()=>{
        //2초 후에 alert 창을 안보이게 해주세요.
        let 타이머 = setTimeout(()=> {alert변경(false)}, 2000)
        //return function 어쩌구(){  alert("빠빠") } // 컴포넌트가 사라질 때 실행 return
    });

    useEffect(()=>{

    });
        

    let { id } = useParams(); // 사용자가 입력한 URL 파라미터들, {파라미터 변수 입력}
    let history = useHistory(); // 방문저장등을 기록해두는 Object
    let detailShoes = props.shoes.find((shoes)=>{ // find() ES6 문법, Array 안에서 원하는 자료를 찾고 싶을 때 사용, filter() 함수, 반복문 사용해도 됨, 콜백 함수 내의 파라미터 -> array 안에 있던 하나하나의 데이터 의미
        return shoes.id == id
    })

    return(
      <div className="container">
          <박스>
            <제목 className="red">Detail</제목> {/* 색상이라는 props 전달, 전달 형태 => {변수명}, '글자' props 안에 글자만 전달 할 수 있음 */}
        </박스>
        
        {
        alert === true
        ? <div className="my-alert3">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>
        : null
        }
     
        <div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes"+(detailShoes.id+1)+".jpg"} width="100%"/> {/* src 속성 값 변경하고 싶을 때 중괄호 안에 변수 사용 */}
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{ detailShoes.title }</h4>
            <p>{ detailShoes.content }</p>
            <p>{ detailShoes.price }</p>
            <button className="btn btn-danger">주문하기</button>
            <button className="btn btn-danger" onClick={ ()=>{
                history.goBack(); // 1. useHistory라는 훅 import
                                  // 2. useHistory() 훅 사용
                                  // history.push('/경로') -> 해당경로로 이동
            } }>뒤로가기</button>
          </div>
        </div>
      </div>
    )
  }

export default Detail;