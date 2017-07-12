import styled from 'styled-components';

export const DivForm = styled.div`
	padding-bottom: 30px;

	@media (min-width: 992px) {
		padding-left: 100px;
		padding-right: 100px;
	}

	/* Portrait tablets and small desktops */
	@media (min-width: 768px) and (max-width: 991px) {
		padding-left: 50px;
		padding-right:50px;
	}

	/* Landscape phones and portrait tablets */
	@media (max-width: 767px) {
		padding-left: 30px;
		padding-right: 30px;
	}

`;

/*Títulos de la sección de contacto */
export const H2 = styled.h2`
	color: #202957;
	font-size: 30pt;
	font-weight: bold;
	text-align: left;
	padding-left: 100px;
	padding-top: 84px;

	@media (max-width: 767px) {
		font-size: 28pt;
		padding-top: 50px;
	}

	@media (min-width: 992px) {
		padding-left: 100px;
	}

	/* Portrait tablets and small desktops */
	@media (min-width: 768px) and (max-width: 991px) {
		padding-left: 50px;
	}

	/* Landscape phones and portrait tablets */
	@media (max-width: 767px) {
		font-size: 20pt;
		padding-left: 30px;
	}

`;





/*Input personalizado del formulario de contacto */
export const INPUT = styled.input`
	background-color: #E0E0E0;
	border-width: 0px;
	border-radius: 3px 3px;
	color: black;
	height: 42px;
	width: 100%;

	-moz-transition: width .25s; 
    -webkit-transition: width .25s; 
    -o-transition: width .25s;
    transition: width .25s;
    box-shadow: 10px 10px 5px #888888 !important;

	&:focus{
		border: none;
		box-shadow: none;
	}
`;

export const TEXTAREA = styled.textarea`
	background-color: #E0E0E0;
	border-width: 0px;
	border-radius: 3px 3px;
	color: black;
	height: 42px;
	width: 100%;

	-moz-transition: width .25s; 
    -webkit-transition: width .25s; 
    -o-transition: width .25s;
    transition: width .25s;
    box-shadow: 10px 10px 5px #888888 !important;

	&:focus{
		border: none;
		box-shadow: none;
	}
`;


export const Submit = styled.button`
	background-color: white;
	border-radius: 5px;
	border-width: 1px;
	color: black;
	font-weight: bold;
	height: 45px;
	letter-spacing: 2px;
	padding-right: 0px;
	transition: all ease-in-out .3s;
	width: 180px;
	&:hover{
		color: black;
		background-color: #E0E0E0;
		opacity: 0.9;
	}

`;

export const Quotes = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center; 
    align-items: flex-end;
	padding: 0px 15px;
`;