const elementMenu = document.querySelector("#mainMenu");
const elmentMenuList = document.querySelector(".menu");
if (elementMenu) {
  elementMenu.addEventListener("click", () => {
    elmentMenuList.classList.toggle("open")
  })
}