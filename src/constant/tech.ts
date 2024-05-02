//Databases

import oracle from "../../public/teches/oracle.svg";
import msSql from "../../public/teches/sql_server.svg";
import mySql from "../../public/teches/mysql.svg";
import firebase from "../../public/teches/firebase.svg";
import sanity from "../../public/teches/sanity.svg";
import postGre from "../../public/teches/postgres.svg";

//Back-End
import java from "../../public/teches/java.svg";
import csharp from "../../public/teches/csharp.svg";
import vb from "../../public/teches/vb.svg";
import spring from "../../public/teches/spring.svg";

//Front-End
import angular from "../../public/teches/angular.svg";
import nextJs from "../../public/teches/nextjs.svg";
import javascript from "../../public/teches/javascript.svg";
import css from "../../public/teches/css.svg";
import tailWind from "../../public/teches/tailwindcss.svg";
import framer from "../../public/teches/framer.svg";
import figma from "../../public/teches/figma.svg";
import typeScript from "../../public/teches/typescript.svg";
import vue from "../../public/teches/vue.svg";

//Mobile
import reactNative from "../../public/teches/react_native.svg";
import flutter from "../../public/teches/flutter.svg";

//Ai
import capcut from "../../public/teches/capcut.svg";
import elevenlab from "../../public/teches/elevenslab.svg";
import chatGpt from "../../public/teches/chatgpt.svg";
import gBard from "../../public/teches/g_bard.svg";
import leonardo from "../../public/teches/leonardo.svg";
import leiapix from "../../public/teches/leiapix.jpg";
import veed from "../../public/teches/veed-io.png";
import runwayml from "../../public/teches/runway.svg";

export const TECHES = {
  ai: [chatGpt, gBard, elevenlab, leonardo, leiapix, runwayml, veed, capcut],
  frontEnd: [
    angular,
    nextJs,
    vue,
    javascript,
    typeScript,
    tailWind,
    css,
    framer,
    figma,
  ],
  backEnd: [java, spring, csharp, vb],
  database: [oracle, msSql, mySql, firebase, postGre, sanity],
  mobile: [reactNative, flutter],
};
