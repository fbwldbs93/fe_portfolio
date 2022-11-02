import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const Home = () => {
  return (
    <>
      <header>
        <h1>jiyun's blog</h1>
      </header>
      <main>
        <LoginForm />
        {/* <section>
                    <ul>
                        <li>여기에 글 올라옴</li>
                    </ul>
                    <div>
                        <button type="button">
                            <Link to="/write">글쓰기 버튼임</Link>
                        </button>
                    </div>
                </section> */}
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
