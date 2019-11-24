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
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 60px;
    a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    padding: 20px;
    margin: 10px;
    width: 100px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    }
    a:hover {
      opacity: 0.7;
    }
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
`;

export const Page = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    button {
      padding: 10px;
      border-radius: 5px;
      border: 0;
      background-color: #000;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
    }
    button:hover {
      opacity: 0.7;
    }
    button[disabled] {
      opacity: 0.4;
    }
     `;


