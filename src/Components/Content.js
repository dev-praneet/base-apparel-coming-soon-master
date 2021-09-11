import styled from 'styled-components';

const Content = styled.div`

`;

const H1 = styled.h1`

`;

const Span = styled.span`
    display: block;
    color: ${props => props.theme.color.desaturatedRed};
    letter-spacing: 5px;
    line-height: 1.2;
    font-weight: 300;
    text-align: center;
    
    `;
    
    const P = styled.p`
    letter-spacing: 5px;
    line-height: 1.2;
    text-align: center;
    color: ${props => props.theme.color.darkGrayishRed};
`;

const Text = styled.p`
    color: ${props => props.theme.color.desaturatedRed};
    line-height: 1.4;
`;

const Dummy = styled.div`
    height: ${props => props.height};
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
                Hello fellow shoppers! We're currently building out new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
            </Text>
        </Content>
    )
}