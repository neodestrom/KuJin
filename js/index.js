
function main () {
  changeNav()

  $(window).on("resize", () => {
    if (window.innerWidth < 992) {
      hideElement(".main-ad .row")
      hideElement(".navbar-default .navbar-collapse .a")
      showElement(".navbar-default .navbar-collapse .dropdown")
    } else {
      showElement(".main-ad .row")
      showElement(".navbar-default .navbar-collapse .a")
      hideElement(".navbar-default .navbar-collapse .dropdown")
    }
  })

}
main();
function changeNav () {
  $(window).on('scroll', (e) => {
    if (e.currentTarget.scrollY >= 493) {
      $(".navbar").addClass("navbar-transform")
    } else {
      $(".navbar").removeClass("navbar-transform")
    }
  })
}
function hideElement (ele) {
  document.querySelectorAll(ele).forEach(e => e.classList.replace("show", "hide"))
  console.log(document.querySelectorAll(ele))
}
function showElement (ele) {
  document.querySelectorAll(ele).forEach(e => e.classList.replace("hide", "show"))
}