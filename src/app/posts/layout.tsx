export default function PostLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <div className="max-w-2xl mx-auto px-4 py-8"><div>
        render children hrere
        {children}
        </div></div>;
}
