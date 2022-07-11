import React, { useState, useEffect } from "react"
import * as Scroll from "react-scroll"
import { IoPlayCircle, IoStopCircle } from "react-icons/io5"
import useWindowDimensions from "./window-dimensions"

let scroll = Scroll.animateScroll
// let intervalID = null;

export default function Scroller() {
  const { height } = useWindowDimensions()
  const { scrolling, setScrolling } = useState(false)

  useEffect(() => {
    console.log(scrolling)
  }, [scrolling])

  function scrollPage(vh) {
    // if (!vh) {
    //   vh = 100;
    // }
    const buffer = 100 //pixels
    scroll.scrollMore(vh - buffer, {
      duration: vh * 2,
      smooth: "linear",
    })
  }

  function startScrolling() {
    // if (!intervalID) {
    //   console.log("started?")
    //   intervalID = setInterval(scrollPage(), 1000);
    // }
    setScrolling(true)
  }

  function stopScrolling() {
    // console.log("stopped?")
    // clearInterval(intervalID);
    // intervalID = null;
    setScrolling(false)
  }

  return (
    <nav className="scroll-control" id="scroller">
      <button onClick={() => startScrolling()}>
        <IoPlayCircle />
      </button>
      <button onClick={() => stopScrolling()}>
        <IoStopCircle />
      </button>
    </nav>
  )
}
