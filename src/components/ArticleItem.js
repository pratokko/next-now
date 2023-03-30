import articleStyles from "../styles/Article.module.css";
import Link from "next/link";

const ArticleItem = ({ post }) => {
  return (
    <Link href="/post/[id]" as={`/post/${post.id}`} passHref>
      <div className={articleStyles.card}>
        <h3>{post.title} &rarr;</h3>
        <p>{post.body}</p>
      </div>
    </Link>
  );
};
export default ArticleItem;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
