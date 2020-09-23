import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import { Sticky } from "../../styles";

const FirstAndSecond: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1]);

  const frameScale = useTransform(
    scrollYProgress,
    [0.558, 0.627],
    [0.511, 0.8]
  );

  return (
    <Sticky className="second">
      
      <First />

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          borderRadius: "4px",
          border: "4px solid #fff",
          opacity: frameOpacity,
          scale: frameScale,
        }}
      />
    </Sticky>
  );
};

const First: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1]
  );

  const firstRadius = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [0, 4, 4, 0]
  );

  const leftSideHeight = useTransform(
    scrollYProgress,
    [0, 0.058],
    ["20vh", "100vh"]
  );

  const rightSideY = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    ["58vh", "0vh"]
  );

  const rightSideScale = useTransform(
    scrollYProgress,
    [0.047, 0.093, 0.198, 0.264],
    [0, 0.511, 0.511, 1]
  );

  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.53],
    ['0%', '-100%', '-100%', '-200%']
  );

  const heroTitleY = useTransform(
    scrollYProgress,
    [0.12, 0.14],
    ["0vh", "-100vh"]
  );

  const heroTitleOpacity = useTransform(
    scrollYProgress,
    [0.12, 0.135],
    ['100%', "0%"]
  );

  const formBlockY = useTransform(
    scrollYProgress,
    [0.12, 0.14],
    ["100vh", "0vh"]
  );

  const formBlockOpacity = useTransform(
    scrollYProgress,
    [0.12, 0.135],
    ['0%', "100%"]
  );

  return (
    <Sticky
      className="first"
      style={{
        scale: firstScale,
        borderRadius: firstRadius,
      }}
    >
      <motion.div className="offset" style={{
        y: offsetY,
      }}>

        <div className="a">

          <motion.div className="hero-title" style={{
            y: heroTitleY,
            opacity: heroTitleOpacity
          }}>
            <div className="hero-title-content">
              <h1>People-friendly forms and surveys</h1>  

              <p>Turn a list of questions into a friendly conversation. And get better data.</p>

              <div className="spacer">
                <button className="secondary">Sign up from free</button>

                <a href="#">Take a peek</a>
              </div>
            </div>
          </motion.div>

          <motion.div className="form-block" style={{
            y: formBlockY,
            opacity: formBlockOpacity
          }}>
            <div className="form-block-content">
              <span>Hi. What's your name?</span>

              <input type="text" name="name" placeholder="Type your answer here..."/>
            </div>

          </motion.div>

          <motion.div
            className="left-side"
            style={{
              height: leftSideHeight,
            }}
          />

          <div className="right-side">
            <motion.div
              className="right-image"
              style={{
                y: rightSideY,
                scale: rightSideScale,
              }}
            />
          </div>

        </div>

        <div className="b">
          <div className="left-side">

            <div className="content">
              <span>Do you like this photograph?</span>

              <div className="select">
                <a href="#">Yes</a>
                <a href="#">No</a>
              </div>
            </div>

          </div>

          <div className="right-side">
            <div className="right-image"></div>
          </div>
        </div>

        <div className="c"></div>
      </motion.div>
    </Sticky>
  );
};

export default FirstAndSecond;
