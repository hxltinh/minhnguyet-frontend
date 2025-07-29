import Link from "next/link";
import { createApolloClient } from "@/apollo-client/apollo-client";
import { gql } from "@apollo/client";

const query = gql`
    query {
        posts {
            title
            content
        }
    }
`;

export default async function Posts() {
    const apolloClient = createApolloClient();

    const { data } = await apolloClient.query<PostResponse>({
        query,
    });

    console.log("data", data);

    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1 className="text-2xl font-bold">Posts Page</h1>
                <p className="text-sm text-gray-600">
                    This is the posts page where you can find all the latest
                    posts.
                </p>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <Link
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/"
                >
                    {data.posts.map((item) => (
                        <span>{item.title}</span>
                    ))}
                </Link>
            </footer>
        </div>
    );
}

type PostResponse = {
    posts: {
        title: string;
        content: string;
    }[];
};
