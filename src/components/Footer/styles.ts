import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: rgb(38, 38, 39); 
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 0px;

    > p:first-child {
        margin-bottom: 8px;
    }
`;
