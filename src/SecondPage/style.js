import styled from "styled-components";

// BodyDiv: 페이지 중앙 정렬
export const BodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; /* 세로 중앙 정렬 */
    align-items: center; /* 가로 중앙 정렬 */
    height: 100vh;
    width: 100vw;
    background-color: #FBAE3C;
    margin: 0;
    padding: 0;
`;

// Header: Project List 중앙 배치
export const Header = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: #001220;
    margin-bottom: 20px;
    text-align: center;
`;

// BackButton: Logout 버튼 왼쪽 상단 배치
export const BackButton = styled.div`
    position: absolute; /* 화면의 절대적인 위치 */
    top: 20px; /* 상단에서 20px */
    left: 20px; /* 왼쪽에서 20px */
    height: 50px;
    width: 100px;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    background-color: #001220;
    color: #FBAE3C;
    display: flex;
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center; /* 수평 중앙 정렬 */
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #FBAE3C;
        color: #001220;
    }
`;

// ButtonContainer: 버튼들을 세로로 배치
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column; /* 세로로 정렬 */
    align-items: center; /* 버튼들을 중앙 정렬 */
    gap: 15px; /* 버튼 간 간격 */
    margin-top: 30px;
`;

// MainButton: Calculator 버튼 스타일
export const MainButton = styled.button`
    height: 60px;
    width: 200px;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    background-color: #001220;
    color: #FBAE3C;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #FBAE3C;
        color: #001220;
    }
`;

