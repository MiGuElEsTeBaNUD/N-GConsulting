(function () {
  var sel = document.getElementById('servicio');
  var wa = document.getElementById('wa');
  function build() {
    var msg = 'Hola, me interesa el servicio de ' + sel.value + '. ¿Me pueden asesorar?';
    wa.href = 'https://wa.me/573212316499?text=' + encodeURIComponent(msg);
  }
  sel.addEventListener('change', build);
  document.getElementById('compose').addEventListener('submit', function (e) { e.preventDefault(); });
  build();

  function fallbackCopy(text) {
    var t = document.createElement('textarea');
    t.value = text; t.setAttribute('readonly', '');
    t.style.position = 'fixed'; t.style.opacity = '0';
    document.body.appendChild(t); t.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(t);
  }
  document.querySelectorAll('.copy').forEach(function (b) {
    b.addEventListener('click', function () {
      var text = b.getAttribute('data-copy');
      var done = function () {
        var old = b.textContent; b.textContent = 'Copiado';
        setTimeout(function () { b.textContent = old; }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
      } else { fallbackCopy(text); done(); }
    });
  });
})();
