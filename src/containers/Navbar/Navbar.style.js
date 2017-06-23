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
        color: black;
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