import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const start = () => {
     navigate('/test');
  };

  return ( 
    <div className="container text-center"> 
        <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/result.png'} alt="막내" /> 
        <h1 className="mt-30">나는 어떤 막내일까?</h1> 
        <h2 className="mt-30">회사 막내 MBTI 유형 테스트</h2> 
        <button className="btn btn-primary mt-100" onClick={start}>테스트 시작하기</button>
    </div>  
  );
}
 
export default Home;