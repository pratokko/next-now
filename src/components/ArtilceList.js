import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArtilceList = ({ posts }) => {
  return (
    <div className={articleStyles.grid}>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <ArticleItem post={post} />
          </div>
        );
      })}
    </div>
  );
};
export default ArtilceList;
