const textarea = document.getElementById('input-text');
const tagscontainer = document.querySelector('.tags');

textarea.focus();

textarea.addEventListener('keyup', function (e) {
  const tags = textarea.value
    .split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());

  tagscontainer.innerHTML = '';
  tags.forEach(tag => {
    tagscontainer.insertAdjacentHTML('beforeend', `<span class="tag">${tag}</span>`);
  });

  if (e.key === 'Enter') {
    textarea.value = '';
    const interval = setInterval(() => {
      const randomTag = tagscontainer.children[Math.trunc(Math.random() * tags.length)];
      highlightTag(randomTag);

      setTimeout(unHighlightTag.bind('_', randomTag), 100);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setTimeout(() => {
        const randomTag = tagscontainer.children[Math.trunc(Math.random() * tags.length)];
        highlightTag(randomTag);
      }, 100);
    }, 30 * 100);
  }
});

function highlightTag(tag) {
  tag.classList.add('highlight');
}
function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
