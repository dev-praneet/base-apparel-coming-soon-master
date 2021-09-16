import styled from 'styled-components';
import { ReactComponent as Logo} from '../images/logo.svg';

const Wrapper = styled.div`
    padding-left: 2em;
`;

export default () => {
    return (
        <Wrapper>
            <Logo height='70' width='100' viewBox='0 0 158 33' />
        </Wrapper>
    )
}