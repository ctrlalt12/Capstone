import html from "html-literal";
import motiononly from "url:../MotionRewards/motiononly.jpeg";

export default state => html`
  <div id="motiononly">
    <img src="${motiononly}" alt="logo" width="1000" />
  </div>
  <div class="logo">👑</div>
  <h2>Where Motion Moves Forward</h2>

  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;
