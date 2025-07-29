const BrandsLayout = async ({ children }: BrandsLayoutProps) => {
    return <div className="flex flex-col">{children}</div>;
};

export default BrandsLayout;

type BrandsLayoutProps = {
    children: React.ReactNode;
};
