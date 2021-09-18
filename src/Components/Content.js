import styled from 'styled-components';
import Form from './Form'

const Content = styled.div`
    display: inline-block;
    background-image: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
    
    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        grid-area: third;
        display: block;
        margin-left: 10%;
        margin-right: 15%;
        align-items: center;
        background-image: none;
    }
`;

const H1 = styled.h1`

`;

const Span = styled.span`
    font-size: 36px;
    display: block;
    color: ${props => props.theme.color.desaturatedRed};
    letter-spacing: 10px;
    line-height: 1.1;
    font-weight: 300;
    text-align: center;

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        text-align: left;
    }
    `;
    
    const P = styled.p`
    font-size: 36px;
    letter-spacing: 10px;
    line-height: 1.1;
    text-align: center;
    color: ${props => props.theme.color.darkGrayishRed};

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        text-align: left;
    }
    `;
    
    const Text = styled.p`
    font-size: 13px;
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
    color: ${props => props.theme.color.desaturatedRed};
    line-height: 1.5;

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        text-align: left;
        margin: 0;
        max-width: 100%;
    }
`;

const Dummy = styled.div`
    height: ${props => props.height};

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        height: ${props => props.deskHeight};
    }
`;

export default () => {
    return (
        <Content>
            <Dummy height='3em' />
            <H1>
                <Span>WE'RE</Span>
                <P>COMING</P>
                <P>SOON</P>
            </H1>
            <Dummy height='1em' />
            <Text>
                Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
            </Text>
            <Dummy height='2em' />
            <Form />
            <Dummy height='4em' deskHeight='2em'/>
        </Content>
    )
}