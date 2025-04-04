import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <meta name="author" content="Softnio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="images/favicon.png" />
        <title>Googlers - Insights from Uzbek Engineers at Google</title>
        <link rel="stylesheet" href="assets/css/style6572.css?v1.5.0" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default layout;
