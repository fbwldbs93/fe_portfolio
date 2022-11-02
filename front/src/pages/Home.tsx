import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [blogContents, setBlogContents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/api/write")
            .then((res) => res.json())
            .then((data) => setBlogContents(data));
        // window.localStorage.getItem("title");
    }, []);

    // console.log(blogContents.length);

    return (
        <div>
            <h2>Here's I wrote</h2>
            <div>
                {blogContents.length == 0 ? (
                    <p>아직 글이 없습니다</p>
                ) : (
                    blogContents.map((item: any, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/blogPost/${item.id}`}>
                                    <h3>{item.id}</h3>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </Link>
                            </div>
                        );
                    })
                )}
            </div>
            <div>
                <Link to="/upload">글쓰기</Link>
            </div>
        </div>
    );
};

export default Home;
