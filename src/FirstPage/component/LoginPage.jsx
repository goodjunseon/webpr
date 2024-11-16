import React, { useState } from "react"; 
import * as S from "../style.js";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
//import MainPage from "../../SecondPage/components/MainPage.jsx";

export default function LoginPage() {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const [idValue, setId] = useState('');
    const [pwValue, setPw] = useState('');

    const saveUserId = event => {
        setId(event.target.value);
        console.log(event.target.value);
    };

    const saveUsePw = event => {
        setPw(event.target.value);
        console.log(event.target.value);
    };

    const handleLogin = () => {
        // 정해진 아이디와 비밀 번호
        const correctId = "goodjunseon";
        const correctPw = "9137";

        if(idValue === correctId && pwValue===correctPw){
            navigate("/main"); // /main 경로로 이동
        } else {
            alert("일치하지 않습니다."); //일치하지 않으면 경고
        }
    };

    return (
        <S.BodyDiv>
            <S.LoginBox>
                <S.Header>Welcome, Junseon Website!!</S.Header>
                <S.Input type="text" placeholder="Username" value={idValue} onChange={saveUserId} />
                <S.Input type="password" placeholder="Password" value={pwValue} onChange={saveUsePw} />
                <S.Button onClick={handleLogin}>Login</S.Button>
            </S.LoginBox>
        </S.BodyDiv>
    );
}