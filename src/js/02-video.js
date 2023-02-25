import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
player.on('timeupdate', throttle(setLocalStorage, 1000));

// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
const showTime = localStorage.getItem('videoplayer-current-time');
if (showTime) {
    player.setCurrentTime(JSON.parse(showTime).seconds);
};
console.log(showTime);

// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
function setLocalStorage(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}
