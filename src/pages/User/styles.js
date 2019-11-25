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
export const Loading = styled.div`
  font-size: 46px;
  color: #fff;
  display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Lista = styled.ul`
  list-style: none;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    a {
    color: #fff;
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
    font-size: 26px;
    }
    img {
      border: 0px solid black;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  }
`;


