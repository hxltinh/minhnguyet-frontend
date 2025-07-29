import { use } from 'react';
import { Brands } from "./type";

export const BrandList = ({brandListPromise}: BrandListProps) => {

    const brands = use(brandListPromise);
    return (
        <div className="flex flex-col min-h-screen">
            {brands.map((brand) => (
                <div key={brand.name} className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border-b border-gray-200'>
                    <div >
                        Image
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">{brand.name}</h2>
                    <p className="text-gray-700">{brand.content}</p>
                    </div>
                    
                </div>
            ))}
        </div>
    );
};

type BrandListProps = {
    brandListPromise: Promise<Brands>;
};
