import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

/*
  서버에 데이터 요청하는 방법
  - 라이브러리 사용 = axios
  - 기본 제공하는 api 사용 = fetch
  -- 사용법은 관련 공식문서 찾으면 다 나오니까 너무 외우려하지 말기

  서버에 데이터를 요청하기 위해서는
  - 서버 주소를 알아야 함
  - HTTP 메소드를 사용할 지 알아야 함
*/

const App = () => {
    const [todo, setTodo] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:4000/api/todo")
            .then((res) => res.json()) //json 형태로 정제
            .then((data) => setTodo(data));
    };

    useEffect(() => {
        fetchData();
    }, []);

    /*
      CORS 에러 발생!!
      "Access to fetch at 'http://localhost:4000/api/todo' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. 
      If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled."
      
      CORS 란? :: cross origin resource sharing 의 약자

      ## CORS 정책에 의해 막혔다. ##
      - client 의 주소와 server 의 주소 오리진이 다름 
        - origin?
          :: host 와 port 포함한 데이터의 출처
      - 그러므로 즉, 두 주소는 출처가 다름 (port 가 다르기 때문)

      출처가 다를 때 왜 막을까?
      현재 두 개의 localhost 처럼
      client 가 server 의 데이터를 가져가려고 할때
      
      만일 그 URL이
      naver 와 google 이 될 때
      출처가 다를 때 막지 않으면
      서로 다른 출처인데도 서로의 데이터에 접근할 수 있게 되는 것
      
      그래서 웹을 만들때 origin(출처)가 다르면 일단 막는다를
      기본으로 한 것!


      :: 이 정책을 풀어주려면 어떻게 해야할까??
      - 클라이언트가 서버에 데이터를 꺼내가고 요청을 하고
      서버는 그것들을 제공해주는 것이기 때문에
      - 서버에서 CORS 정책을 해결해 줘야함
      - 클라이언트에서는 방법이 없음

      - CORS 정책을 무효화하려면 no-cors 로 설정하라는 것 같음

      
    */

    // interface Type {
    //   text: string;
    //   done: boolean;
    // }

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        const target = e.target as HTMLFormElement;
        e.preventDefault();

        const text = target?.text.value;
        const done = target?.done.checked;

        fetch("http://localhost:4000/api/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text,
                done,
            }),
            //body 에 데이터를 넣어줌
            //문자열로 직렬화 JSON.stringify 해줌
        }).then(() => {
            fetchData();
        });
    };

    return (
        <div>
            <h1>TodoList</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="text"
                    type="text"
                />
                <input
                    name="done"
                    type="checkbox"
                />
                <button>추가</button>
            </form>
            <ul>
                {todo.map((item: any) => {
                    return (
                        <li>
                            <p>{item.id}</p>
                            <p>{item.text}</p>
                            <p>{item.done === false ? "F" : "T"}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
