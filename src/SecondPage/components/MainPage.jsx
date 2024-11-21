import React from "react";
import * as S from "../style.js";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    };

    const handleCalculator = () => {
        navigate("/calculator");
    };
    const handleToDoList = () => {
        navigate("/todolist");
    };
    

    return (
        <S.BodyDiv>
            <S.BackButton onClick={handleBack}>Logout</S.BackButton>
            <S.Header>Project List</S.Header>
            <S.ButtonContainer>
                <S.MainButton onClick={handleCalculator}>Calculator Program</S.MainButton>
                <S.MainButton onClick={handleToDoList}>To do list</S.MainButton>
                {/* 다른 프로그램 버튼을 여기에 추가 가능 */}
            </S.ButtonContainer>
        </S.BodyDiv>
    );
}
