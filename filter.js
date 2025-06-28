document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-buttons button');
  const cards = document.querySelectorAll('.character-card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'flex';
        } else if (filter === 'survivor') {
          // suvクラスがついているのを表示
          if (card.classList.contains('suv')) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        } else if (filter === 'hunter') {
          if (card.classList.contains('hunter')) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });
});
