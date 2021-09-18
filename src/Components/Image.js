import styled from "styled-components";
import heroMobile from '../images/hero-mobile.jpg';
import heroDesktop from '../images/hero-desktop.jpg';

const Image = styled.div`

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        grid-area: second;
    }
`;

const ImageMobile = styled.img`
    display: block;    

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        display: none;
    }
`;

const ImageDesktop = styled.img`
    display: none;

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        display: block;
    }
`;

export default () => {
    return (
        <Image>
            <ImageMobile src={heroMobile} alt="woman" />
            <ImageDesktop src={heroDesktop} alt="woman" />
        </Image>
    )
}