import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElementsController } from './elements/elements.controller';
import { ElementsService } from './elements/elements.service';

@Module({
  imports: [],
  controllers: [AppController, ElementsController],
  providers: [AppService, ElementsService],
})
export class AppModule {}
