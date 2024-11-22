// Back button functionality
function goBack() {
  window.history.back();
}

// Optional: Add interaction for clicking a card
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    alert(`Card ${card.id.split('-')[1]} selected!`);
  });
});
