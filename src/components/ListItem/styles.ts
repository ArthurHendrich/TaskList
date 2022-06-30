import styled from 'styled-components';

interface Props {
  done: boolean;
}

export const Container = styled.div(({ done }: Props)=>(
  `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--gray-500);
  margin-bottom: 0.625rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  transition: border ease 1s, color ease 1s, text-decoration ease 1s;
  border: ${done ? 'initial' : '1px solid var(--gray-400)'}; 

  input {
      width: 1rem;
      height: 1rem;
      border-radius: 0.5rem;
      margin-right: 1.5rem;
      cursor: pointer;
  }

  label {
      color: ${done ? 'var(--gray-300)' : 'var(--gray-100)'};
      text-decoration: ${done ? 'line-through' : 'initial'};
  }
`
));

export const Delete = styled.div`
  button {
    background: transparent;
    border: none;
    color: var(--gray-400);
    cursor: pointer;
    line-height: 0;
    border-radius: 2px;
  }

  button:hover {
    color: var(--danger);
  }
`;

export const InfoItens = styled.div``;