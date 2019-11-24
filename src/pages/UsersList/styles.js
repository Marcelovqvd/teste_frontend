import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: #000;
  text-align: center;
  margin: 80px 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Lista = styled.ul`
  list-style: none;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 160px;
    border: 1px solid black;
    a {
    text-decoration: none;
    font-size: 24px;
    padding: 5px;
    margin: 10px;
    }
    a:hover {
    color: red;
    }
    p {
    padding: 25px;
    }
    img {
      padding: 40px;
    }
  }
`;
