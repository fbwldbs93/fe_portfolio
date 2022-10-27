const Upload = () => {
    return (
        <section>
            <form method="POST">
                <input
                    type="text"
                    placeholder="insert title"
                />
                <textarea></textarea>
                <button>upload 하기</button>
                <button>글쓰기 취소</button>
            </form>
        </section>
    );
};

export default Upload;
