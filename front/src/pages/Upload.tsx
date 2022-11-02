import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Upload = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch("http://localhost:4000/api/write", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                content,
            }),
        }).then(() => {
            // window.localStorage.setItem("title", title);
            navigate("/");
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <textarea
                    name="content"
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                ></textarea>
                <button>업로드 하기</button>
                <Link to="/">돌아가기</Link>
            </form>
        </div>
    );
};

export default Upload;
