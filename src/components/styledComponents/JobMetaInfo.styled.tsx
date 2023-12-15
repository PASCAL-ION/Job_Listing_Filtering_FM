import styled from "styled-components";

export const JobMetaInfostyled = styled.ul`
  li {
    color: #86908e;
    position: relative;
    padding-left: 15px;
  }
  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: #bdbcbd;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin-right: 20px;
  }
  li:first-child{
    padding-left: 0;
    &::before{
        display: none;
    }
  }
`;
