import styled from 'styled-components'

export const StyledCard = styled.div`
    width: 100%;
    background: #fefeff;
    box-shadow: 0 10px 20px #64bbb937;
    border-radius: 5px;

    div:first-child{
        color: #64bbba;
    }

    h1:hover{
        &:hover{
            color: #64bbba;
            cursor: pointer;
        }
    }

    ul:first-child{
    list-style: none;
}

    ul{
        display: flex;
        gap: 5px;
    }
`
