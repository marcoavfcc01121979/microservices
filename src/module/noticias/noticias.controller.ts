import { Body, Controller, Post } from '@nestjs/common';
import { Noticias } from './entities/noticia.entity';
import { NoticiasService } from './noticias.service';

@Controller('noticias')
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiasService) {}

  @Post()
  create(@Body() noticias: Noticias) {
    return this.noticiasService.criarNoticia;
  }

  /* @Get()
  findAll() {
    return this.noticiasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noticiasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoticiaDto: UpdateNoticiaDto) {
    return this.noticiasService.update(+id, updateNoticiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noticiasService.remove(+id);
  } */
}
