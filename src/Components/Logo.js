import styled from 'styled-components';
import { ReactComponent as Logo} from '../images/logo.svg';

const Wrapper = styled.div`

`;

export default () => {
    return (
        <Wrapper>
            <Logo width='200' viewBox='0 0 158 33' />
        </Wrapper>
    )
}