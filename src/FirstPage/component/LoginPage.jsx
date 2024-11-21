import React, { useState } from "react"; 
import * as S from "../style.js";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate(); // useNavigate 훅 사용
    const [idValue, setId] = useState('');
    const [pwValue, setPw] = useState('');

    // 입력값 저장
    const saveUserId = (event) => {
        setId(event.target.value);
    };

    const saveUserPw = (event) => {
        setPw(event.target.value);
    };

    // 로그인 로직
    const handleLogin = () => {
        const correctId = "goodjunseon";
        const correctPw = "9137";

        if (idValue === correctId && pwValue === correctPw) {
            navigate("/main"); // /main 경로로 이동
        } else {
            alert("일치하지 않습니다."); // 일치하지 않으면 경고
        }
    };

    // Enter 키 입력 처리
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleLogin(); // Enter 키가 눌리면 handleLogin 호출
        }
    };

    return (
        <S.BodyDiv>
            <S.LoginBox>
                <S.Header>Welcome, Junseon Website!!</S.Header>
                <S.Input 
                    type="text" 
                    placeholder="Username" 
                    value={idValue} 
                    onChange={saveUserId} 
                    onKeyDown={handleKeyPress} // Enter 키 입력 처리
                />
                <S.Input 
                    type="password" 
                    placeholder="Password" 
                    value={pwValue} 
                    onChange={saveUserPw} 
                    onKeyDown={handleKeyPress} // Enter 키 입력 처리
                />
                <S.Button onClick={handleLogin}>Login</S.Button>
            </S.LoginBox>
        </S.BodyDiv>
    );
}
