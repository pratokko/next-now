import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span> Web Dev </span> News
        <p className={headerStyles.description}>
          {" "}
          keep u to date with the latest webdev news
        </p>
      </h1>
    </div>
  );
};
export default Header;
