// import { UniqueIdentifierEntity } from 'src/common/entities/unique-identifier.entity';
// import { EncryptedColumn } from 'src/decorators/encrypted-column.decorator';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Noticias {
  /* constructor(
    titulo: string,
    conteudo: string,
    idioma: string,
    // categories: Categories[],
    // tags: Tags[],
  ) {
    super();

    this.titulo = titulo;
    this.conteudo = conteudo;
    this.idioma = idioma;
    // this.categories = categories;
    // this.tags = tags;
  }*/

  @PrimaryGeneratedColumn()
  id: number;

  // @EncryptedColumn()
  @Column()
  titulo: string;

  // @EncryptedColumn()
  @Column()
  conteudo: string;

  // @EncryptedColumn()
  @Column()
  idioma: string;

  /* @ManyToMany(() => Categories, (categories) => categories.noticias)
  @JoinTable()
  categories: Categories[];

  @ManyToMany(() => Tags, (tags) => tags.noticias)
  @JoinTable()
  tags: Tags[]; */
}
