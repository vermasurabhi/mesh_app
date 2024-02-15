import styles from "./CSS/ListItem.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function ListItem({
  listvaluee,
  rem,
  upvaluee,
  handleDrop,
  listvalnum,
}) {
  return (
    <>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container">
          {(provided) => (
            <div
              className={`${styles.outershell} mx-auto mt-2`}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {listvalnum.map((item, index) => (
                <Draggable key={item} draggableId={item + "a"} index={index}>
                  {(provided) => (
                    <div className={`d-flex`}>
                      <div
                        className={`${styles.listdes} mx-auto mt-2`}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <div className={`d-flex justify-content-around`}>
                          <div className="ps-2">
                            <input
                              type="color"
                              className={`mt-1 p-0 ${styles.colorpicker}`}
                              id={index}
                              value={listvaluee[index]}
                              title="Choose your color"
                              onChange={upvaluee}
                            />
                          </div>
                          <div className="p-2">{listvaluee[index]}</div>
                          <div className="p-2"></div>
                          <div
                            className={`${styles.button} p-2`}
                            onClick={rem}
                            id={index}
                            type="button"
                          >
                            Remove
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {/* <div className={`${styles.outershell} mx-auto mt-2`}>
        {listvaluee.map((ll, ind) => (
          <div key={ind}>
            <div className={`${styles.listdes} mx-auto mt-2`}>
              <div className={`d-flex justify-content-around`}>
                <div className="ps-2">
                  <input
                    type="color"
                    className={`mt-1 p-0 ${styles.colorpicker}`}
                    id={ind}
                    value={ll}
                    title="Choose your color"
                    onChange={upvaluee}
                  />
                </div>
                <div className="p-2">{ll}</div>
                <div className="p-2"></div>
                <div className={`${styles.button} p-2`} onClick={rem} id={ind}>
                  Remove
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
}
