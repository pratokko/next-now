import ArtilceList from "@/components/ArtilceList";
import { server } from "../../config";

import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
    
      <h1>welcome to next</h1>
      <ArtilceList posts={posts} />
      <Link href="/about">About</Link>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/posts`);

  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 5),
    },
  };
};

// export const getStaticProps = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//   const data = await response.json();

//   return {
//     props: {
//       posts: data.slice(0, 5),
//     },
//   };
// };
