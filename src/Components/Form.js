import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';
import { ReactComponent as Arrow} from '../images/icon-arrow.svg'
import { ReactComponent as Error} from '../images/icon-error.svg'

const Form = styled.div`
    position: relative;
    display: flex;
    max-width: 80%;
    margin: 0 auto;
    border: 2px solid hsl(0, 0%, 90%);
    border-radius: 2em;

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        margin: initial;
    }

    ${props =>
        props.error &&
        css`
          border: 2px solid red;

          &::after {
              content: 'Please provide a valid email';
              position: absolute;
              left: 1em;
              right: 1em;
              top: 3.5em;
              background-color: white;
              color: ${props => props.theme.color.softRed};
          }
        `};
`;

const EmailBox = styled.div`
    flex-basis: 70%;
    padding: 0.7em;
`;

const Input = styled.input.attrs(props => ({type: 'email', placeholder: 'Email Address', value: props.value, onChange: props.onChange,}))`
    width: 100%;
    border: 0;
    background-color: hsl(0, 100%, 98%);

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        background-color: hsl(0, 100%, 100%);
    }

    &:focus {
        outline: none;
    }
    
    &::placeholder {
        padding-left: 1em;
        color: ${props => props.theme.color.desaturatedRed};
        opacity: 0.6;
    }
    
    &:focus::placeholder {
        opacity: 0.9;
    }
`;

const ErrorBox = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5em;
    padding: 0 0.1em;
`;

const Submit = styled.button.attrs(props => ({onClick: props.onClick}))`
    position: absolute;
    right: -${props => props.theme.borderWidth};
    top: -${props => props.theme.borderWidth};
    bottom: -${props => props.theme.borderWidth};
    padding-top: 0em;
    padding-bottom: 0em;
    padding-left: 2.0em;
    padding-right: 1.7em;
    background-image: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
    border: 0;
    border-radius: 5em;
    
    &:hover {
        background-image: linear-gradient(135deg, hsl(0, 80%, 92%), hsl(0, 74%, 80%));
    }
    
    ${props =>
        props.error &&
        css`
        padding-left: 2.5em;
        padding-right: 2.2em;
        right: calc(-1 * ${props => props.theme.borderWidth} - 5px);
        box-shadow: 0 5px 15px hsl(0, 83%, 78%);
        `};
`;

export default () => {
    const testRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [email, setEmail] = useState();
    const [error, setError] = useState(false);
    function submitHandler() {
        if (!testRegex.test(email)) {
            setError(true);
        };
        if (testRegex.test(email)) {
            setError(false);
        }
    };
    useEffect(() => {console.log('Error in email format: ', error)}, [error])
    
    return(
        <Form error={error}>
            <EmailBox>
                <Input 
                    value={email} 
                    onChange={event => {setEmail(event.target.value); console.log('The email is ', event.target.value)}} 
                    onClick={() => {setError(false)}}
                />
            </EmailBox>
            {error && <ErrorBox><Error display='block' height='18' width='18' viewBox='0 0 24 24'/></ErrorBox>}
            <Submit onClick={submitHandler} error={error}>
                <Arrow fill='white'/>
            </Submit>
            <div>
            </div>            
        </Form>
    )
}