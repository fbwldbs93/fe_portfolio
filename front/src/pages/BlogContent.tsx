import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogContent = () => {
    const [content, setContent] = useState([]);
    const link = window.location.href;
    const findNumber = link.split("/");
    // console.log("hrefLink", findNumber[findNumber.length - 1]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(
            `http://localhost:4000/api/write/${
                findNumber[findNumber.length - 1]
            }`
        )
            .then((res) => res.json())
            .then((data) => setContent(data));
    }, []);

    const handleDelete = () => {
        fetch(
            `http://localhost:4000/api/write/${
                findNumber[findNumber.length - 1]
            }`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(content),
            }
        )
            .then((res) => res.json())
            .then((data) => data);

        navigate("/");
    };

    return (
        <div>
            {content.map((item: any, index) => {
                return (
                    <div key={index}>
                        <h3>{item.id}</h3>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                );
            })}
            <div>
                <button>수정</button>
                <button onClick={handleDelete}>삭제</button>
                <Link to="/">돌아가기</Link>
            </div>
        </div>
    );
};

export default BlogContent;
