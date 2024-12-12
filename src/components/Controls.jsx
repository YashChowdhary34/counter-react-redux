import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const addInputElement = useRef();
  const deleteInputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAddValue = () => {
    dispatch({
      type: "ADD",
      payload: Number(addInputElement.current.value),
    });
    addInputElement.current.value = "";
  };
  const handleDeleteValue = () => {
    dispatch({
      type: "DELETE",
      payload: Number(deleteInputElement.current.value),
    });
    deleteInputElement.current.value = "";
  };
  const handlePrivaceToggle = () => {
    dispatch({
      type: "PRIVACY_TOGGLE",
    });
  };

  return (
    <>
      <div
        className="d-grid gap-2 d-sm-flex justify-content-sm-center"
        style={{ paddingBottom: "50px" }}
      >
        <button
          type="button"
          className="btn btn-success"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivaceToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary btn-success"
          type="button"
          id="button-addon1"
          onClick={handleAddValue}
        >
          Increment
        </button>
        <input
          type="text"
          className="form-control"
          ref={addInputElement}
          placeholder="Enter value to add"
          aria-describedby="button-addon1"
        />
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          ref={deleteInputElement}
          placeholder="Enter value to remove"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary btn-danger"
          type="button"
          id="button-addon2"
          onClick={handleDeleteValue}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default Controls;
