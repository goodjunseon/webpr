import React, { useState } from "react";
import * as S from "../style.js";
import { useNavigate } from "react-router-dom";

export default function Calculator() {
    const [firstCalcNumber, setFirstCalcNumber] = useState('');
    const [secondCalcNumber, setSecondCalcNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');
    const [isOperatorPressed, setIsOperatorPressed] = useState(false);
    const navigate = useNavigate();

    // 숫자 버튼 클릭
    const handleNumberClick = (number) => {
        if (isOperatorPressed) {
            setSecondCalcNumber((prev) => prev + number);
        } else {
            setFirstCalcNumber((prev) => prev + number);
        }
    };

    // 연산자 버튼 클릭
    const handleOperatorClick = (operatorSymbol) => {
        if (result) {
            setFirstCalcNumber(result.toString());
            setResult('');
        }
        setOperator(operatorSymbol);
        setIsOperatorPressed(true);
    };

    // 부호 변경 버튼 클릭 (+/-)
    const handleSignToggle = () => {
        if (isOperatorPressed) {
            // 두 번째 숫자의 부호 변경
            setSecondCalcNumber((prev) => (prev.startsWith('-') ? prev.slice(1) : `-${prev}`));
        } else {
            // 첫 번째 숫자의 부호 변경
            setFirstCalcNumber((prev) => (prev.startsWith('-') ? prev.slice(1) : `-${prev}`));
        }
    };

    // 계산하기 버튼 클릭 (=)
    const handleCalculate = () => {
        if (!firstCalcNumber || !secondCalcNumber || !operator) return;

        let calculatedResult;
        switch (operator) {
            case '+':
                calculatedResult = parseFloat(firstCalcNumber) + parseFloat(secondCalcNumber);
                break;
            case '-':
                calculatedResult = parseFloat(firstCalcNumber) - parseFloat(secondCalcNumber);
                break;
            case '×':
                calculatedResult = parseFloat(firstCalcNumber) * parseFloat(secondCalcNumber);
                break;
            case '÷':
                if (secondCalcNumber === '0') {
                    alert("0으로 나눌 수 없습니다.");
                    return;
                }
                calculatedResult = parseFloat(firstCalcNumber) / parseFloat(secondCalcNumber);
                break;
            default:
                return;
        }

        setResult(calculatedResult);
        setFirstCalcNumber(calculatedResult.toString());
        setSecondCalcNumber('');
        setOperator('');
        setIsOperatorPressed(false);
    };

    // 초기화 버튼 클릭 (AC)
    const handleClear = () => {
        setFirstCalcNumber('');
        setSecondCalcNumber('');
        setOperator('');
        setResult('');
        setIsOperatorPressed(false);
    };
    
    // Back버튼 클릭
    const handleBack = () => {
        navigate("/main");
    };

    return (
        <S.BodyDiv>
            <S.BackButton onClick={handleBack}>Back</S.BackButton>
        <S.CalculatorContainer>
            <S.CalculatorHeader>계산기</S.CalculatorHeader>
            <S.CalculatorDisplay>
                {result || firstCalcNumber + operator + secondCalcNumber || '0'}
            </S.CalculatorDisplay>
            <S.ButtonContainer>
                <S.Button className="function" onClick={handleClear}>AC</S.Button>
                <S.Button className="function" onClick={handleSignToggle}>+/-</S.Button>
                <S.Button className="function">%</S.Button>
                <S.Button className="operator" onClick={() => handleOperatorClick('÷')}>÷</S.Button>

                <S.Button onClick={() => handleNumberClick('7')}>7</S.Button>
                <S.Button onClick={() => handleNumberClick('8')}>8</S.Button>
                <S.Button onClick={() => handleNumberClick('9')}>9</S.Button>
                <S.Button className="operator" onClick={() => handleOperatorClick('×')}>×</S.Button>

                <S.Button onClick={() => handleNumberClick('4')}>4</S.Button>
                <S.Button onClick={() => handleNumberClick('5')}>5</S.Button>
                <S.Button onClick={() => handleNumberClick('6')}>6</S.Button>
                <S.Button className="operator" onClick={() => handleOperatorClick('-')}>−</S.Button>

                <S.Button onClick={() => handleNumberClick('1')}>1</S.Button>
                <S.Button onClick={() => handleNumberClick('2')}>2</S.Button>
                <S.Button onClick={() => handleNumberClick('3')}>3</S.Button>
                <S.Button className="operator" onClick={() => handleOperatorClick('+')}>+</S.Button>

                <S.Button className="zero" onClick={() => handleNumberClick('0')}>0</S.Button>
                <S.Button onClick={() => handleNumberClick('.')}>.</S.Button>
                <S.Button className="operator" onClick={handleCalculate}>=</S.Button>
            </S.ButtonContainer>
        </S.CalculatorContainer>
        </S.BodyDiv>
    );
}
