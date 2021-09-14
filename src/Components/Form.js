import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow} from '../images/icon-arrow.svg'
import { ReactComponent as Error} from '../images/icon-error.svg'

const Form = styled.div`
 display: flex;
 max-width: 80%;
 margin: 0 auto;
//  margin-left: 50%;
//  transform: translateX(-50%);
 border: 2px solid hsl(0, 0%, 90%);
 border-radius: 2em;
`;

const EmailBox = styled.div`
    flex-basis: 80%;
    padding: 0.7em;
    border: 2px solid red;
`;

const Input = styled.input.attrs(props => ({type: 'email', placeholder: 'Email Address', value: props.value, onChange: props.onChange}))`
    width: 100%;
    border: 0;
    background-color: hsl(0, 100%, 98%);

    &:focus {
        outline: none;
    }
    
    &::placeholder {
        color: ${props => props.theme.color.desaturatedRed};
        opacity: 0.6;
    }
    
    &:focus::placeholder {
        opacity: 0.9;
    }
`;

const ErrorBox = styled.div`
    align-self: center;
    padding: 0 0.6em;
    border: 2px solid red;
`;

const Submit = styled.button.attrs(props => ({onClick: props.onClick}))`
    align-self: stretch;
    margin-left: auto;
    padding: 0.5em 1.5em;
    // background-color: ${props => props.theme.color.desaturatedRed};
    background-image: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
    border: 2px solid red;
    border-radius: 5em;
`;

export default () => {
    const testRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [email, setEmail] = useState();
    const [error, setError] = useState(false);
    function submitHandler() {
        if (!testRegex.test(email)) {
            setError(true);
        } else {
            setError(false);
        }
    };

    return(
        <Form>
            <EmailBox>
                <Input 
                    value={email} 
                    onChange={event => {setEmail(event.target.value); console.log('The email is ', event.target.value)}}
                />
            </EmailBox>
            <ErrorBox><Error display='block'/></ErrorBox>
            <Submit onClick={submitHandler}>
                <Arrow fill='white'/>
            </Submit>
            <div>
            </div>            
        </Form>
    )
}