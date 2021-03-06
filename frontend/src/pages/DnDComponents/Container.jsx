import React, { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { DraggableBox } from "./DraggableBox";
import { snapToGrid as doSnapToGrid } from "./snapToGrid";
import update from "immutability-helper";
const styles = {
  width: "900px",
  height: "600px",
  position: "relative"
};
function renderBox(item, key) {
  return <DraggableBox key={key} id={key} {...item} />;
}

export const Container = ({ snapToGrid, desks }) => {
  console.log("Hi")
  console.log(desks)
  const [boxes, setBoxes] = useState(desks.desks);
  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top }
          }
        })
      );
    },
    [boxes]
  );
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      let left = Math.round(item.left + delta.x);
      let top = Math.round(item.top + delta.y);
      if (snapToGrid) {
        [left, top] = doSnapToGrid(left, top);
      }
      moveBox(item.id, left, top);
      return undefined;
    }
  });
  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => renderBox(boxes[key], key))}
    </div>
  );
};
