function getHash() {
  let params = window.location.hash;
  return params;
}
function setBSKYEmbedSearch() {
  let params = getHash();
  if (params !== "") {
    document
      .getElementsByTagName("bsky-embed")[0]
      .setAttribute("search", "from:dansnull.bsky.social " + params);
    document.getElementsByTagName("bsky-embed")[0].setAttribute("username", "");
    document.getElementsByClassName("breadcrumb")[0].innerHTML =
      '<li class="breadcrumb-item"><a href="#">Home</a></li><li class="breadcrumb-item active" aria-current="page"><a href="' +
      params +
      '">' +
      params +
      "</a></li>";
  }
}
setBSKYEmbedSearch();
window.addEventListener("hashchange", function () {
  window.location.reload();
});
