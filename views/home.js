import html from "html-literal";

export default state => html`
  <div class="logo">M</div>
  <h2>Where Motion Moves Forward</h2>

  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;
