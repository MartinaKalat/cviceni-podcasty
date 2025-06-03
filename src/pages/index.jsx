import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Episode} from "../components/Episode.jsx";

document.querySelector("#root").innerHTML = render(
   <Episode />

);
