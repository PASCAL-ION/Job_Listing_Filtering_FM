import styled from 'styled-components'

export const FlexLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    
    @media (min-width: 700px) {
        flex-direction: row;   
        align-items: center;
    }
    
`