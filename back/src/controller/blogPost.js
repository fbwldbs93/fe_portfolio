let id = 0;

const writes = [];
export const getWrites = (req, res) => {
    res.json(writes);
    // window.localStorage.getItem("writes");
};

export const getWrite = (req, res) => {
    // console.log("req.params.id =>", req.params.id);
    const myId = writes.filter((item) => {
        // console.log("writes id", item.id);

        if (item.id == req.params.id) {
            return item;
        }
    });

    res.json(myId);
};

export const postWrite = (req, res) => {
    const { title, content } = req.body;

    writes.push({
        id: id++,
        title,
        content,
    });

    // window.localStorage.setItem("writes", writes);

    return res.send("SUCCRESS!");
};

export const deleteWrite = (req, res) => {
    const deletePost = writes.filter((item) => {
        if (item.id == req.body.id) {
            return item;
        }
    });

    writes.splice(deletePost, 1);
    /*
        해당 객체를 삭제하면
        첫번째 객체부터 삭제가 되는 이상한 현상 발생
    */
};
