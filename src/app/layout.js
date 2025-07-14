// app/layout.js (boilerplate)
export const metadata = {
  title: "University Portal",
  description: "Built by Zaidi Sama",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
