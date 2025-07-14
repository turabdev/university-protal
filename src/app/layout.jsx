// app/layout.js (boilerplate)
export const metadata = {
  title: "University Portal",
  description: "Built by Zaidi Sama",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="stylesheet" href="/gloable.css" />
        {children}</body>
    </html>
  )
}
