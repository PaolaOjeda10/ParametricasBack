export declare const SWAGGER_API_ROOT = "api/docs";
export declare const SWAGGER_API_NAME = "Proyecto base";
export declare const SWAGGER_API_DESCRIPTION = "Documentaci\u00F3n de proyecto base";
export declare const SWAGGER_API_CURRENT_VERSION = "1.0";
export declare enum Status {
    ACTIVE = "ACTIVO",
    INACTIVE = "INACTIVO",
    CREATE = "CREADO",
    PENDING = "PENDIENTE",
    CANCEL = "CANCELADO"
}
export declare enum Order {
    ASC = "ASC",
    DESC = "DESC"
}
export declare enum TipoDocumento {
    CI = "CI",
    PASAPORTE = "PASAPORTE",
    OTRO = "OTRO"
}
export declare enum Genero {
    M = "M",
    F = "F",
    OTRO = "OTRO"
}
export declare const TRAMITE_ACTUALIZACION_MATRICULA = 1;
export declare enum TramiteParametricaTipo {
    EN_LINEA = "EN_LINEA",
    SEMI_LINEA = "SEMI_LINEA",
    PRESENCIAL = "PRESENCIAL"
}
export declare enum TramiteParametricaTipoCatalogo {
    TRAMITE = "TRAMITE",
    PUBLICACION = "PUBLICACION"
}
export declare enum TramiteEstado {
    SOLICITUD = "SOLICITUD",
    FINALIZADO = "FINALIZADO",
    ACEPTADO = "ACEPTADO",
    PAGADO = "PAGADO",
    ASIGNADO = "ASIGNADO",
    REVISION = "REVISION",
    CONCLUIDO = "CONCLUIDO",
    APROBADO = "APROBADO",
    INSCRITO = "INSCRITO",
    ANULADO = "ANULADO",
    REINGRESADO = "REINGRESADO",
    OBSERVADO = "OBSERVADO",
    ELIMINADO = "ELIMINADO",
    EN_CURSO = "EN_CURSO",
    CONFIRMADO = "CONFIRMADO",
    PUBLICADO = "PUBLICADO",
    APROBANDO = "APROBANDO",
    PRESENTADO = "PRESENTADO"
}
export declare const TramiteEstadoNoVitacora: string[];
export declare const TipoTramite: {
    TRAMITE: number;
    PUBLICACION: number;
};
export declare enum TramiteAcciones {
    PAGO_SOLICITADO = "PAGO SOLICITADO",
    FACTURA_SOLICITADA = "FACTURA SOLICITADA",
    FACTURA_ANULACION = "EN ANULACION FACTURA",
    FACTURA_EMITIDA = "FACTURA EMITIDA",
    FACTURA_ANULADA = "FACTURA ANULADA"
}
export declare enum ObservacionEstado {
    ACTIVE = "ACTIVO",
    INACTIVE = "INACTIVO"
}
export declare enum TramiteProcesos {
    APROBACION_CIUDADANIA = "Aprobaci\u00F3n con ciudadania digital",
    GENERACION_CODIGO_YURIÑA = "Generaci\u00F3n de c\u00F3digo Yuri\u00F1a",
    PUBLICACION_GACETA = "Publicaci\u00F3n en la gaceta",
    ACTUALIZACION_BD_REGISTRO_COMERCIO = "Actualizaci\u00F3n en la base de datos de registro de comercio",
    ACTUALIZACION_KARDEX_DOCUMENTOS = "Actualizaci\u00F3n del Kardex de documentos",
    GENERACION_CERTIFICADOS = "Generaci\u00F3n de certificados"
}
export declare const CATALOGO_TRAMITE_CAMPO = "campo";
export declare const CAMPO_TIPO_ARCHIVO = "file";
export declare const DOCUMENTO_SOPORTE_FIELD_NAME = "fieldname";
export declare const DocumentoSoporteFields: {
    NRO_DOCUMENTO: string;
    EMISOR: string;
    FECHA_EMSION: string;
    NRO_DOCUMENTO_ENTITY: string;
    EMISOR_ENTITY: string;
    FECHA_EMSION_ENTITY: string;
};
export declare const ParametrosFacturacion: {
    MUNICIPIO: string;
    DEPARTAMENTO: string;
    TELEFONO_CONTACTO: string;
    CODIGO_SUCURSAL: number;
    PUNTO_VENTA: number;
    DOCUMENTO_SECTOR: number;
    FORMATO_FACTURA: string;
    CORREO_CONTACTO: string;
    ACTIVIDAD_ECONOMICA: string;
    CODIGO_SIN: string;
};
export declare const GruposParametros: {
    TIPO_ESTADO_ACTUALIZACION: string;
    TIPO_SOCIETARIO: string;
    DEPARTAMENTO: string;
    PROVINCIA: string;
    MUNICIPIO: string;
    TIPO_DOCUMENTO_ID: string;
    TIPO_CIERRE_GESTION: string;
    TIPO_SUBDIVISION_GEOGRAFICA: string;
    TIPO_VIA: string;
    TIPO_AMBIENTE: string;
    TIPO_RAZON_SOCIAL: string;
};
export declare const OrigenLogin: {
    HABILITACION: string;
    NORMAL: string;
    INTERNO: string;
};
export declare const FormatoRespuestaFUNDEMPRESA: {
    rutina: string;
    sinCantidadPorDefecto: string;
    registroEncontrado: string;
    registroNoEncontrado: string;
};
export declare const RUTA_LOGO = "./src/templates/logo.png";
export declare const RUTA_REPORTES = "/tmp/";
export declare const MAX_SIZE_LOGO = 700000;
export declare const CLASIFICADOR_ACTIVO = "CAEB";
export declare const CLASIFICADOR_INACTIVO = "CIIU";
export declare enum TipoContacto {
    TELEFONO = "TELEFONO",
    CORREO = "CORREO"
}
export declare const PublicacionEstado: {
    PUBLICADO: string;
    PAGADO: string;
};
export declare const MATRICULA_ACTUALIZADO_VIGENTE = "0";
export declare const CAMPO_REQUIRED = "required";
