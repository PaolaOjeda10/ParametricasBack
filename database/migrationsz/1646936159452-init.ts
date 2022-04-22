import {MigrationInterface, QueryRunner} from "typeorm";

export class init1646936159452 implements MigrationInterface {
    name = 'init1646936159452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "seprec"."categorias_tipo_catalogo_enum" AS ENUM('TRAMITE', 'PUBLICACION')`);
        await queryRunner.query(`CREATE TABLE "seprec"."categorias" ("fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "usuario_creacion" character varying NOT NULL, "fecha_actualizacion" TIMESTAMP DEFAULT now(), "usuario_actualizacion" character varying, "usuario_baja" character varying, "fecha_baja" date, "accion" character varying, "estado" character varying(30) NOT NULL DEFAULT 'ACTIVO', "id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "tipo_catalogo" "seprec"."categorias_tipo_catalogo_enum" NOT NULL DEFAULT 'TRAMITE', "orden" integer NOT NULL, CONSTRAINT "PK_3886a26251605c571c6b4f861fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "seprec"."documentos_emitidos" ("fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "usuario_creacion" character varying NOT NULL, "fecha_actualizacion" TIMESTAMP DEFAULT now(), "usuario_actualizacion" character varying, "usuario_baja" character varying, "fecha_baja" date, "accion" character varying, "estado" character varying(30) NOT NULL DEFAULT 'ACTIVO', "id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "tipo" character varying NOT NULL, "plantilla" character varying NOT NULL, "uso_qr" jsonb NOT NULL, "id_catalogo_tramite" integer NOT NULL, CONSTRAINT "PK_b99eaf461c6dcededf196fc41ce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "seprec"."par_publicaciones" ("fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "usuario_creacion" character varying NOT NULL, "fecha_actualizacion" TIMESTAMP DEFAULT now(), "usuario_actualizacion" character varying, "usuario_baja" character varying, "fecha_baja" date, "accion" character varying, "estado" character varying(30) NOT NULL DEFAULT 'ACTIVO', "id" SERIAL NOT NULL, "documento" character varying NOT NULL, "grupo" character varying NOT NULL, "dependiente" boolean NOT NULL, "id_catalogo_tramite" integer NOT NULL, CONSTRAINT "PK_e9d0186b58828fbb20f1594ed6c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "seprec"."campos" ("fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "usuario_creacion" character varying NOT NULL, "fecha_actualizacion" TIMESTAMP DEFAULT now(), "usuario_actualizacion" character varying, "usuario_baja" character varying, "fecha_baja" date, "accion" character varying, "estado" character varying(30) NOT NULL DEFAULT 'ACTIVO', "id" integer NOT NULL, "campo" character varying NOT NULL, "tipo" character varying NOT NULL, "label" character varying NOT NULL, "tooltip" character varying NOT NULL, "orden" integer NOT NULL, "iop" character varying, "desabilitado" boolean, "valor_defecto" character varying, "validacion" text, "parametrica" character varying, "parametrica_text" character varying, "campo_padre" character varying, "campo_hijo" character varying, "filtro" character varying, "max_min_fecha" jsonb, "size" integer NOT NULL, "tabla" character varying NOT NULL, "cantiad_max" integer NOT NULL, "docuemnto_soporte" boolean, "codigo_tipo_documento" character varying, "criterio_opcional" character varying, "id_seccion" integer NOT NULL, CONSTRAINT "PK_354272e954a46096a9392ee3c98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "seprec"."secciones" ("fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "usuario_creacion" character varying NOT NULL, "fecha_actualizacion" TIMESTAMP DEFAULT now(), "usuario_actualizacion" character varying, "usuario_baja" character varying, "fecha_baja" date, "accion" character varying, "estado" character varying(30) NOT NULL DEFAULT 'ACTIVO', "id" integer NOT NULL, "nombre" character varying NOT NULL, "descripcion" character varying NOT NULL, "orden" integer NOT NULL, "id_grupo" integer NOT NULL, CONSTRAINT "PK_b178372c4f021edaaa1debd24e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "seprec"."grupos" ("fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "usuario_creacion" character varying NOT NULL, "fecha_actualizacion" TIMESTAMP DEFAULT now(), "usuario_actualizacion" character varying, "usuario_baja" character varying, "fecha_baja" date, "accion" character varying, "estado" character varying(30) NOT NULL DEFAULT 'ACTIVO', "id" integer NOT NULL, "nombre" character varying NOT NULL, "descripcion" character varying NOT NULL, "orden" integer NOT NULL, "flujo" character varying NOT NULL, "documento_soporte" boolean NOT NULL DEFAULT false, "aprobacion_documentos" boolean NOT NULL DEFAULT false, "pago" boolean NOT NULL DEFAULT false, "id_catalogo_tramite" integer NOT NULL, CONSTRAINT "PK_34de64ec8a5ecd99afb23b2bd62" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "seprec"."catalogo_tramites_tipo_enum" AS ENUM('EN_LINEA', 'SEMI_LINEA', 'PRESENCIAL')`);
        await queryRunner.query(`CREATE TYPE "seprec"."catalogo_tramites_tipo_catalogo_enum" AS ENUM('TRAMITE', 'PUBLICACION')`);
        await queryRunner.query(`CREATE TABLE "seprec"."catalogo_tramites" ("fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "usuario_creacion" character varying NOT NULL, "fecha_actualizacion" TIMESTAMP DEFAULT now(), "usuario_actualizacion" character varying, "id" integer NOT NULL, "nombre" character varying NOT NULL, "codigo" character varying NOT NULL, "tipo" "seprec"."catalogo_tramites_tipo_enum" NOT NULL, "tipo_catalogo" "seprec"."catalogo_tramites_tipo_catalogo_enum" NOT NULL DEFAULT 'TRAMITE', "tipo_societario_habilitado" text array, "tipo_tramite_habilitado" text array, "version" character varying NOT NULL, "requiere_registrar_editar_seccion" boolean NOT NULL DEFAULT false, "requiere_pago" boolean NOT NULL, "requiere_presentacion" boolean NOT NULL, "requiere_revision" boolean NOT NULL, "requiere_publicacion" boolean NOT NULL, "emite_certificado" boolean NOT NULL, "duracion" integer NOT NULL, "api" character varying, "ruta_front" character varying, "pre_ruta_front" character varying, "requiere_matricula_vigente" boolean NOT NULL DEFAULT false, "metodo_bbtener_tnformacion" character varying, "metodo_validar_datos" character varying, "metodo_despues_del_pago" character varying, "metodo_volcar_datos" character varying, "id_tramite_parametrica_categoria" integer NOT NULL, CONSTRAINT "PK_8f62a06f8ef5f334877efe082b1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "seprec"."aranceles" ("fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "usuario_creacion" character varying NOT NULL, "fecha_actualizacion" TIMESTAMP DEFAULT now(), "usuario_actualizacion" character varying, "usuario_baja" character varying, "fecha_baja" date, "accion" character varying, "estado" character varying(30) NOT NULL DEFAULT 'ACTIVO', "id" SERIAL NOT NULL, "monto" numeric(20,5) NOT NULL, "tipo" character varying NOT NULL, "funcion_dependiente" character varying, "cod_tipo_societario" character varying, "id_catalogo_tramite" integer NOT NULL, CONSTRAINT "PK_a549d77eee45277a69b7f1dedb6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "seprec"."documentos_emitidos" ADD CONSTRAINT "FK_0186c68bb0ffb28fce50dcbb37f" FOREIGN KEY ("id_catalogo_tramite") REFERENCES "seprec"."catalogo_tramites"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seprec"."par_publicaciones" ADD CONSTRAINT "FK_09d3eddb88151bae231f32f4cca" FOREIGN KEY ("id_catalogo_tramite") REFERENCES "seprec"."catalogo_tramites"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seprec"."campos" ADD CONSTRAINT "FK_8d3b80d4ea70050d2d138d59b3a" FOREIGN KEY ("id_seccion") REFERENCES "seprec"."secciones"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seprec"."secciones" ADD CONSTRAINT "FK_578f7129c5773b43ad1a6dbfe77" FOREIGN KEY ("id_grupo") REFERENCES "seprec"."grupos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seprec"."grupos" ADD CONSTRAINT "FK_32a0f69305be119beb4a926d864" FOREIGN KEY ("id_catalogo_tramite") REFERENCES "seprec"."catalogo_tramites"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seprec"."catalogo_tramites" ADD CONSTRAINT "FK_32f89accd040669164c2650b47b" FOREIGN KEY ("id_tramite_parametrica_categoria") REFERENCES "seprec"."categorias"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seprec"."aranceles" ADD CONSTRAINT "FK_01c8144e81b5d62753a2a7ac99a" FOREIGN KEY ("id_catalogo_tramite") REFERENCES "seprec"."catalogo_tramites"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "seprec"."aranceles" DROP CONSTRAINT "FK_01c8144e81b5d62753a2a7ac99a"`);
        await queryRunner.query(`ALTER TABLE "seprec"."catalogo_tramites" DROP CONSTRAINT "FK_32f89accd040669164c2650b47b"`);
        await queryRunner.query(`ALTER TABLE "seprec"."grupos" DROP CONSTRAINT "FK_32a0f69305be119beb4a926d864"`);
        await queryRunner.query(`ALTER TABLE "seprec"."secciones" DROP CONSTRAINT "FK_578f7129c5773b43ad1a6dbfe77"`);
        await queryRunner.query(`ALTER TABLE "seprec"."campos" DROP CONSTRAINT "FK_8d3b80d4ea70050d2d138d59b3a"`);
        await queryRunner.query(`ALTER TABLE "seprec"."par_publicaciones" DROP CONSTRAINT "FK_09d3eddb88151bae231f32f4cca"`);
        await queryRunner.query(`ALTER TABLE "seprec"."documentos_emitidos" DROP CONSTRAINT "FK_0186c68bb0ffb28fce50dcbb37f"`);
        await queryRunner.query(`DROP TABLE "seprec"."aranceles"`);
        await queryRunner.query(`DROP TABLE "seprec"."catalogo_tramites"`);
        await queryRunner.query(`DROP TYPE "seprec"."catalogo_tramites_tipo_catalogo_enum"`);
        await queryRunner.query(`DROP TYPE "seprec"."catalogo_tramites_tipo_enum"`);
        await queryRunner.query(`DROP TABLE "seprec"."grupos"`);
        await queryRunner.query(`DROP TABLE "seprec"."secciones"`);
        await queryRunner.query(`DROP TABLE "seprec"."campos"`);
        await queryRunner.query(`DROP TABLE "seprec"."par_publicaciones"`);
        await queryRunner.query(`DROP TABLE "seprec"."documentos_emitidos"`);
        await queryRunner.query(`DROP TABLE "seprec"."categorias"`);
        await queryRunner.query(`DROP TYPE "seprec"."categorias_tipo_catalogo_enum"`);
    }

}
