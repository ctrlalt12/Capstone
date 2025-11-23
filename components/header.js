import html from "html-literal";

export default state => html`
  <header>
    <div class="logo">M</div>
    <h1>${state.header}</h1>
  </header>
`;
