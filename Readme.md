# Тестовое задание на вакансию Middle Frontend Developer (Vue.js) в Bell Integrator

## Посмотреть на сервере
Frontend: [http://194.67.105.79:80](http://194.67.105.79:80)

Backend: [http://194.67.105.79:3000](http://194.67.105.79:3000)

<details>
<summary>Задание</summary>
Реализация задания должна быть  на TypeScript.

## Задача:
Реализовать web приложение с использованием фреймворка Vue.js, которое совершает
запрос 100 элементов со следующей структурой из любого открытого api:jjjj
```
{
  id,
  name,
  items: [
    {
      id,
      name
    }
  ]
}
```



В приложении должно быть реализовано 2 страницы: главная и история.
**Главная страница** должна состоять из двух колонок:
- В первой колонке отображается список всех элементов, полученных из api и поле текстового ввода. При вводе текста в поле фильтровать отображаемые элементы списка по следующему правилу: показывать только те элементы, у которых введенная пользователем строка входит в поле `name` или в `items.name` и сортировать список элементов по количеству вхождений строки в обратном порядке.
У каждого элемента должна быть кнопка [+] при нажатии на которую элемент списка попадает во вторую колонку и пропадает из первой
- Во второй колонке отображаются "выбранные" элементы списка. У каждого элемента должна быть кнопка [-] при нажатии на которую элемент списка возвращается в первую колонку и пропадает из второй соответственно
- На главной странице так-же присутствуют три кнопки: [история][история добавлений][история удалений]. При нажатии на кнопку должен происходить переход на страницу истории с соответствующим параметром.
**Страница истории** состоит из списка событий перемещения элементов из колонки в колонку на главной странице. Событие должно показывать, какой элемент `{id, name}` был перемещен, какого рода было перемещение (добавление/удаление) и когда (любое отображение времени события)

</details>

### Стек
Backend: Nest.js, Express.js, TypeScript

Frontend: Vue.js, TypeScript

Deploy: Docker, Nginx (для Frontend)

## Запуск проекта

### В режиме разработки:

```
cd server
npm run start:dev
cd ../client
npm run serve
```

### Через Docker (production)

Для этого варианта должны быть установлены `docker` и `docker-compose` или `Docker Desktop`.

Для демонстрационных целей backend доступен по адресу `http://localhost:3000`

```
docker-compose up
```

Для запуска в "тихом режиме" используйте `-d` (detached mode);

Примечание! Версия docker image `node:latest` не используется из-за отсутствия в данном image `git`, что может вызывать ошибки на `build-stage`. Разработчики знают о проблеме и обещают исправить, на момент разработки проблема актуальна. 
