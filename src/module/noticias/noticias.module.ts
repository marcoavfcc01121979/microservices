import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Noticias } from './entities/noticia.entity';
import { NoticiasController } from './noticias.controller';
import { NoticiasService } from './noticias.service';

@Module({
  imports: [TypeOrmModule.forFeature([Noticias])],
  controllers: [NoticiasController],
  providers: [NoticiasService],
  exports: [NoticiasService],
})
export class NoticiasModule {}
