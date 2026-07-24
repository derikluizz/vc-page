/* Valor Contadores — main.js */
(function () {
  'use strict';

  /* --- Header scroll --- */
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- Mobile menu --- */
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.nav__mobile');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const open = toggle.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- Active nav link --- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .nav__mobile a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* --- Scroll reveal (Intersection Observer) --- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(el => observer.observe(el));
  }

  /* --- Stat counters --- */
  const statValues = document.querySelectorAll('[data-count]');
  if (statValues.length) {
    const animateCount = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        el.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCount(e.target);
          statObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    statValues.forEach(el => statObserver.observe(el));
  }

  /* --- FAQ accordion --- */
  document.querySelectorAll('.faq-item__q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      item.closest('.faq-list').querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* --- Phone mask --- */
  document.querySelectorAll('input[data-mask="phone"]').forEach(input => {
    input.addEventListener('input', function () {
      let v = this.value.replace(/\D/g, '').slice(0, 11);
      if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      } else if (v.length > 6) {
        v = v.replace(/^(\d{2})(\d{4})(\d*)$/, '($1) $2-$3');
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d*)$/, '($1) $2');
      }
      this.value = v;
    });
  });

  /* --- Contact form ---
     TODO: sem backend definido ainda. Por ora abre o cliente de e-mail do
     usuário com os dados preenchidos (mailto). Trocar por um endpoint real
     (ex: Formspree, EmailJS, PHP mailer) quando a hospedagem for definida. */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm(form)) return;

      const nome     = document.getElementById('nome').value.trim();
      const email    = document.getElementById('email').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const assunto  = document.getElementById('assunto') ? document.getElementById('assunto').value : '';
      const mensagem = document.getElementById('mensagem').value.trim();

      const destino = 'contato@valorcontadores.com.br';
      const subject = 'Contato pelo site' + (assunto ? ' — ' + assunto : '');
      const body =
        'Nome: ' + nome + '\n' +
        'E-mail: ' + email + '\n' +
        'Telefone: ' + telefone + '\n\n' +
        mensagem;

      window.location.href = 'mailto:' + destino
        + '?subject=' + encodeURIComponent(subject)
        + '&body='    + encodeURIComponent(body);

      form.reset();
    });
  }

  function validateForm(form) {
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        field.classList.add('error');
        valid = false;
      }
    });
    if (!valid) {
      form.querySelector('.error')?.focus();
    }
    return valid;
  }
})();
