import { render } from "react-dom";
import React from "react";

import app from "./components";

app(component => render(component, document.getElementById("root")));