import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--white);
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
  border-radius: 1rem;
  box-shadow: var(--box-shadow);
`;

export const Text = styled.span`
  font-size: 1.5rem;
  color: inherit;
  color: #777;
  font-weight: bold;
`;