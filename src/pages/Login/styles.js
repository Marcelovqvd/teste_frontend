import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
    a {
      text-decoration: none;
    }
  }
`;
