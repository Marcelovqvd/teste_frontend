import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  color: #fff;
  padding: 40px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  label {
    margin: 20px;
    font-size: 24px;
    color: #fff;
  }
  input {
      border: 1px solid black;
      margin-bottom: 25px;
      padding: 10px;
      width: 200px;
      border-radius: 10px;
    }
    button {
      width: 200px;
      padding: 15px;
      border: 1px solid black;
      border-radius: 10px;
      background-color: #000;
      color: #fff;
      font-size: 24px;
    }
  }
`;
