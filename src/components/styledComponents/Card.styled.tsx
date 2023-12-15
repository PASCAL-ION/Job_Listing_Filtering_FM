import styled from 'styled-components'

export const StyledCard = styled.div`
    width: calc(100% - 20%);
    background: #fefeff;
    position: relative;
    box-shadow: 0 10px 20px #64bbb937;
    border-radius: 5px;
    padding: 20px;
    padding-top: 40px;
    margin: 0 auto;
    margin-bottom: 40px;
    
    img{
        width: 48px;
        height: 48px;
        position: absolute;
        top: -24px;
    }

    h1{
        margin: 15px 0;
        font-size: clamp(16px, 3vw, 20px);
        
        &:hover{
            color: #64bbba;
        }
    }

    ul{
        display: flex;
        gap: 15px;
        list-style: none;
        flex-wrap: wrap;      
    }

    hr{
        width: 100%;
        margin: 15px 0;
        border: 1px solid #bfc0c0a6;
    }

    @media (min-width: 420px) {
        padding: 40px;


        img{
            width: 85px;
            height: 85px;
            display: inline-block;
            position: relative;
    height: 100%;
    vertical-align: middle;
            top: 0;
            margin-right: 30px;
        }
        
        hr{
            display: none;
        }

    }
`
