import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: var(--white);
  color: var(--red);
  border: none;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
`

export const CloseButton = styled.button`
  color: var(--white);
  border: none;
  background: var(--red);
  border-radius: 2rem;
  padding: 0.2rem 0.35rem;
  font-weight: bold;
  margin-left: 0.5rem;
`