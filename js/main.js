function getHash() {
  let params = window.location.hash;
  return params;
}
function setBSKYEmbedSearch() {
  let params = getHash();

  const bskyembed = document.getElementsByTagName("bsky-embed")[0];
  const markdownDiv = document.getElementById("MarkDownDiv");

  var showMarkdownPage = false;

  if (params != "") {
    if (params == "#MacOS-Stuff") {
      showMarkdownPage = fetchMarkdownAndConvert(
        "./pages/macos.md",
        "MarkDownDiv",
      );
    } else if (params == "#Linux-Stuff") {
      showMarkdownPage = fetchMarkdownAndConvert(
        "./pages/linux.md",
        "MarkDownDiv",
      );
    } else if (params == "#iOS-Stuff") {
      showMarkdownPage = fetchMarkdownAndConvert(
        "./pages/ios.md",
        "MarkDownDiv",
      );
    } else {
      setBskyParams(params);
    }
    setBreadcrumbPage(params);
  }

  if (showMarkdownPage) {
    bskyembed.style.display = "none";
    markdownDiv.style.display = "inline";
  } else {
    bskyembed.style.display = "inline";
    markdownDiv.style.display = "none";
  }
}

function setBskyParams(searchParams) {
  const bskyembed = document.getElementsByTagName("bsky-embed")[0];
  if (searchParams != "") {
    bskyembed.setAttribute("username", "");
    bskyembed.setAttribute(
      "search",
      "from:dansnull.bsky.social " + searchParams,
    );
    setBreadcrumbPage(searchParams);
  }
}

function setBreadcrumbPage(params) {
  const breadcrumb = document.getElementsByClassName("breadcrumb")[0];
  breadcrumb.innerHTML =
    '<li class="breadcrumb-item"><a href="#">Home</a></li><li class="breadcrumb-item active" aria-current="page"><a href="' +
    params +
    '">' +
    params +
    "</a></li>";
}

async function fetchMarkdownAndConvert(githubUrl, targetElementId) {
  try {
    const response = await fetch(githubUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const markdownText = await response.text();
    const html = marked.parse(markdownText);
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      targetElement.innerHTML = html;
      return true;
    } else {
      console.error(`Target element with ID '${targetElementId}' not found.`);
      return false;
    }
  } catch (error) {
    console.error("Error fetching or converting Markdown:", error);
    return false;
  }
}

window.addEventListener("hashchange", function () {
  window.scrollTo(0, 0);
  setTimeout(() => {
    window.location.reload();
  }, 500);
});

setBSKYEmbedSearch();
