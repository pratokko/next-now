import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "../../../../config";
import Meta from "@/components/Meta";

const Article = ({ post }) => {
  const router = useRouter();

  //   const { id } = router.query;
  return (
    <>
      <Meta title={post.title} />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br />

      <Link href="/">Go Back</Link>
    </>
  );
};
export default Article;

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/posts/${context.params.id}`);

  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/posts`);

  const post = await res.json();

  const ids = post.map((post) => post.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const data = await res.json();

//   return {
//     props: {
//       post: data,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const post = await res.json();

//   const ids = post.map((post) => post.id);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
