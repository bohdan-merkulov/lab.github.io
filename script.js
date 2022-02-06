let model = prompt('Какой у вас iPhone? Поддерживаемые модели: XR, 11, 12, 13, 13 Pro Max, SE2020 (не пишите слово iPhone!)');
let name = prompt('Введите ваше имя');
let check = confirm('Вы согласны с обработкой информации?');
function whichPhone() {
	let welcomeText = document.createElement('p');
	welcomeText.innerHTML = "Здравствуйте, " + name + '!';
	document.getElementById("welcome").appendChild(welcomeText);
	let phonePhoto = document.createElement('img');
	let info = document.createElement('div');
	info.className = "all-info";
	let title = document.createElement('div');
	title.className = "phone-title";
if (((model == "xr") || (model == "XR") || (model == "Xr") || (model == "xR")) & (check)) {
	phonePhoto.setAttribute("src","iphone-xr-red.png");
    document.getElementById("model-photo").appendChild(phonePhoto);
    title.innerHTML = "iPhone XR";
  	info.innerHTML = "Экран 6.1 дюйма, 828 x 1792 пикселей, закаленное стекло <br> Apple A12 Bionic, 6 ядер <br> 3 ГБ оперативной памяти <br> 64, 128, 256 ГБ объем накопителя <br> Батарея Li-Ion 2942 мАч, беспроводная и быстрая зарядка <br> Основная камера 12 мегапикселей, цифровой зум и оптическая стабилизация <br> Фронтальная камера 7 мегапикселей ";
  	document.getElementById("phone-info").appendChild(title);
  	document.getElementById("phone-info").appendChild(info);
    alert("Ваши данные готовы!");
}
else if ((model == "11") & (check)) {
	phonePhoto.setAttribute("src","iphone11-black.png");
    document.getElementById("model-photo").appendChild(phonePhoto);
    title.innerHTML = "iPhone 11";
    info.innerHTML = "Экран 6.1 дюйма, 828 x 1792 пикселей, закаленное стекло <br> Apple A13 Bionic, 6 ядер <br> 4 ГБ оперативной памяти <br> 64, 128, 256 ГБ объем накопителя <br> Батарея Li-Ion 3110 мАч, беспроводная и быстрая зарядка <br> Основная камера 12 мегапикселей, цифровой зум и оптическая стабилизация <br> Фронтальная камера 12 мегапикселей ";
    document.getElementById("phone-info").appendChild(title);
  	document.getElementById("phone-info").appendChild(info);
    alert("Ваши данные готовы!");
}

else if ((model == "12") & (check)) {
	phonePhoto.setAttribute("src","iphone-12.png");
    document.getElementById("model-photo").appendChild(phonePhoto);
    title.innerHTML = "iPhone 12";
    info.innerHTML = "Экран 6.1 дюйма, 1170 x 2532 пикселей, закаленное стекло <br> Apple A14 Bionic, 6 ядер <br> 4 ГБ оперативной памяти <br> 64, 128, 256 ГБ объем накопителя <br> Батарея Li-Ion 2815 мАч, беспроводная и быстрая зарядка <br> Основная камера 12 мегапикселей, цифровой зум и оптическая стабилизация <br> Фронтальная камера 12 мегапикселей ";
    document.getElementById("phone-info").appendChild(title);
  	document.getElementById("phone-info").appendChild(info);
    alert("Ваши данные готовы!");
}

else if ((model == "13") & (check)) {
	phonePhoto.setAttribute("src","iphone13.png");
    document.getElementById("model-photo").appendChild(phonePhoto);
    title.innerHTML = "iPhone 13";
    info.innerHTML = "Экран 6.1 дюйма, 1170 x 2532 пикселей, закаленное стекло <br> Apple A15 Bionic, 6 ядер <br> 4 ГБ оперативной памяти <br> 128, 256, 512 ГБ объем накопителя <br> Батарея Li-Ion 3227 мАч, беспроводная и быстрая зарядка <br> Основная камера 12 мегапикселей, цифровой зум и оптическая стабилизация <br> Фронтальная камера 12 мегапикселей ";
    document.getElementById("phone-info").appendChild(title);
  	document.getElementById("phone-info").appendChild(info);
    alert("Ваши данные готовы!");
}

else if (((model == "13 pro max") || (model == "13promax") || (model == "13 Pro Max") || (model == "13ProMax")) & (check)) {
	phonePhoto.setAttribute("src","iphone-13-pro-max.png");
    document.getElementById("model-photo").appendChild(phonePhoto);
    title.innerHTML = "iPhone 13 Pro Max";
    info.innerHTML = "Экран 6.7 дюймов, 1284 x 2778 пикселей, Ceramic Shield <br> Apple A15 Bionic, 6 ядер <br> 6 ГБ оперативной памяти <br> 128, 256, 512, 1024 ГБ объем накопителя <br> Батарея Li-Ion 4352 мАч, беспроводная и быстрая зарядка <br> Основная камера 12 мегапикселей, оптический зум и оптическая стабилизация <br> Фронтальная камера 12 мегапикселей ";
    document.getElementById("phone-info").appendChild(title);
  	document.getElementById("phone-info").appendChild(info);
    alert("Ваши данные готовы!");
}

else if (((model == "se2") || (model == "se2020") || (model == "Se2020") || (model == "SE2020") || (model == "SE 2020") || (model == "Se 2020") || (model == "se 2020")) & (check)) {
	phonePhoto.setAttribute("src","se2020.png");
    document.getElementById("model-photo").appendChild(phonePhoto);
    title.innerHTML = "iPhone SE2020";
    info.innerHTML = "Экран 4.7 дюйма, 750 x 1334 пикселей, закаленное стекло <br> Apple A13 Bionic, 6 ядер <br> 3 ГБ оперативной памяти <br> 64, 128, 256 ГБ объем накопителя <br> Батарея Li-Ion 1821 мАч, беспроводная и быстрая зарядка <br> Основная камера 12 мегапикселей, цифровой зум и оптическая стабилизация <br> Фронтальная камера 7 мегапикселей ";
    document.getElementById("phone-info").appendChild(title);
  	document.getElementById("phone-info").appendChild(info);
    alert("Ваши данные готовы!");
}

else if (!check) {
	alert('Нам очень жаль, что вы не согласны с обработкой информации. Возвращайтесь позднее!');
	phonePhoto.setAttribute("src","no-photo.png");
    document.getElementById("model-photo").appendChild(phonePhoto);
}
else {
	alert('Модель не существует или пока не добавлена нами. Попробуйте снова!');
	phonePhoto.setAttribute("src","no-photo.png");
    document.getElementById("model-photo").appendChild(phonePhoto);
}
}

window.onload = function() {
    whichPhone();
  };

