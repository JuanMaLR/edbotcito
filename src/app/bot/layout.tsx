import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Crea tu historia'
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col grow">
        {children}
    </div>
  );
}
