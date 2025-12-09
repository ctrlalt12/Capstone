import html from "html-literal";
import motiononly from "url:../MotionRewards/fashion.jpeg";

export default store => html`
  <div id="comment-app">
    <h2>Comments</h2>
    <div id="motiononly">
      <img src="${motiononly}" alt="logo" width="850" />
    </div>
    <form>
      <div class="comment-input-box">
        <textarea id="comment" placeholder="Write a comment..."></textarea>
        <div class="comment-tools">
          <span id="charCount">0/250</span>
          <input type="submit" value= "post" ></input>
          <button id2="postbtn">Vote❤️‍🔥🔥</button>
          <span id="charCount">1M Views</span>
        </div>
      </div>
    </form>
    <ul>
    ${store.comments
      .map(comment => {
        return `<li>${comment.comment}</li>
        `;
      })
      .join("")}
    </ul>

  </div>
`;
