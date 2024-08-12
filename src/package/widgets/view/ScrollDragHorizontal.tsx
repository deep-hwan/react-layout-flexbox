/** @jsxImportSource @emotion/react */
import React, {
  useRef,
  useState,
  useCallback,
  MouseEvent,
  TouchEvent,
  HTMLAttributes,
  ReactNode,
} from "react";

type Types = {
  children: ReactNode;
  maxWidth?: number;
  gap?: number;
  scrollBarActive?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const ScrollDragHorizontal = ({
  children,
  maxWidth,
  gap,
  scrollBarActive = false,
  ...props
}: Types) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [dragThreshold, setDragThreshold] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const startDrag = useCallback(
    (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
      const clientX = e.type.includes("mouse")
        ? (e as MouseEvent).pageX
        : (e as TouchEvent).touches[0].clientX;
      setIsDragging(true);
      setStartX(clientX - (ref.current?.offsetLeft || 0));
      setScrollLeft(ref.current?.scrollLeft || 0);
      setDragThreshold(false); // Initialize the threshold check
    },
    []
  );

  const doDrag = useCallback(
    (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      const clientX = e.type.includes("mouse")
        ? (e as MouseEvent).pageX
        : (e as TouchEvent).touches[0].clientX;
      const x = clientX - (ref.current?.offsetLeft || 0);
      const walk = x - startX;
      if (Math.abs(walk) > 10 && !dragThreshold) {
        setDragThreshold(true); // Confirm it's a drag after moving 10px
      }
      if (dragThreshold) {
        e.preventDefault();
        if (ref.current) {
          ref.current.scrollLeft = scrollLeft - walk;
        }
      }
    },
    [isDragging, startX, scrollLeft, dragThreshold]
  );

  const endDrag = useCallback(() => {
    setIsDragging(false);
    if (!dragThreshold) {
      // If it was not a drag, let the click event through
      ref.current?.click();
    }
  }, [dragThreshold]);

  return (
    <div
      ref={ref}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      onMouseLeave={endDrag}
      onMouseUp={endDrag}
      onTouchEnd={endDrag}
      onMouseMove={doDrag}
      onTouchMove={doDrag}
      css={{
        width: "100%",
        maxWidth: `${maxWidth}px`,
        columnGap: `${gap}px`,
        display: "flex",
        overflowX: "auto",
        cursor: isDragging ? "grabbing" : "grab",
        padding: "1px 0",
        userSelect: "none",
        "& > *": {
          pointerEvents: isDragging && dragThreshold ? "none" : "auto",
        },
        "&::-webkit-scrollbar": {
          display: scrollBarActive ? "flex" : "none",
        },
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollDragHorizontal;
