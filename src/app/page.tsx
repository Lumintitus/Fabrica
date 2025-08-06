'use client'
import Intro from "@/Layout/Intro";
import Logo from "@/Layout/Logo";
import Video from "@/Layout/Video";
import { Fragment, useState } from "react";
import Projects from "@/Layout/Projects"
import Test from "@/Layout/Test";
import Why from "@/Layout/Why";
import About from "@/Layout/About";
import Images from "@/Layout/Images";
import Fabricanumber from "@/Layout/Fabricanumber";
import Ourapp from "@/Layout/Ourapp";
import Boy from "@/Layout/Boy";
import Casestudy from "@/Layout/Casestudy";
export default function Home() {
  const [state, setState] = useState();
  return (
    <Fragment>
       <Intro/>
       <Video/>
       <Logo/>
       <Projects/>
       <Test/>
       <Why/>
       <About/>
       <Images/>
       <Fabricanumber/>
       <Ourapp/>
       <Boy/>
       <Casestudy/>
    </Fragment>
  );
}
