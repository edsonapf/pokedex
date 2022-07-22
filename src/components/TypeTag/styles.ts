import styled from 'styled-components';

interface TextProps {
	backgroundColor: string;
	fontColor: string;
}

export const Text = styled.span<TextProps>`
	color: ${({ fontColor }) => fontColor};
	font-size: 0.75rem;
	background: ${({ backgroundColor }) => backgroundColor};
	font-weight: bold;
	border-radius: 0.25rem;
	padding: 0.25rem;
`;