"use client";
import React, { useState } from "react";
import Card from "./components/Card";
import { Topics } from "./components/Topics";

const page = () => {
  const [first, setfirst] = useState();
  return (
    <>
      {/* CONTENT */}
      <div className=" flex pt-16 px-12 gap-3">
        {/* Articles Cards */}
        <div>
          <Card
            title={
              "I Went to a Bumble IRL Event And Finally Understood Why Modern Dating is a Mess"
            }
            author={"Heart Affairs Carlyn Beccia in Heart Affairs"}
            articleImg={
              "https://miro.medium.com/v2/resize:fill:350:235/1*gg20PlKE5SyC9t_mqyxShQ.jpeg"
            }
          />
          <Card
            title={
              "I Went to a Bumble IRL Event And Finally Understood Why Modern Dating is a Mess"
            }
            author={"Heart Affairs Carlyn Beccia in Heart Affairs"}
            articleImg={
              "https://miro.medium.com/v2/resize:fill:350:235/1*gg20PlKE5SyC9t_mqyxShQ.jpeg"
            }
          />
          <Card
            title={
              "I Went to a Bumble IRL Event And Finally Understood Why Modern Dating is a Mess"
            }
            author={"Heart Affairs Carlyn Beccia in Heart Affairs"}
            articleImg={
              "https://miro.medium.com/v2/resize:fill:350:235/1*gg20PlKE5SyC9t_mqyxShQ.jpeg"
            }
          />
          <Card
            title={
              "I Went to a Bumble IRL Event And Finally Understood Why Modern Dating is a Mess"
            }
            author={"Heart Affairs Carlyn Beccia in Heart Affairs"}
            articleImg={
              "https://miro.medium.com/v2/resize:fill:350:235/1*gg20PlKE5SyC9t_mqyxShQ.jpeg"
            }
          />
          <Card
            title={
              "I Went to a Bumble IRL Event And Finally Understood Why Modern Dating is a Mess"
            }
            author={"Heart Affairs Carlyn Beccia in Heart Affairs"}
            articleImg={
              "https://miro.medium.com/v2/resize:fill:350:235/1*gg20PlKE5SyC9t_mqyxShQ.jpeg"
            }
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="pl-5 pr-5 items-center ">
          <h3 className=" mb-2 font-semibold text-[1.25rem]">
            Discover more of what matters to you
          </h3>
          <div className="block justify-evenly">
            <Topics />
            <Topics />
            <Topics />
            <Topics />
            <Topics />
            <Topics />
            <Topics />
          </div>

          <a className="  text-green-400 hover:text-black cursor-pointer">
            See more topics
          </a>
        </div>
      </div>
    </>
  );
};

export default page;
