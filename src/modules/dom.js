export default class dom {
  static loadHomepage() {
    const inbox = document.querySelector(".inbox");
    const today = document.querySelector(".today");
    const week = document.querySelector(".week");

    inbox.addEventListener("click", dom.loadInbox);
    today.addEventListener("click", dom.loadToday);
    week.addEventListener("click", dom.loadNextWeek);
    const content = document.querySelector(".project-content");
  }

  static loadInbox() {
    const content = document.querySelector(".project-content");
    const navBtns = document.querySelectorAll(".nav-btn");
    const inbox = document.querySelector(".inbox");

    navBtns.forEach(btn => btn.classList.remove("active"));
    inbox.classList.add("active");
    content.innerHTML = `Test`;
  }

  static loadToday() {
    const content = document.querySelector(".project-content");
    const navBtns = document.querySelectorAll(".nav-btn");
    const today = document.querySelector(".today");

    navBtns.forEach(btn => btn.classList.remove("active"));
    today.classList.add("active");
    content.innerHTML = `Test2`;
  }

  static loadNextWeek() {
    const content = document.querySelector(".project-content");
    const navBtns = document.querySelectorAll(".nav-btn");
    const week = document.querySelector(".week");

    navBtns.forEach(btn => btn.classList.remove("active"));
    week.classList.add("active");
    content.innerHTML = `Test3`;
  }
}