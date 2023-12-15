import styled from "styled-components";

export const NewFeaturedTagGroupStyled = styled.div`
  display: flex;
  gap: 10px;

  span {
    border-radius: 15px;
    background: #000;
    color: white;
    padding: 5px 8px;
    font-size: 13px;
    font-weight: bold;
  }
  span:first-child {
    background: #5aa2a3;
  }
  span:empty{
    display: none;
  }
`;
