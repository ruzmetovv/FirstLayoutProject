document.addEventListener("DOMContentLoaded", function () {
  const themeCheckbox = document.getElementById("themeCheckbox");
  const defaultStylesheet = document.getElementById("defaultStylesheet");

  // Получаем сохраненные значения из localStorage
  const savedTheme = localStorage.getItem("selectedTheme");
  const isChecked = localStorage.getItem("checkboxChecked") === "true";

  // Устанавливаем начальную тему и состояние чекбокса при загрузке страницы
  if (savedTheme) {
    defaultStylesheet.setAttribute("href", savedTheme);
  } else {
    defaultStylesheet.setAttribute("href", "./styles/dark-main.min.css");
  }

  themeCheckbox.checked = isChecked;

  themeCheckbox.addEventListener("change", function () {
    const newStylesheet = themeCheckbox.checked ? "./sass/main.css" : "./styles/dark-main.min.css";

    // Устанавливаем новый файл CSS в зависимости от состояния чекбокса
    defaultStylesheet.setAttribute("href", newStylesheet);

    // Сохраняем выбранную тему и состояние чекбокса в localStorage
    localStorage.setItem("selectedTheme", newStylesheet);
    localStorage.setItem("checkboxChecked", themeCheckbox.checked);
  });
});
