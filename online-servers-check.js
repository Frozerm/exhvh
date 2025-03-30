// URL JSON файла
const jsonUrlScout = "https://api.gamemonitoring.ru/servers/8274860";
const jsonUrlDT = "https://api.gamemonitoring.ru/servers/8274859";
const jsonUrlNix = "https://api.gamemonitoring.ru/servers/8109015";

// Функция для получения данных и обновления страницы
async function fetchPlayerCount() {
    try {
        const response = await fetch(jsonUrlScout);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        
        // Получаем значение numplayers из response
        const playerCountScout = data.response.numplayers;
        
        // Обновляем элемент на странице
        document.getElementById('playerCountScout').textContent = playerCountScout;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        document.getElementById('playerCountScout').textContent = 'Ошибка загрузки';
    }
}
// Вызываем функцию при загрузке страницы
fetchPlayerCount();

async function fetchPlayerCountDT() {
    try {
        const response = await fetch(jsonUrlDT);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        
        // Получаем значение numplayers из response
        const playerCountDT = data.response.numplayers;
        
        // Обновляем элемент на странице
        document.getElementById('playerCountDT').textContent = playerCountDT;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        document.getElementById('playerCountDT').textContent = 'Ошибка загрузки';
    }
}
// Вызываем функцию при загрузке страницы
fetchPlayerCountDT();

async function fetchPlayerCountNix() {
    try {
        const response = await fetch(jsonUrlNix);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        
        // Получаем значение numplayers из response
        const playerCountNix = data.response.numplayers;
        
        // Обновляем элемент на странице
        document.getElementById('playerCountNix').textContent = playerCountNix;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        document.getElementById('playerCountNix').textContent = 'Ошибка загрузки';
    }
}

// Вызываем функцию при загрузке страницы
fetchPlayerCountNix();
