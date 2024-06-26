"use client";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { Testimonials } from "@/app/constant/testimonials";

export default function Home() {
  const boxRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Register the Draggable plugin
    gsap.registerPlugin(Draggable);

    const colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];
    const boxes = gsap.utils.toArray(boxRef.current) as HTMLDivElement[];

    gsap.set(boxes, {
      backgroundColor: gsap.utils.wrap(colors),
    });

    const loop = horizontalLoop(boxes, { paused: true, draggable: true });

    boxes.forEach((box: HTMLDivElement, i: number) =>
      box.addEventListener("click", () =>
        loop.toIndex(i, { duration: 0.8, ease: "power1.inOut" })
      )
    );

    const nextButton = document.querySelector(".next");
    if (nextButton) {
      nextButton.addEventListener("click", () =>
        loop.next({ duration: 0.4, ease: "power1.inOut" })
      );
    }

    const prevButton = document.querySelector(".prev");
    if (prevButton) {
      prevButton.addEventListener("click", () =>
        loop.previous({ duration: 0.4, ease: "power1.inOut" })
      );
    }

    function horizontalLoop(items: HTMLElement[], config: any) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => {
          // Ensure no return value
          tl.totalTime(tl.rawTime() + tl.duration() * 100);
        },
      });

      let length = items.length;
      let startX = items[0].offsetLeft;
      let times: number[] = [];
      let widths: number[] = [];
      let xPercents: number[] = [];
      let curIndex = 0;
      let pixelsPerSecond = (config.speed || 1) * 100;
      let snap =
        config.snap === false
          ? (v: number) => v
          : gsap.utils.snap(config.snap || 1);

      function populateWidths() {
        items.forEach((el, i) => {
          widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string);
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px") as string) /
              widths[i]) *
              100 +
              (gsap.getProperty(el, "xPercent") as number)
          );
        });
      }

      function getTotalWidth() {
        return (
          items[length - 1].offsetLeft +
          (xPercents[length - 1] / 100) * widths[length - 1] -
          startX +
          items[length - 1].offsetWidth *
            (gsap.getProperty(items[length - 1], "scaleX") as number) +
          (parseFloat(config.paddingRight) || 0)
        );
      }

      populateWidths();

      gsap.set(items, {
        xPercent: (i: number) => xPercents[i],
      });

      gsap.set(items, { x: 0 });

      let totalWidth = getTotalWidth();

      for (let i = 0; i < length; i++) {
        let item = items[i];
        let curX = (xPercents[i] / 100) * widths[i];
        let distanceToStart = item.offsetLeft + curX - startX;
        let distanceToLoop =
          distanceToStart +
          widths[i] * (gsap.getProperty(item, "scaleX") as number);

        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);

        times[i] = distanceToStart / pixelsPerSecond;
      }

      function toIndex(index: number, vars: gsap.TweenVars = {}) {
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length);

        let newIndex = gsap.utils.wrap(0, length, index);
        let time = times[newIndex];

        if (time > tl.time() !== index > curIndex) {
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }

        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }

      tl.next = (vars: gsap.TweenVars) => toIndex(curIndex + 1, vars);
      tl.previous = (vars: gsap.TweenVars) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index: number, vars: gsap.TweenVars) =>
        toIndex(index, vars);
      tl.updateIndex = () => (curIndex = Math.round(tl.progress() * length));
      tl.times = times;

      tl.progress(1, true).progress(0, true);

      if (config.reversed) {
        if (tl.vars && tl.vars.onReverseComplete) {
          tl.vars.onReverseComplete();
        }
        tl.reverse();
      }

      if (config.draggable && typeof Draggable === "function") {
        let proxy = document.createElement("div"),
          wrap = gsap.utils.wrap(0, 1),
          ratio: any,
          startProgress: any,
          draggable: any,
          dragSnap: any,
          roundFactor: any,
          align = () =>
            tl.progress(
              wrap(startProgress + (draggable.startX - draggable.x) * ratio)
            ),
          syncIndex = () => tl.updateIndex();
        typeof InertiaPlugin === "undefined" &&
          console.warn(
            "InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club"
          );
        draggable = Draggable.create(proxy, {
          trigger: items[0].parentNode,
          type: "x",
          onPress() {
            startProgress = tl.progress();
            tl.progress(0);
            populateWidths();
            totalWidth = getTotalWidth();
            ratio = 1 / totalWidth;
            dragSnap = totalWidth / items.length;
            roundFactor = Math.pow(
              10,
              ((dragSnap + "").split(".")[1] || "").length
            );
            tl.progress(startProgress);
          },
          onDrag: align,
          onThrowUpdate: align,
          inertia: true,
          snap: (value) => {
            let n =
              Math.round(parseFloat(value) / dragSnap) * dragSnap * roundFactor;
            return (n - (n % 1)) / roundFactor;
          },
          onRelease: syncIndex,
          onThrowComplete: () => gsap.set(proxy, { x: 0 }) && syncIndex(),
        })[0];

        tl.draggable = draggable;
      }

      return tl;
    }
  }, []);

  return (
    <div className="container overflow-hidden">
      <button className="prev">Prev</button>
      <button className="next">Next</button>
      <div className="wrapper w-full h-[50vh] flex flex-row items-start gap-[1vw] translate-x-[-5vw] bg-red-600">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            ref={(el: any) => (boxRef.current[i] = el)}
            className="box w-[30vw] h-full  translate-x-[1vw]"
          >
            {i + 1}
          </div>
        ))}
        {/* {Testimonials.map((test: any, index: any) => (
          <div
            key={index}
            // ref={(el: any) => (boxRef.current[i] = el)}
            ref={(el) => {
              if (el) boxRef.current[index] = el;
            }}
            className=" w-full h-full"
          >
            <div className=" w-full h-full">
              <div className=" w-[450px] h-[100px] bg-red-600 ">
                <div className="">
                  <Image
                    src={test.photo}
                    alt={test.name}
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />
                </div>
                <div className=" flex flex-col">
                  <h1>{test.name}</h1>
                  <div className=" flex flex-row gap-1">
                    <span>{test.title}</span>
                    <span>@</span>
                    <span>{test.company}</span>
                  </div>
                </div>
              </div>
              <div className="w-[450px] h-[200px] bg-green-400"></div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}
