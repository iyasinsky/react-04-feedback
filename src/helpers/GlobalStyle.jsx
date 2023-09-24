import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  img {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .wrapper {
    margin: 20px auto;
    padding: 20px;
    width: 40vw;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: lightgray;
    box-shadow: rgba(0, 0, 0, 0.37) 0px 0px 15px 3px;

    h2 {
      text-align: center;
    }

    div {
      display: flex;
      justify-content: space-around;

      button {
        padding: 5px 10px;
        cursor: pointer;
        text-transform: capitalize;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    p {
      text-align: center;
    }
  }
`;
