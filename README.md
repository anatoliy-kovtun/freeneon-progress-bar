# javascript плагін прогрес-бару прокрутки сторінки у вигляді смужки, яка показує, скільки відсотків сторінки прокручено.

## Встановлення плагіна

- Підключіть файл `freeneon-progress-bar.js`:

```
<script src="freeneon-progress-bar.js"></script>
```

- Викличте у своєму головному JS-файлі функцію:
```
freeneonProgressBar();
```
Функція приймає один параметр для вказання селектора елемента прогрес-бару, наприклад:
```
freeneonProgressBar(".progress-bar");
```
Або

```
freeneonProgressBar("#progress-bar");
```
Приклад знаходиться у файлі index.html
