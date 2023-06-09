import React, { FunctionComponent } from "react";
import {BsGithub,BsPersonFill} from "react-icons/bs";
import {HiDocument} from "react-icons/hi"
import classes from "./Bottombar.module.css"

export type BottombarProps = {};

const Bottombar: FunctionComponent<BottombarProps> = () => {
    return(
        <section className="flex justify-between h-16 sticky bottom-0 mt-4 bg-white shadow-lg">
      <ul className="flex justify-start gap-x-10 items-center w-64 mx-10">
        <a href="https://github.com/Rajesh01-star/silver_sheets" target="_bla
        " rel="noopener noreferrer">
          <BsGithub className="text-4xl hover:text-green-400 cursor-pointer transition-all ease-in-out hover:scale-110" />
        </a>
        <a href="https://arvpanda-homepage.vercel.app/" target="_blank" rel="noopener noreferrer">
            <BsPersonFill className="text-4xl hover:text-green-400 transition-all cursor-pointer ease-in-out hover:scale-110" />
        </a>
        <a href="https://www.canva.com/design/DAFlV7oQ6v4/view" target="_blank" rel="noopener noreferrer">
            <HiDocument className="text-4xl hover:text-green-400 transition-all cursor-pointer ease-in-out hover:scale-110" />
        </a>
      </ul>
      <div className={`${classes.marquee} w-full px-10 flex justify-end overflow-hidden`}>
        <img
          src="https://tenor.com/view/nezuko-anime-demon-slayer-kimetsu-no-yaiba-gif-15131995.gif"
          alt="Flowing GIF"
          className={`inline-block h-[4rem] ${classes.animateMarquee}`}
        />
      </div>
    </section>
    )
};

export default Bottombar;
