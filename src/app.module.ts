import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule, Routes } from 'nest-router'
import { CalculateModule } from './app/calculate/calculate.module';

const routes: Routes = [
  {
    path: '/',
    children: [
      {
        path: '/calculate',
        module: CalculateModule
      }
    ]
  }
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    ConfigModule.forRoot(),
    CalculateModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
