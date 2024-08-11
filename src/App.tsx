import React from "react";
import { V, P } from "../src/package/index";

export default function App() {
  return (
    <V.Column as="section" flex={1} maxWidth={1080} gap={20}>
      <V.Column
        as="div"
        reverse
        position={{ left: 50 }}
        backgroundColor="#f0f0f0"
        borderRadius={20}
        padding={{ vertical: 20, horizontal: 40 }}
        hover={{ backgroundColor: "#aaa" }}
        active={{ opacity: 0.3 }}
        transitionTime={0.3}
        gap={80}
        mediaQuery={{
          s1280: { padding: { all: 150 }, gap: 210, positionType: "static" },
          s1080: {
            backgroundColor: "red",
            direction: "row",
            gap: 20,
            hover: { backgroundColor: "grey" },
            active: { opacity: 0.1 },
          },
          s600: {
            display: "flex",

            hover: { backgroundColor: "#000" },
            backgroundColor: "blue",

            padding: { all: 100 },
          },
        }}
        onClick={() => {}}
      >
        <p>1</p>
        <p>2</p>
      </V.Column>

      <P.Fixed
        zIndex={100}
        position={{ top: 0, left: 0 }}
        padding={{ all: 20 }}
      >
        sadsd
      </P.Fixed>

      <P.Absolute
        as="nav"
        position={{ top: 0, right: 0 }}
        disabled={{ position: { top: 0 } }}
        backgroundColor="#eee"
        mediaQuery={{
          s1280: {
            positionType: "fixed",
            backgroundColor: "#fff",
            padding: { all: 20 },
            position: { left: 0, right: "auto", top: 20 },
            axis: { x: "50%", y: 30 },
          },
        }}
      >
        5
      </P.Absolute>

      <V.Row
        as="nav"
        backgroundColor="#f0f0f0"
        borderRadius={20}
        padding={{ vertical: 20, horizontal: 40 }}
        hover={{ backgroundColor: "#aaa" }}
        active={{ opacity: 0.3 }}
        transitionTime={0.3}
        gap={50}
        mediaQuery={{
          s1280: {
            padding: { all: 20 },
            gap: 20,
            hover: { backgroundColor: "blue" },
          },
          s1080: {
            height: "500px",
            crossAlign: "space-between",
            backgroundColor: "red",
            gap: 25,
            direction: "column",
          },
          s600: {
            display: "flex",
            hover: { backgroundColor: "#000" },
            backgroundColor: "blue",

            padding: { all: 100 },
          },
        }}
        onClick={() => {}}
      >
        <p>3</p>
        <p>4</p>
      </V.Row>

      <V.Row
        as="nav"
        backgroundColor="#f0f0f0"
        borderRadius={20}
        padding={{ vertical: 200, horizontal: 40 }}
        hover={{ backgroundColor: "#aaa" }}
        active={{ opacity: 0.3 }}
        transitionTime={0.3}
        gap={50}
        mediaQuery={{
          s1280: {
            padding: { all: 20 },
            gap: 20,
            hover: { backgroundColor: "blue" },
          },
          s1080: {
            height: "500px",
            crossAlign: "space-between",
            backgroundColor: "red",
            gap: 25,
            direction: "column",
          },
          s600: {
            display: "flex",
            hover: { backgroundColor: "#000" },
            backgroundColor: "blue",

            padding: { all: 100 },
          },
        }}
        onClick={() => {}}
      >
        <p>3</p>
        <p>4</p>
      </V.Row>
    </V.Column>
  );
}
