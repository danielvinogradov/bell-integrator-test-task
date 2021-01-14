import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<p>Это backend для Тестового задания Frontend разработчик в Bell Integrator. Список элементов доступен <a href="http://localhost:3000/elements">по ссылке</a>.</p>';
  }
}
