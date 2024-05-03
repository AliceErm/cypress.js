describe('Покупка аватара', function () {                               // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
         cy.get('input[type="email"]').type('alica.voinova@yandex.ru');      // вводим логин
         cy.get('input[type="password"]').type('05Fkbcf97!');    // вводим пароль
         cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
         cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
         cy.get(':nth-child(1) > .shop__button').click();
         cy.get('.credit').type('4620869113632996');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
         cy.get('.k_input_name').type('ALICE VOINOVA');                           // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });

     it('e2e тест на покупку нового аватара №2 для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
        cy.get('input[type="email"]').type('alica.voinova@yandex.ru');      // вводим логин
        cy.get('input[type="password"]').type('05Fkbcf97!');    // вводим пароль
        cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
        cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
        cy.get(':nth-child(2) > .shop__button').click();
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('ALICE VOINOVA');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });
    
    it('e2e тест на покупку нового аватара №3 для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
        cy.get('input[type="email"]').type('alica.voinova@yandex.ru');      // вводим логин
        cy.get('input[type="password"]').type('05Fkbcf97!');    // вводим пароль
        cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
        cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
        cy.get(':nth-child(3) > .shop__button').click();
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('ALICE VOINOVA');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });

    it('e2e тест на покупку нового аватара №4 для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
        cy.get('input[type="email"]').type('alica.voinova@yandex.ru');      // вводим логин
        cy.get('input[type="password"]').type('05Fkbcf97!');    // вводим пароль
        cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
        cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
        cy.get(':nth-child(4) > .shop__button').click();
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('ALICE VOINOVA');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });

    it('e2e тест на покупку нового аватара №5 для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
        cy.get('input[type="email"]').type('alica.voinova@yandex.ru');      // вводим логин
        cy.get('input[type="password"]').type('05Fkbcf97!');    // вводим пароль
        cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
        cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
        cy.get(':nth-child(5) > .shop__button').click();
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('ALICE VOINOVA');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });

    it('e2e тест на покупку нового аватара №6 для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
        cy.get('input[type="email"]').type('alica.voinova@yandex.ru');      // вводим логин
        cy.get('input[type="password"]').type('05Fkbcf97!');    // вводим пароль
        cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
        cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
        cy.get(':nth-child(6) > .shop__button').click();
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('ALICE VOINOVA');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });

    it('e2e тест на покупку нового аватара №7 для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
        cy.get('input[type="email"]').type('alica.voinova@yandex.ru');      // вводим логин
        cy.get('input[type="password"]').type('05Fkbcf97!');    // вводим пароль
        cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
        cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
        cy.get(':nth-child(7) > .shop__button').click();
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('ALICE VOINOVA');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });

    it('e2e тест на покупку нового аватара №8 для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
        cy.get('input[type="email"]').type('alica.voinova@yandex.ru');      // вводим логин
        cy.get('input[type="password"]').type('05Fkbcf97!');    // вводим пароль
        cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
        cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
        cy.get(':nth-child(8) > .shop__button').click();
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('ALICE VOINOVA');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });

    it('e2e тест на покупку нового аватара №9 для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
        cy.get('input[type="email"]').type('alica.voinova@yandex.ru');      // вводим логин
        cy.get('input[type="password"]').type('05Fkbcf97!');    // вводим пароль
        cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
        cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
        cy.get(':nth-child(9) > .shop__button').click();
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('ALICE VOINOVA');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });

    it('e2e тест на покупку нового аватара №10 для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
        cy.get('input[type="email"]').type('alica.voinova@yandex.ru');      // вводим логин
        cy.get('input[type="password"]').type('05Fkbcf97!');    // вводим пароль
        cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
        cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
        cy.get(':nth-child(10) > .shop__button').click();
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('ALICE VOINOVA');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });

    it('e2e тест на покупку нового аватара №11 для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
        cy.get('input[type="email"]').type('alica.voinova@yandex.ru');      // вводим логин
        cy.get('input[type="password"]').type('05Fkbcf97!');    // вводим пароль
        cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
        cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
        cy.get(':nth-child(11) > .shop__button').click();
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('ALICE VOINOVA');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });

    it('e2e тест на покупку нового аватара №12 для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
        cy.get('input[type="email"]').type('alica.voinova@yandex.ru');      // вводим логин
        cy.get('input[type="password"]').type('05Fkbcf97!');    // вводим пароль
        cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
        cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
        cy.get(':nth-child(12) > .shop__button').click();
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('ALICE VOINOVA');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });
 });