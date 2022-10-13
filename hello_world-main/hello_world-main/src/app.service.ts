import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBsm(): string {
    return '<ol><li>Responsabilida Pessoal</li><li>Trabalho em equipe</li><li>Comunicação</li><li>Persistência</li><li>Proatividade</li><li>Atenção aos detalhes</li><li>Orientação ao futuro</li><li>Mentalidade de crescimento</li></ol>'
  }
  getObjetivos(): string {
    return 'NestJS'
  }
}
