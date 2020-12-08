const http = require('http');

/**
 * Страница входа в игру
 */
export class StartPage {

    constructor() {
        document.getElementById('textInp').addEventListener('input', () => {
            this.validate();
        });
    }

    /**
        * Проверить правильность заполнения формы
    */
    private validate(): void {
        const options = {
            hostname: '127.0.0.1',
            port: 3000,
            path: `/check_nick?nickname=${this.getNickname()}`,
            method: 'Get'
        };
        
        const req = http.request(options, (res: any) => {
            res.on('data', (body: any) => {
                if (JSON.parse(body)) {
                    (document.getElementById('textInp') as HTMLInputElement).setCustomValidity('');
                }
                else {
                    (document.getElementById('textInp') as HTMLInputElement).setCustomValidity('Никнейм уже занят.');
                }
            });
        });
        req.end();
    }
    
    /**
     * Скрыть форму после получения данных от пользователя
     */
    hide(): void {
        const formContainer = document.getElementById('form-container') as HTMLElement;
        formContainer.classList.add('hide');
    }

    /**
     * Получить ник из формы для отправки на сервер
     */
    getNickname(): string {
        return (document.getElementById('textInp') as HTMLInputElement).value;
    }

    /**
     * Получить выбранный пользователем цвет для отправки на сервер
     */
    getColor(): string {
        return (document.getElementById('colorInp') as HTMLInputElement).value.substr(1);
    }
}
