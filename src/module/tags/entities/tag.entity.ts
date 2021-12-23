// import { UniqueIdentifierEntity } from 'src/common/entities/unique-identifier.entity';
// import { EncryptedColumn } from 'src/decorators/encrypted-column.decorator';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tags {
  /*constructor(nome: string, idioma: string) {
    super();

    this.nome = nome;
    this.idioma = idioma;
  }*/

  @PrimaryGeneratedColumn()
  id: number;

  // @EncryptedColumn()
  @Column()
  nome: string;

  // @EncryptedColumn()
  @Column()
  idioma: string;

  /*@ManyToMany(() => Noticias, (noticias) => noticias.tags)
  noticias: Noticias[];*/
}
