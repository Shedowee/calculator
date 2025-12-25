import { useDispatch, useSelector } from "react-redux";
import { input, clear, calculate } from "../features/calculatorSlice";

export default function Calculator() {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.calculator.display);

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="container mt-5" style={{ maxWidth: 320 }}>
      <div className="card shadow">
        <div className="card-body">
          <input
            className="form-control text-end mb-3"
            value={display}
            readOnly
          />

          <button
            className="btn btn-danger w-100 mb-2"
            onClick={() => dispatch(clear())}
          >
            C
          </button>

          <div className="row g-2">
            {buttons.map((btn) => (
              <div className="col-3" key={btn}>
                <button
                  className={`btn w-100 ${
                    btn === "=" ? "btn-success" : "btn-secondary"
                  }`}
                  onClick={() =>
                    btn === "=" ? dispatch(calculate()) : dispatch(input(btn))
                  }
                >
                  {btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
