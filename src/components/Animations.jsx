import { useEffect } from "react";
import { useLocation } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const Animations = () => {
  const location = useLocation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Context তৈরি করা (সব অ্যানিমেশন একসাথে ক্লিনআপ করার জন্য)
    let ctx = gsap.context(() => {
      const titles = document.querySelectorAll(".title-anim");

      titles.forEach((title) => {
        // টেক্সট স্প্লিট করা
        const text = new SplitType(title, { types: "chars, words" });

        // ক্যারেক্টার অ্যানিমেশন
        gsap.from(text.chars, {
          duration: 0.6,
          x: 70,
          autoAlpha: 0,
          stagger: 0.03, // লুপ চালানোর বদলে stagger ব্যবহার করা সহজ
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    // কম্পোনেন্ট আনমাউন্ট হলে সব এনিমেশন রিমুভ করা
    return () => ctx.revert();
  }, [location.pathname]);

  return null;
};

export default Animations;