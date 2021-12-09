# Gwitter

Этот проект находится на стадии разработки...\
Новые функции постоянно добавляются!\
Номер телефона для поддержки проекта: `963 924 91 85` (сбер, тинькоф)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/main/](http://localhost:3000/main) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `json-server`

run json-server for start the server ;)\
json-server --watch db.json --port=3001

### Modules and libraries

[React](https://ru.reactjs.org/) + [Redux](https://redux.js.org/) + [redux-thunk](https://github.com/reduxjs/redux-thunk) + [react-router](https://reactrouter.com/) + [axios](https://axios-http.com/) + [json-server](https://www.npmjs.com/package/json-server) + [node-sass](https://www.npmjs.com/package/node-sass) + [framer-motion](https://www.framer.com/motion/) + [material ui](https://mui.com/)

### Реализованные функции

Две разные странички для авторизации и регистрации, сами данные мы заполняем в модальном окне у которой есть крутая анимация. \
Реализованна валидация, проверка на уже существующего пользователя, и все эти данные сверяются с сервером. \

На главной страничке отображается меню, посты и сайдбар с поиском по постам.\
Отображаемые посты зависят от конкретного пользователя. \
Каждый пользователь получает с сервера только необходимую для него информацию, тоесть осуществленно разграничение данных для безопастности. \

У пользователя есть возможность добавлять, удалять посты, создавать закладки.
При добавлении постов стоит ограничение на количество вводиммых символов сопроваждающееся красивой анимацией. \

