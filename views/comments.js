import html from "html-literal";

export default () => html`
  <div id="comment-app">
    <h2>Comments</h2>

    <div class="comment-input-box">
      <textarea id="commentInput" placeholder="Write a comment..."></textarea>
      <div class="comment-tools">
        <span id="charCount">0/250</span>
        <button id="postBtn">Post</button>
      </div>
    </div>

    <div id="commentList"></div>
  </div>
`;
