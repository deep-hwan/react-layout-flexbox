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
        _hover={{ backgroundColor: "green" }}
        _active={{ opacity: 0.8, backgroundColor: "#000" }}
        transitionTime={0.3}
        margin={{ bottom: 50 }}
        gap={80}
        _mediaQuery={{
          s1280: {
            direction: "row",
            padding: { all: 150 },
            gap: 210,
            positionType: "static",
            margin: { bottom: 100 },
          },

          s600: {
            display: "flex",
            _hover: { backgroundColor: "#000" },
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
        _disabled={{ position: { top: 0 } }}
        backgroundColor="#eee"
        _mediaQuery={{
          s1280: {
            positionType: "fixed",
            backgroundColor: "#fff",
            padding: { all: 20 },
            position: { left: 0, right: "auto", top: 20 },
            axis: { x: "50%", y: 30 },
            _hover: { direction: "column" },
          },
        }}
      >
        <p>6</p>
        <p>5</p>
      </P.Absolute>

      <V.ScrollDragHorizontal gap={50}>
        <V.Row
          as="nav"
          maxWidth={300}
          minWidth={300}
          backgroundColor="#f0f0f0"
          borderRadius={20}
          padding={{ vertical: 200, horizontal: 40 }}
          _active={{ opacity: 0.3 }}
          transitionTime={0.3}
          gap={50}
          _mediaQuery={{
            s1280: {
              padding: { all: 20 },
              gap: 20,
              _hover: { backgroundColor: "blue" },
            },
            s1080: {
              height: "500px",
              crossAlign: "space-between",
              backgroundColor: "green",
              gap: 25,
              direction: "column",
            },
          }}
          onClick={() => {}}
        >
          <p>3</p>
          <p>4</p>
        </V.Row>

        <V.Row
          as="nav"
          maxWidth={300}
          minWidth={300}
          backgroundColor="#f0f0f0"
          borderRadius={20}
          padding={{ vertical: 200, horizontal: 40 }}
          _active={{ opacity: 0.3 }}
          transitionTime={0.3}
          gap={50}
          _mediaQuery={{
            s1280: {
              padding: { all: 20 },
              gap: 20,
              _hover: { backgroundColor: "blue" },
            },
            s1080: {
              height: "500px",
              crossAlign: "space-between",
              backgroundColor: "red",
              gap: 25,
              direction: "column",
            },
          }}
          onClick={() => {}}
        >
          <p>3</p>
          <p>4</p>
        </V.Row>

        <V.Row
          as="nav"
          maxWidth={300}
          minWidth={300}
          backgroundColor="#f0f0f0"
          borderRadius={20}
          padding={{ vertical: 200, horizontal: 40 }}
          onClick={() => {}}
        >
          <p>3</p>
          <p>4</p>
        </V.Row>
      </V.ScrollDragHorizontal>
    </V.Column>
  );
}
