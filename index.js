import {header,nav,main,footer} from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";

const router = new Navigo("/");
function render(state=store.home) {
document.querySelector("#root").innerHTML=`
${header(state)}
${nav(store.nav)}
${main(state)}
${footer()}
`;


}


router.hooks({
  before: (done, params) => {
    const view = params?.data?.view ? camelCase(params.data.view) : "home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=st%20louis`
          )
          .then(response => {
            store.home.weather = {
              city: response.data.name,
              temp: response.data.main.temp,
              feelsLike: response.data.main.feels_like,
              description: response.data.weather[0].main
            };
            console.log("weather in store",store.home.weather)
            done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
        break;

      default :
        done();
    }
  },
  already: (params) => {
    const view = params?.data?.view ? camelCase(params.data.view) : "home";

    render(store[view]);
  },
  after:(match)=>{
const view = match?.data?.view ? camelCase(match.data.view) : "home";
 router.updatePageLinks();
  }
});

router.on({
  "/": () => render(),
  '/:view': function(match) {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    if (view in store) {
      render(store[view]);
    } else {

      console.log(`View ${view} not defined`);
    }
  }
}).resolve();
