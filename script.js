// Small JS helpers: smooth-anchor scrolling + sticky header shadow
(function(){
  // Smooth scrolling for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1){
        const el = document.querySelector(id);
        if (el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth', block:'start'});
          history.pushState(null, '', id);
        }
      }
    });
  });

  // Add shadow to header on scroll
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    header.style.boxShadow = y > 4 ? '0 10px 30px rgba(0,0,0,0.25)' : 'none';
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();