import{header,nav,main,footer} from "./components";
import* as storefrom "./store"
import Navigo from "navigo";
import { camelCase } from "lodash";

const router = new Navigo("/");
function render(state=store.home)
document.querySelector("#root").innerHTML=`
${header(state)}
${nav(store.nav)}
${main(state)}
${footer()}
`;
router.on("/", () => render()).resolve();
router.on({
  "/": () => render(),
  '/:view': function(match) {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    if (view in store) {
      render(store[view]);
    } else {
      render(store.viewNotFound);
      console.log(`View ${view} not defined`);
    }
  }
}).resolve();
    :root {
      --bg: #0f1724;
      --card: #121b2e;
      --accent: #7ae7c7;
      --muted: #9aa4b2;
      --radius: 12px;
      --gap: 18px;
      --ease: cubic-bezier(.2,.9,.2,1);
      --max-width: 1100px;
      --nav-height: 68px;
    }
