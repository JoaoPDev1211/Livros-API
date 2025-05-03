import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
`;

export const LivroList = styled.ul`
  list-style: nome;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Livro = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    border-radius: 1rem;
    margim-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    margin: 0.8rem;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;
