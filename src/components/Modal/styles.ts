import styled from 'styled-components';

export const Backdrop = styled.div`
	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(3px);
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
`;