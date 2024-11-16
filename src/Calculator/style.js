import styled from "styled-components";

export const CalculatorContainer = styled.div`
    width: 320px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
`;

export const CalculatorHeader = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const CalculatorDisplay = styled.div`
    height: 60px;
    background-color: #e9ecef;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 0 20px;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #495057;
`;

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const BackButton = styled.button`
    position: absolute; /* 절대 위치로 배치 */
    top: 20px; /* 화면 상단에서 20px 아래 */
    left: 20px; /* 화면 왼쪽에서 20px 우측 */
    height: 50px;
    width: 100px;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    background-color: #001220;
    color: #FBAE3C;
    display: flex;
    align-items: center; /* 버튼 안의 텍스트를 수직 중앙 정렬 */
    justify-content: center; /* 버튼 안의 텍스트를 수평 중앙 정렬 */
    cursor: pointer;
`;

export const BodyDiv = styled.div`
    position: relative; /* 부모 요소 기준으로 위치 설정 */
    background-color: #FBAE3C;
    height: 100vh; /* 화면 높이 */
    width: 100vw; /* 화면 너비 */
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 세로 중앙 정렬 */
    align-items: center; /* 가로 중앙 정렬 */
`;

export const Button = styled.button`
    height: 60px;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    background-color: #dee2e6;
    color: #495057;
    cursor: pointer;
    transition: background-color 0.3s;

    &.operator {
        background-color: #f9c74f;
        color: white;
    }

    &.function {
        background-color: #4cc9f0;
        color: white;
    }

    &.zero {
        grid-column: span 2;
    }

    &:hover {
        background-color: #ced4da;
    }
`;
