// Масштабує макет 820×1160 під ширину екрана, зберігаючи пропорції з Figma.
(function () {
  const BASE_W = 820;
  const BASE_H = 1160;
  const stage = document.getElementById('stage');

  function fit() {
    const scale = Math.min(window.innerWidth / BASE_W, 1.5);
    stage.style.transform = 'scale(' + scale + ')';
    stage.style.marginLeft = Math.max((window.innerWidth - BASE_W * scale) / 2, 0) + 'px';
    document.body.style.height = BASE_H * scale + 'px';
  }

  window.addEventListener('resize', fit);
  window.addEventListener('beforeprint', function () { stage.style.transform = 'none'; stage.style.marginLeft = '0'; });
  window.addEventListener('afterprint', fit);
  fit();
})();
