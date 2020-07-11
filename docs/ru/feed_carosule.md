---
title: Настройка карусели редиректов
---


#### Что это такое?
После нажатия на кнопку «Block» в окне запроса подписки у пользователя снова появляется окно подписки на уведомления.

#### Как это работает
После нажатия на кнопку «Block» происходит редирект на точно такую же страницу на другом домене или поддомене, где происходит новый запрос подписки.

#### Как это настроить

1. **Настройка вашего домена:** В DNS-записях вашего домена создайте ряд поддоменов, указывающий на один и тот же IP-адрес. Например, если ваш основной домен _yourdomain.org_, то создайте поддомены: _1.yourdomain.org_, _2.yourdomain.org_, _3.yourdomain.org_ указывающие на точно такой же IP-адрес, как и _yourdomain.org_. Убедитесь, что поддомены работают и открывают точно такой же сайт, как и основной домен _yourdomain.org_.
2. **Настройка фида:** На странице Фида заполните поле _Редиректы при нажатии на «Запретить_ списком всех доменов и поддоменов с новой строки, как это указанно выше.
3. **Загрузка скрипта на сервер:** Скачайте один из HTML-шаблонов или разместите код со страницы Фида у себя на сайте. (Если вы используете чистый скрипт, то убедитесь, что стоит галочка запроса подписки при загрузке страницы).

Все, теперь пользователь нажимая на кнопку «Block» будет редиректнут на поддомен и там будет снова запрошена подписка. Когда все домены закончатся, сработает редирект из поля *Редирект при ошибке*