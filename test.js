import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

import useNavigatorOnline from "./index";

function NavigatorTest() {
  const { isOnline, isOffline } = useNavigatorOnline();

  return (
    <p>
      {isOnline ? "online" : "not online"}{" "}
      {isOffline ? "offline" : "not offline"}
    </p>
  );
}

describe("useNavigatorOnline", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("can hooked", () => {
    act(() => {
      ReactDOM.render(<NavigatorTest />, container);
    });

    const result = container.querySelector("p");
    expect(result.textContent).toBe("online not offline");
  });
});
