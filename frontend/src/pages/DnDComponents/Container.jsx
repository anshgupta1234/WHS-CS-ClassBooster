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

function renderBox(item, key, deleteDesk) {
  return <DraggableBox onClick={() => deleteDesk(key)} key={key} id={key} {...item} />;
}

export const Container = ({ snapToGrid, desks }) => {
  const [boxes, setBoxes] = useState(desks.desks);
  console.log(boxes)
  const moveBox = useCallback(
    (id, left, top) => {
      let tempBoxes = boxes
      tempBoxes[id]["left"] = left
      tempBoxes[id]["top"] = top
      desks.updateDesks(tempBoxes)
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
      {Object.keys(boxes).map((key) => renderBox(boxes[key], key, desks.deleteDesk))}
    </div>
  );
};
