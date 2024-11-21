import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import LoginPage from './FirstPage/component/LoginPage';
import MainPage from './SecondPage/components/MainPage';
import Calculator from './Calculator/components/Calculator';
import TodoListPage from './ToDoList/components/TodoListPage';
/*
변수명은 소문자로 시작하고
함수명은 대문자로 시작,띄어쓰기 대신 대문자 사용
*/


function App() {
  return (
    <Router>
      <Routes>``
        <Route path ="/" element={<LoginPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/todolist" element={<TodoListPage/>}/>
      </Routes>`
    </Router>
  );
}

export default App;
