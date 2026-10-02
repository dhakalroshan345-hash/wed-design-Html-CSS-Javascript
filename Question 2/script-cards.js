const cards = document.querySelectorAll('.card'); // all cards
const totalDisplay = document.getElementById('totalClicks'); // total counter
let totalClicks = 0; // total clicks
cards.forEach(card => {
  let count = 0; // per card count
  const btn = card.querySelector('.countBtn'); // button inside card
  // button click
  btn.addEventListener('click', () => {
    count++;
    totalClicks++;
    btn.textContent = `Clicked ${count}`; // update button
    totalDisplay.textContent = `Total: ${totalClicks}`; // update total
    btn.style.backgroundColor = (count % 2 === 0) ? '#facc15' : '#06b6d4'; // even/odd color
  });
  // hover log
  card.addEventListener('mouseenter', () => {
    console.log(`Hovered on: ${card.dataset.course}`);
  });

  // keyboard enter
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      btn.click(); // trigger click
    }
  });
});
