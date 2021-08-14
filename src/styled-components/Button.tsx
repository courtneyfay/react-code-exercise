import styled from 'styled-components';

const Button = styled.button`
    color: white;
    border: unset;
    border-radius: 4px;
    cursor: pointer;
`;
    
const PrimaryButton = styled(Button)`
    background-color: #35CE8D;
    font-size: 20px;
    padding: 1% 5%;
`;

const SecondaryButton = styled(Button)`
    background-color: #6BA292;
    font-size: 14px;
    padding: 1% 2%;
    margin-right: 1%;
`;

export {
    PrimaryButton,
    SecondaryButton,
}