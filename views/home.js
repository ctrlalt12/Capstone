import html from "html-literal";

export default () => html`
  <div class="logo">M</div>
  <h2>Where Motion Moves Forward</h2>
`;
already: match => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
  },
  after: match => {
    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
