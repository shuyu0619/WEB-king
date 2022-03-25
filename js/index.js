var spanList = document.getElementById("nav").getElementsByTagName("span");
for (let i = 0; i < spanList.length; i++) {
  spanList[i].num = i;

  spanList[i].onclick = function () {
    for (let f = 0; f < spanList.length; f++) {
      if (f == this.num) {
        document.getElementById(
          spanList[f].innerText.substring(0, 4)
        ).style.display = "block";
        spanList[f].style.borderBottom = "2px solid #fff";
        console.log(spanList[f].innerText.substring(0, 4));
      } else {
        spanList[f].style.borderBottom = "none";
        document.getElementById(
          spanList[f].innerText.substring(0, 4)
        ).style.display = "none";
      }
    }
  };
}
