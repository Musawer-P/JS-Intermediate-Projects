  const container = document.getElementById('slider');
  const leftBtn = document.getElementById('leftBtn');
  const rightBtn = document.getElementById('rightBtn');

  function scrollLeft() {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  function scrollRight() {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }

  leftBtn.addEventListener('click', scrollLeft);
  rightBtn.addEventListener('click', scrollRight);

  function updateButtons() {
    const maxScroll = container.scrollWidth - container.clientWidth;
    leftBtn.style.display = container.scrollLeft > 5 ? 'inline-block' : 'none';
    rightBtn.style.display = container.scrollLeft < maxScroll - 5 ? 'inline-block' : 'none';
  }

  container.addEventListener('scroll', updateButtons);
  window.addEventListener('load', updateButtons);










document.querySelectorAll('.banner__button').forEach(button => {
  button.addEventListener('click', () => {
    alert(`${button.textContent} button clicked!`);
  });
});

document.querySelectorAll(".faq-f").forEach((faqItem) => {
  faqItem.addEventListener("click", () => {
    const answer = faqItem.nextElementSibling;
    const plusIcon = faqItem.querySelector(".plus-icon");
    const closeIcon = faqItem.querySelector(".close-icon");

    const isOpen = answer.style.display === "block";

    answer.style.display = isOpen ? "none" : "block";

    plusIcon.style.display = isOpen ? "inline" : "none";
    closeIcon.style.display = isOpen ? "none" : "inline";
  });
});

