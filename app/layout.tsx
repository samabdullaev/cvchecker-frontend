import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html>
			<head>
				<meta name='author' content='Softnio' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='shortcut icon' href='images/favicon.png' />
				<title>Smart Resume Matcher</title>
				<link rel='stylesheet' href='assets/css/style6572.css?v1.5.0' />
			</head>
			<body>
				{/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        > */}
				{children}
				{/* </ThemeProvider> */}
			</body>
		</html>
	);
};

export default RootLayout;
