const endpoint = process.env.ENDPOINT;

window.onload = function () {
  const comment = document.getElementById("comment") as any;
  const submit = document.getElementById("submit") as HTMLElement;
  submit.addEventListener("click", function () {
    // FIXME: (null as any) as number :thinking_face:
    chrome.tabs.getSelected((null as any) as number, function (tab: any) {
      fetch(`${endpoint}/postBookMark`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: tab.title,
          url: tab.url,
          comment: comment.value,
        }),
      })
        .then(() => {
          comment.value = "";
        })
        .catch((err) => {
          alert(JSON.stringify(err));
        });
    });
  });
};
