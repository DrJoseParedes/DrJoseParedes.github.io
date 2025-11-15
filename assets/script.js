document.getElementById('year').textContent = new Date().getFullYear();

const input = document.getElementById('pubSearch');
const list = document.getElementById('pubList');

input?.addEventListener('input', () => {
  const q = input.value.toLowerCase();
  list.querySelectorAll('.pub').forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(q) ? '' : 'none';
  });
});
