import styled from 'styled-components';

export const NAV = styled.nav`
    border-color: black !important;
    background-color: white;
    
    @media (min-width: 992px) {
        padding: 0px 30px;
    }
`;


export const NavbarDiv = styled.div`
    .navbar .navbar-collapse {
        text-align: center;
    }
`;

export const NavbarLogo = styled.img`
    transform: translateY(-5px);
`;

export const LI = styled.li`
    font-family: 'Ropa Sans';

    a {
        transition: all .6s ease-in !important;
        color: black;
        border-radius: 0px;
        background-color: none;
        opacity: 1;
        border-left: solid white 1px;
        border-right: solid white 1px;

        &:hover {
            transition: all .4s ease-out !important;
            background-color: gray;
            opacity: .9;
            border-radius: 8px;
            border-left: solid black 1px;
            border-right: solid black 1px;

        }
    }

    i {
        font-size: 24px;
    }
    
`;

export const ToggleButton = styled.button`
    .icon-bar{
        background-color: black;
    }
`;