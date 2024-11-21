import React, { useState } from "react";
import * as S from "../style.js";
import { useNavigate } from "react-router-dom";

export default function TodoListPage() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [inputList, setInputList] = useState([]);

    const handleBack = () => navigate("/main"); // 뒤로가기 핸들러

    const changeTodoInput = (e) => setInputValue(e.target.value); // 입력값 변경 핸들러

    const addTodo = () => {
        if (inputValue.trim() !== "") {
            setInputList([...inputList, inputValue]);
            setInputValue('');
        }
    };

    const deleteTodo = (index) => setInputList(inputList.filter((_, i) => i !== index)); // 삭제 핸들러
    
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            addTodo();
        }
    }
    return (
        <S.BodyDiv>
            {/* back 버튼 */}
            <S.BackButton onClick={handleBack}>Back</S.BackButton>

            <S.TodoTemplate>
                <S.TodoListHeader>📝 To-Do List</S.TodoListHeader>
                <S.TodoInsert>
                    <S.InputText
                        type="text"
                        placeholder="Add a task..."
                        value={inputValue}
                        onChange={changeTodoInput}
                        onKeyDown={handleKeyPress}
                    />
                    <S.InputButton onClick={addTodo}>Add</S.InputButton>
                </S.TodoInsert>

                <S.TodoTable>
                    {inputList.map((item, i) => (
                        <S.TodoList key={i}>
                            <S.TableCheckbox type="checkbox" />
                            <S.TableSpan>{item}</S.TableSpan>
                            <S.TableButton onClick={() => deleteTodo(i)}>❌</S.TableButton>
                        </S.TodoList>
                    ))}
                </S.TodoTable>
            </S.TodoTemplate>
        </S.BodyDiv>
    );
}
