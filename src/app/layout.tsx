

 export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}){
  return (
    <html lang ="en">
    <body 
    className=''
    ><div className="flex flex-col relative">{children}</div></body>
    </html>
  )
}
 