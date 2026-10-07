// Mobilné menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Filter projektov
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    projects.forEach(p => {
      const show = f === 'all' || p.dataset.cat.includes(f);
      p.style.display = show ? 'block' : 'none';
    });
  });
});

// Fake odoslanie formulára (školská práca - bez backendu)
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('formMsg').textContent = '✅ Ďakujem! Správa bola (naoko) odoslaná. V školskej verzii sa nikam neposiela.';
  e.target.reset();
});
