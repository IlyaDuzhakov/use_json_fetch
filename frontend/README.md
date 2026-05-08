## Available Scripts

In the project directory, you can run:

### `npm start`
### `npm test`
### `npm run build`

В этом проекте есть:

backend - создан сервер на node.js (с использованием express) и описаны возможные пути для  get запросов (/loading, /data, /error)

frontend:
1) Cоздан кастомный хук useJsonFetch, который позволяет обрабатывать запрос: получать информацию, обрабатывать ошибки и контролировать статус загрузки.
2) Используем useJsonFetch, чтобы посмотреть, как обрабатываются успешные запросы, неуспешные и запросы с длительной загрузкой.
