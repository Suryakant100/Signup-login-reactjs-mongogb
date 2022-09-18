import React, { useEffect, useState } from "react";
import febostyle from "./fibonacci.module.css";
import basestyle from "../Base.module.css";

function Fibonacci() {
  const [Numbers, setNumber] = useState({
    first: "",
    second: "",
  });
  const [reord, setRecord] = useState([]);
  const [data, setData] = useState([]);

  function demo(first, second) {
    let arr = [];

    let next;
    for (let i = 0; i < 10; i++) {
      next = first + second;
      first = second;
      second = next;
      arr.push(next);
    }
    return arr;
  }

  // console.log(arr);

  const fibonacciHandler = (e) => {
    e.preventDefault();
    console.log(Numbers);
    const newRecord = { ...Numbers, id: new Date().getTime().toString() };
    // console.log(reord);
    setRecord([...reord, newRecord]);
    const result = demo(Number(reord[0].first), Number(reord[0].second));
    setData(result);

    // console.log(data);
    // console.log(result);

    setNumber({ first: "", second: "" });

    // }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNumber({
      ...Numbers,
      [name]: value,
    });
  };

  // console.log(reord.first);

  return (
    <div className={febostyle.fibonacci}>
      <form action="" onSubmit={fibonacciHandler}>
        <h1>Fibonacci</h1>
        <input
          type="number"
          name="first"
          id="first"
          placeholder="Enter First Name"
          onChange={changeHandler}
          value={Numbers.first}
        />
        {/* <p className={basestyle.error}>{formErrors.email}</p> */}
        <input
          type="number"
          name="second"
          id="second"
          placeholder="Enter Second Number"
          onChange={changeHandler}
          value={Numbers.second}
        />
        {/* <p className={basestyle.error}>{formErrors.password}</p> */}
        <button className={basestyle.button_common} type="submit">
          Get series
        </button>
      </form>
      {/* <NavLink to="/signup">Not yet registered? Register Now</NavLink> */}
      <div className={febostyle.row}>
        {data.map((val, i) => {
          return (
            <div key={i}>
              <p>{val}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Fibonacci;
