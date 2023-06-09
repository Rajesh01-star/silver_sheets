import React, { FunctionComponent } from "react";
import {BsGithub,BsPersonFill} from "react-icons/bs";
import classes from "./Bottombar.module.css"

export type BottombarProps = {};

const Bottombar: FunctionComponent<BottombarProps> = () => {
    return(
        <section className="flex justify-between h-16 sticky bottom-0 mt-4 bg-white shadow-lg">
      <ul className="flex justify-start gap-x-10 items-center w-64 mx-10">
        <li>
          <BsGithub className="text-4xl hover:text-green-400 cursor-pointer transition-colors" />
        </li>
        <a href="https://arvpanda-homepage.vercel.app/" target="_blank" rel="noopener noreferrer">
            <BsPersonFill className="text-4xl hover:text-green-400 transition-colors cursor-pointer" />
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