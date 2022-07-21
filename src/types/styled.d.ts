import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
		spacing: {
			small: number;
			medium: number;
			large: number;
		};

    borderRadius: string;
		backgroundColor: string;
		textColor: string;
		headerBackgroundColor: string;
		footerBackgroundColor: string;
		postBackgroundColor: string;
  }
}