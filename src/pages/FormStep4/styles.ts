import styled from 'styled-components';

export const Container = styled.div`
  p {
    font-size: 13px;
    color: #B8B8D4;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #16195C;
    margin: 30px 0;
  }

  #title {
    font-size: 16px;
    margin-bottom: 30px;
    font-weight: bold;
  }

  .description {
    width: 75%;
    font-size: 13px;
    padding-left: 40px;
    margin-bottom: 30px;
    text-align: right;
  }

  .backButton {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    margin-top: 40px;
    color: #B8B8D4;
  }
`;