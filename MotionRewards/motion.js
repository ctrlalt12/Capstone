let comments = [];

const input = document.querySelector("commentInput");
const postBtn = document.querySelector("postBtn");
const commentList = document.querySelector("commentList");
const charCount = document.querySelector("charCount");

input.addEventListener("input", () => {
  charCount.textContent = `${input.value.length}/250`;
});
