// remove posts

let deleteUrl = document.getElementById("deleteUrl");

deleteUrl.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: btnClicked,
  });
});

function btnClicked() {
  let postIds = document.getElementsByClassName('feed-posts');

  for (let i = 0; i < postIds.length; i++) {

    let postId = postIds[i].id;
    let urlQuantity = document.getElementById(postId).querySelectorAll('span>a.et-link');

  if (urlQuantity.length > 4) {
    document.getElementById(postId).querySelectorAll("div.post-item-content").forEach(el => {
      el.style.opacity = '0',
      el.style.height = '30px'

// placeholder elements

      let placeholderChecked = document.getElementById(postId).getElementsByClassName('seePost');
      let userIds = document.getElementById(postId).getElementsByClassName('post-user-name');
      let userUrl = userIds[0].href;
      let userName = userIds[0].innerText;

      if (placeholderChecked.length === 0) {
        el.insertAdjacentHTML('beforebegin', `<div style="color:red; margin-top:30px; margin-left:30px">Post from <a href='${userUrl}' target="_blank" style="color:#2fa8f6">${userName}</a> hidden - <a href='https://www.etoro.com/posts/${postId}' target="_blank" class="seePost" id='${postId}' style="color:#2fa8f6">See post</a></div>`)
      }
    })
    }
  }
}
