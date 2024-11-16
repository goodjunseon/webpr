import styled from "styled-components";

// 전체 배경색 및 화면 중앙 정렬
export const BodyDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    width: 100vw;
    background-color: #FBAE3C;
    margin: 0;
`;

// 로그인 박스 스타일
export const LoginBox = styled.div`
    background-color: #001220; 
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    text-align: center; 
    color: #FBAE3C;
`;
export const Header = styled.div`
    font-size: 1.5rem;

`;
// 버튼과 입력 필드 공통 스타일
export const Input = styled.input`
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    border: 1px solid #FBAE3C;
    border-radius: 5px;
    background-color: #001220; 
    color: #FBAE3C;
    font-size: 16px;
`;

export const Button = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #FBAE3C; 
    color: #001220; 
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #f9b350;
    }
`;
