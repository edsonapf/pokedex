import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.cardBackgroundColor};
  color: #ff5350;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 10px -6px rgba(0,0,0,0.6);
`

export const CloseButton = styled.button`
  color: ${({ theme }) => theme.cardBackgroundColor};
  border: none;
  background: #ff5350;
  border-radius: 2rem;
  padding: 0.2rem 0.35rem;
  font-weight: bold;
  margin-left: 0.5rem;
`