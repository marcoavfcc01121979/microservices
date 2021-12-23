import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Noticias } from './entities/noticia.entity';

@Injectable()
export class NoticiasService {
  constructor(
    @InjectRepository(Noticias)
    private readonly _noticiasRepo: Repository<Noticias>,
  ) {}

  async criarNoticia(noticias: Noticias) {
    // const tags = await this.repo.find({ where: { nome: In(nomes) } });

    /* if (tags) {
      const noticiaCriada = this._noticiasRepo.create({
        ...noticias,
        tags,
        categorias,
      });
    } */
    const noticiaCriada = await this._noticiasRepo.create(noticias);
    return await this._noticiasRepo.save(noticiaCriada);
  }

  /* findAll() {
    return `This action returns all noticias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} noticia`;
  }

  update(id: number, updateNoticiaDto: UpdateNoticiaDto) {
    return `This action updates a #${id} noticia`;
  }

  remove(id: number) {
    return `This action removes a #${id} noticia`;
  } */
}
