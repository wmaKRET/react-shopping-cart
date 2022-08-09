import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    margin-left: 40px;
    max-width: 80px;
    object-fit: cover;
  }
`;
