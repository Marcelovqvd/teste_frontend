import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 46px;
  color: #fff;
  text-align: center;
  margin: 30px 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Lista = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  li {
    margin-bottom: 10px;
    p {
    padding: 25px;
    font-size: 26px;
    }
    img {
      border: 0px solid black;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    padding: 20px;
    margin: 10px;
    width: 200px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    text-align: center;
    }
    a:hover {
      opacity: 0.7;
    }
`;


