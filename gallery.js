'use strict';
// Progressive enhancement: without JavaScript, each screenshot opens directly.
const gallery = document.querySelector('.lightbox');
if (gallery && typeof gallery.showModal === 'function') {
  const image = gallery.querySelector('.lightbox-image');
  const title = gallery.querySelector('h2');
  const caption = gallery.querySelector('.lightbox-caption');
  document.querySelectorAll('[data-gallery]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const figure = link.closest('figure');
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      title.textContent = figure.querySelector('h3').textContent;
      caption.textContent = figure.querySelector('figcaption p').textContent;
      gallery.showModal();
      document.body.classList.add('gallery-open');
    });
  });
  gallery.querySelector('[data-close]').addEventListener('click', () => gallery.close());
  gallery.addEventListener('click', event => { if (event.target === gallery) gallery.close(); });
  gallery.addEventListener('close', () => document.body.classList.remove('gallery-open'));
}
