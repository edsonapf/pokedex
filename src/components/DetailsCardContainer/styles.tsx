import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem 0 0.5rem 0;

  .details-card-container-child:not(:first-child) {
    margin-left: 0.25rem;
  }
`;
