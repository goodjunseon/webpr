import styled from "styled-components";

// 전체 화면 스타일
export const BodyDiv = styled.div`
    background-color: #FBAE3C;
    height: 100vh;
    width: 100vw;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// 헤더
export const TodoListHeader = styled.h1`
    color: #FBAE3C;
    margin-bottom: 20px;
`;

// 메인 템플릿
export const TodoTemplate = styled.div`
    background-color: #001220;
    width: 400px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

// 할 일 추가 영역
export const TodoInsert = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

export const InputText = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #FBAE3C;
    border-radius: 5px 0 0 5px;
    outline: none;
`;

export const InputButton = styled.button`
    width: 80px;
    background-color: #FBAE3C;
    border: none;
    color: #001220;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    transition: background-color 0.3s;
    &:hover {
        background-color: #FFC947;
    }
`;

// 리스트 테이블
export const TodoTable = styled.div`
    margin-top: 20px;
`;

export const TodoList = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    background-color: #112233;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const TableCheckbox = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    accent-color: #FBAE3C; /* 체크박스 색상 */
    cursor: pointer;
`;

export const TableSpan = styled.span`
    flex: 1;
    color: #FBAE3C;
    font-size: 16px;
    word-break: break-word; /* 긴 텍스트 처리 */
`;

export const TableButton = styled.button`
    background-color: transparent;
    border: none;
    color: #FBAE3C;
    cursor: pointer;
    font-size: 20px;
    transition: color 0.3s;
    &:hover {
        color: #FF6F61;
    }
`;

// 뒤로가기 버튼
export const BackButton = styled.button`
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: #001220;
    color: #FBAE3C;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #FBAE3C;
        color: #001220;
    }
`;
