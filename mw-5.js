let urlParams = window.location.href;
urlParams = urlParams.split("?")[1];

let cdnOriginalUrl = "https://apo-api.mws.test/" + urlParams + "",
  altParagraph = document.createElement("p");
altParagraph.style.textAlign = "center";
let cdnOriginalLink = document.createElement("a");
(cdnOriginalLink.style.margin = "20px"),
  (cdnOriginalLink.href = cdnOriginalUrl + ""),
  cdnOriginalLink.appendChild(
    document.createTextNode("Download original file (alternative link)")
  );

altParagraph.appendChild(cdnOriginalLink),
  document.body.appendChild(altParagraph);
