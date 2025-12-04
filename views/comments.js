import html from "html-literal";
import motiononly from "url:../MotionRewards/fashion.jpeg";

export default () => html`
  <div id="comment-app">
    <h2>Comments</h2>
    <div id="motiononly">
      <img src="${motiononly}" alt="logo" width="850" />
    </div>

    <div class="comment-input-box">
      <textarea id="commentInput" placeholder="Write a comment..."></textarea>
      <div class="comment-tools">
        <span id="charCount">0/250</span>
        <button id="postBtn">Post</button>
        <button id2="postbtn">Vote❤️‍🔥🔥</button>
        <span id="charCount">1M Views</span>
      </div>
    </div>

    <div id="commentList"></div>
  </div>
`;
