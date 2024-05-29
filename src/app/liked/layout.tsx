import "../styles/globals.css";


export default function LikedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={'container'}>
      <header>
        <h1>Liked Posts</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}