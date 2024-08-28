# DiaryProject

Этот проект был создан с использованием [Angular CLI](https://github.com/angular/angular-cli) версии 17.3.2.

## Установка и запуск проекта

### Предварительные требования

Перед началом работы убедитесь, что у вас установлены следующие инструменты:

1. **Node.js**:

- Проверьте установку, запустив команду:

    ```
    node -v
    ```

- Если Node.js не установлен, загрузите его с [официального сайта Node.js](https://nodejs.org/).

2. **Angular CLI**:

- Проверьте установку, запустив команду:

    ```
    ng version
    или
    ng --version
    ```

- Если Angular CLI не установлен, установите его глобально с помощью команды:

    ```
    npm install -g @angular/cli
    ```

### Установка проекта

1. **Выберите или создайте каталог для установки проекта**:

- Откройте терминал и перейдите в каталог, где вы хотите установить проект. Например:

    ```
    cd ~/Desktop
    ```

- Вы можете создать новый каталог, если это необходимо:

    ```
    mkdir diary-project
    cd diary-project
    ```

2. **Клонируйте репозиторий**:

    ```
    git clone https://github.com/leraborodina/diary-project.git
    ```

3. **Перейдите в каталог проекта**

    ```
    cd diary-project
    ```

4. **Установите зависимости**

    ```
    npm install
    ```

### Запуск проекта

1. **Запустите локальный сервер**

    ```
    ng serve
    ```

    или

    ```
    npm start
    ```

### Обработка ошибок

#### Если в процеесе запуска программы возникают такие ошибки как
```
npm start   

> diary-project@0.0.0 start
> ng serve

Node.js version v17.3.0 detected.
The Angular CLI requires a minimum of v18.13.

Please update your Node.js version or visit https://nodejs.org/ for additional instructions.
```

#### Выполните следующие команды
```
nvm install 18.16.1 
nvm use 18.16.1  
npm start
```

2. **Откройте проект в браузере**

    #### Перейдите по адресу http://localhost:4200

### Авторизация

#### Для авторизации создано два пользователя

    1. Пользователь 1

    логин: user1
    пароль: password1

    2.  Пользователь 2

    логин: user2
    пароль: password2
