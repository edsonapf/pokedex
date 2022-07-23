import styled from 'styled-components';
import { ReactComponent as PokemonLogoSvg } from '../../assets/logo/pokemon.svg';
import { ReactComponent as PokeballIconSvg } from "../../assets/icons/pokeball.svg";

export const Nav = styled.nav`
	background: ${({ theme }) => theme.cardBackgroundColor};
	width: 100%;
	padding: 0 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	box-shadow: 2px 2px 10px -6px rgba(0,0,0,0.6);
	border-radius: 1rem;
	height: 5rem;
	gap: 2rem;
	position: relative;

	@media (max-width: 530px) {
		flex-direction: column;
		padding: 0 1.5rem;
		height: auto;
		gap: 0;
	}

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: flex;
		gap: 1rem;
		height: 100%;

		@media (max-width: 530px) {
			display: none;

			&.open {
				width: 100%;
				text-align: center;
				display: flex;
				flex-direction: column;
				align-items: center;
				padding-bottom: 1rem;

				li:not(:first-child) {
					padding: 0.25rem 0;
				}
			}
		}
	}
`;

export const LogoContainer = styled.div`
	@media (max-width: 530px) {
		width: 100%;
	}
`;

export const LogoImg = styled.img`
	width: 7rem;

	@media (max-width: 530px) {
		height: 5rem;
		width: 5rem;
	}	
`;

export const PokemonLogo = styled(PokemonLogoSvg)`
	width: 7rem;
	fill: #ff5350;

	@media (max-width: 530px) {
		height: 5rem;
		width: 5rem;
	}	
`;

export const Li = styled.li`
	color: #777;
	fill: #777;
	height: 100%;
	display: flex;
	align-items: center;

	&.active {
		color: #ff5350;
		fill: #ff5350;
		border-bottom: 2px solid #ff5350;

		@media (max-width: 530px) {
			border-bottom: none;
		}
	}
`;

export const PageLink = styled.a`
	color: inherit;
	font-size: 1.5rem;
	text-decoration: none;
	font-weight: bold;
	margin-left: 0.5rem;
`

export const Menu = styled.button`
	display: none;
	background: #fff;
	border-radius: 3px;
	border: 1px solid #ff5350;
	padding: 3px;
	width: 25px;
	height: 20px;

	&.open {
		div:nth-child(1) {
			transform: translateY(2px) rotate(50deg);
		}

		div:nth-child(2) {
			margin-top: 0;
			opacity: 0;
		}

		div:nth-child(3) {
			margin-top: 0;
			transform: translateY(-2px) rotate(-50deg);
		}
	}

	div:not(:first-child) {
		margin-top: 3px;
	}

	@media (max-width: 530px) {
		display: block;
		position: absolute;
		top: 1.85rem;
		right: 2rem;
	}
`;

export const MenuLine = styled.div`
	display: block;
	width: 1.25rem;
	height: 2px;
	background: #ff5350;
	transition: transform 0.5s, opacity 0.25s;
`;

export const PokeballIcon = styled(PokeballIconSvg)`
	width: 1.35rem;
	height: 1.35rem;
`;