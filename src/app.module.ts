import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { NodemonModule } from './nodemon/nodemon.module';


@Module({
  imports: [TasksModule, NodemonModule],
 
})
export class AppModule {}
