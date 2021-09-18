import styled from 'styled-components';
import { ReactComponent as Logo} from '../images/logo.svg';
import bgDesktop from '../images/bg-pattern-desktop.svg';

const Wrapper = styled.div`
    padding: 1.5em 0em 1.5em 1.7em;
    
    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        grid-row: first / third;
        grid-column: 1;
        padding-left: 10%;
        background: url(${bgDesktop}) no-repeat;
        background-position: center;
        background-size: cover;
    }
    `;
    
    export default () => {
        return (
            <Wrapper>
                <Logo />
            </Wrapper>
    )
}