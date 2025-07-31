function toggleBlock(button) {
    const wrapper = button.closest('.toggle-wrapper');
    const block = wrapper.querySelector('.info-block-all');
    const icon = wrapper.querySelector('.toggle-icon');

    block.classList.toggle('expanded');
    icon.classList.toggle('expanded');
    wrapper.classList.toggle('expanded')

    const expanded = block.classList.contains('expanded');

    icon.src = expanded ? 
    './img/minus-icon.svg' : './img/plus-icon.svg';
}

function goToSlide(index) {
    const track = document.getElementById('sliderTrack');
    const slideWidth = document.querySelector('.slide').offsetWidth;

    track.style.transform = `translateX(-${index * slideWidth }px)`;

    for (let i = 0; i < 6; i++) {
      const btn = document.getElementById(`btn-${i}`);
      const icon = document.getElementById(`icon-${i}`);

      if (btn) btn.classList.remove('active');
      if (icon) icon.src = "./img/icon-default.svg";
    }

    const activeBtn = document.getElementById(`btn-${index}`);
    const activeIcon = document.getElementById(`icon-${index}`);
    if (activeBtn) activeBtn.classList.add('active');
    if (activeIcon) activeIcon.src = "./img/icon-active.svg";
}


window.addEventListener('DOMContentLoaded', () => goToSlide(0));


window.onload = () => goToSlide(0);


document.querySelector('.btn-contact').addEventListener('click', function () {

  const nameInput = document.getElementById('Name-input');
  const emailInput = document.getElementById('Email-input');
  const messageInput = document.getElementById('Message-input');

  const name = document.getElementById('Name-input').value;
  const email = document.getElementById('Email-input').value;
  const message = document.getElementById('Message-input').value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
        alert('Пожалуйста, введите корректный email.');
        return;
  }

  if (!name || !message) {
        alert('Пожалуйста, заполните все поля.');
        return;
  }

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  alert('Сообщение успешно отправлено!');
});

document.querySelectorAll('.error-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        alert('переход по этой ссылке запрещен');
    });
});

document.querySelector('.sub-btn').addEventListener('click', function () {

  const emailInput = document.getElementById('footer-email');
  const emailFooter = document.getElementById('footer-email').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailFooter)) {
        alert('Пожалуйста, введите корректный email.');
        return;
  }

  emailInput.value = '';
  alert('Сообщение успешно отправлено!');

});