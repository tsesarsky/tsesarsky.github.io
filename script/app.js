function soundClick(audioSrc) {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = audioSrc; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}