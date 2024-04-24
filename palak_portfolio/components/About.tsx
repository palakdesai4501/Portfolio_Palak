import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/About_Profile.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          As a passionate developer currently pursuing a Master of Applied
          Computing at the University of Windsor, I thrive at the intersection
          of technology and innovation. With a solid foundation in software
          development and a thirst for knowledge, I am dedicated to pushing the
          boundaries of what's possible in the digital realm. My academic
          journey not only equips me with cutting-edge skills but also fosters a
          mindset of continuous learning and adaptability. Whether crafting
          elegant code or tackling complex challenges, I am committed to
          delivering solutions that make a meaningful impact. Let's build the
          future, one line of code at a time.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
