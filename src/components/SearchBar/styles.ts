import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.cardBackgroundColor};
  width: 100%;
  padding: 1rem 0.75rem;
  box-shadow: 2px 2px 10px -6px rgba(0,0,0,0.6);
  border-radius: 0.75rem;
`

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 1.2rem;
  color: #c3c3c3;
  font-weight: 400;

  &::placeholder {
    color: rgba(195, 195, 195, 0.5);
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  background: #ff5350;
  padding: 0.5rem 0.5rem;
  border: none;
  box-shadow: 2px 2px 10px -6px rgba(0,0,0,0.6);
  border-radius: 0.5rem;
  color: white;
`