import { GetServerSideProps } from "next";
import Main from "next/head";
import React from "react";
import { useState } from "react";

const Body = () => {
  const [gettext, setstringifytext] = useState<string>("");
  const [todo, setTodo] = useState<string[]>([]);

  function handelTodo(X: string) {
    gettext && setTodo([...todo, X]);
    setstringifytext("");
  }
  React.useEffect(() => {
    console.log(todo);
  }, [todo]);
  return (
    <>
      <div className="h-500">
        <div className=" h-96 bg-cyan-900 flex flex-col w-full overflow-scroll">
          <div className="w-4/5 bg-red-50 flex h-10 mt-5 mb-5 ml-4 justify-between">
            <input
              type="text"
              placeholder={"add items to todo ........"}
              className={"w-4/5 outline-none placeholder:px-5 px-10 flex-1"}
              value={gettext}
              onChange={(e) => setstringifytext(e.target.value)}
            />
            <div
              className=" w-30 "
              onClick={() => {
                handelTodo(gettext);
              }}
            >
              <button className=" text-white bg-teal-500 px-12 w-30 h-10 ">
                <span>Add</span>
                <span>+</span>
              </button>
            </div>
          </div>
          {todo &&
            todo.map((items, index) => (
              <>
                <div className=" h-10 w-4/5 bg-cyan-500 flex align-middle justify-between ml-4 mb-4">
                  <span className="px-20 mt-2 text-white font-medium">
                    <p>{items}</p>
                  </span>

                  <div className="bg-yellow-300 py-2 w-30">
                    <button className=" text-whit px-10 ">
                      <span>Delete</span>
                      <span> -</span>
                    </button>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Body;

export const getServerSideprops: GetServerSideProps = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const jsondata: products = await data.json();
  console.log(jsondata);
  return {
    props: {
      data: jsondata,
    },
  };
};
