
/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
  showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
  showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
  let slides = document.getElementsByClassName("item");
  let allimg = document.querySelector('.all_img');
  let index = document.querySelector('.index_img');
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  /* Проходим по каждому слайду в цикле for */
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

  if (slides.length < 10) {
    allimg.innerHTML = `0${slides.length}`
  }
  if (slideIndex < 10) {
    index.innerHTML = `0${slideIndex}`
  }
}

/**                           Valid FORM FOR CLASS 'CONTACT_US'                          */


function validFunction() {
  let telefon = document.querySelector('.telefon');
  let email = document.querySelector('.email');
  let message = document.querySelector('.message');
  let checkBox = document.querySelector('.checkboxInput');
  /**                                     Check Phone number                              */
  let text = telefon.value;
  let array = text.split('');
  let phoneNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+'];
  let index = 0;
  for (let item of array) {
    for (let number of phoneNumber) {
      if (item == number) {
        index++
      }
    }
  }

  if (index !== array.length) {
    telefon.setAttribute('placeholder', 'Введите телефон');
    telefon.style.border = '1px solid red';
    telefon.value = '';
    alert('Введите коректные символы')
  }

  if (telefon.value == '') {
    telefon.style.border = '1px solid red';

    telefon.setAttribute('placeholder', 'Введите телефон');
    return false;
  }
  /**                                            Check email                                 */
  if (email.value == '') {
    email.style.border = '1px solid red';
    return false;
  }
  /**                                                Check Message                                   */
  console.log(message.value.length);
  if (message.value.length > 1000) {
    alert('Слишком большое сообщение')
  }


  if (message.value == '') {
    message.style.border = '1px solid red';
    return false;
  }

  /**                                 Check CheckBox                                         */
  if (!checkBox.checked) {
    checkBox.style.border = '1px solid red';
    return false
  }
  return true
}


/**                                      SLICK SLIDER                            */
$('.slider').slick();
