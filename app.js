const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.code === "Enter") {
    search();
  }
});

function search() {
  const input = searchInput.value;

  window.location.href =
    "https://www.google.com/search?q=" +
    input +
    "&sxsrf=AOaemvKV5y0Np4O17S9zbVxehM8mvJB_Cw%3A1643012462024&source=hp&ei=bWHuYcK8PNOM8gLrjYnACw&iflsig=ALs-wAMAAAAAYe5vfjjIYnI4ZcyNvrbxf-15A9pLm_zI&ved=0ahUKEwiCp6Kx-sn1AhVThlwKHetGArgQ4dUDCAc&uact=5&oq=" +
    input +
    "&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMggILhCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMg4IABCABBCxAxCDARDJAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIICAAQgAQQsQMyBQgAELEDOgcIIxDqAhAnOgsIABCABBCxAxCDAToLCC4QgAQQsQMQgwE6CwguEIAEEMcBEKMCOgsILhCxAxDHARDRAzoECCMQJzoFCC4QgAQ6CAgAELEDEIMBOgsILhCABBDHARDRAzoJCCMQJxBGEPkBOg4ILhCABBCxAxDHARCvAToRCC4QgAQQsQMQgwEQxwEQrwFQhwZYzx5gyi1oAXAAeACAAa0CiAHeCpIBBTItNC4xmAEAoAEBsAEK&sclient=gws-wiz";
}
