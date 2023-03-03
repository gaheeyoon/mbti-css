import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const navigate = useNavigate();
    const start = () => {
        navigate("/test");
    }

    return (
        <article className="container text-center">
            <h1 className="mt100">나는 어떤 막내일까?</h1>
            <h2 className="mt30">회사 막내 MBTI 유형 테스트</h2>
            <div className="d-grid mt100">
                <button className="btn btn-success" type="button" onClick={start}>테스트 시작하기</button>
            </div>
        </article>
    );
}

export default Home;