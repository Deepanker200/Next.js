import type { ReactNode } from "react";

export default function RootLayout({children}:{children:ReactNode}){
  return(
    <html>
    <head>
      <title>Next.js Learning Course</title>
    </head>
    <body>
      <header>My Navbar</header>
      {children}
      <footer>My Footer</footer>
    </body>
    </html>
  )
}