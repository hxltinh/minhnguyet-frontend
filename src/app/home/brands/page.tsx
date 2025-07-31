import { createApolloClient } from '@/apollo-client/apollo-client';
import { gql } from '@apollo/client';
import { Brands } from './type';
import { BrandList } from './brand-list';
import { Suspense } from 'react';
import { unstable_noStore } from 'next/cache';

const query = gql`
    query {
        brands {
            name
            content
        }
    }
`;

const BrandsPage = () => {
    unstable_noStore();
    
     const apolloClient = createApolloClient();

    const responsePromise = apolloClient.query<BrandResponse>({
        query,
    }).then(({data}) => data.brands);

    return (
        <div className='flex flex-col'>
        <Suspense fallback='loading...'>
            <BrandList brandListPromise={responsePromise} />
        </Suspense>
        
        </div>
    ); 
}

export default BrandsPage;

type BrandResponse = {
    brands: Brands;
};
