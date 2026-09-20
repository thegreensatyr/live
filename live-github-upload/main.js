// Nav toggle
var t = document.querySelector('.nav-toggle');
if (t) t.addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Countdown to Satyr Arcana II — Halloween 2026 (midnight Phoenix time, UTC-7)
var cd = document.getElementById('countdown');
if (cd) {
  var target = new Date('2026-10-31T00:00:00-07:00').getTime();
  function tick() {
    var d = target - Date.now();
    if (d <= 0) { cd.innerHTML = '<span><b>OUT NOW</b></span>'; return; }
    var days = Math.floor(d / 864e5),
      hrs = Math.floor(d % 864e5 / 36e5),
      min = Math.floor(d % 36e5 / 6e4);
    cd.innerHTML =
      '<span><b>' + days + '</b> days</span>' +
      '<span><b>' + hrs + '</b> hrs</span>' +
      '<span><b>' + min + '</b> min</span>';
  }
  tick();
  setInterval(tick, 30000);
}

// Click-to-play video facades — no autoplaying red YouTube UI, no channel-name leak
document.querySelectorAll('.video-facade[data-video]').forEach(function (el) {
  el.addEventListener('click', function () {
    var id = el.getAttribute('data-video');
    var title = el.getAttribute('data-title') || 'Video';
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
    iframe.title = title;
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    el.innerHTML = '';
    el.appendChild(iframe);
  });
});
