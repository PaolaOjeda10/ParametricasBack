"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAMPO_REQUIRED = exports.MATRICULA_ACTUALIZADO_VIGENTE = exports.PublicacionEstado = exports.TipoContacto = exports.CLASIFICADOR_INACTIVO = exports.CLASIFICADOR_ACTIVO = exports.MAX_SIZE_LOGO = exports.RUTA_REPORTES = exports.RUTA_LOGO = exports.FormatoRespuestaFUNDEMPRESA = exports.OrigenLogin = exports.GruposParametros = exports.ParametrosFacturacion = exports.DocumentoSoporteFields = exports.DOCUMENTO_SOPORTE_FIELD_NAME = exports.CAMPO_TIPO_ARCHIVO = exports.CATALOGO_TRAMITE_CAMPO = exports.TramiteProcesos = exports.ObservacionEstado = exports.TramiteAcciones = exports.TipoTramite = exports.TramiteEstadoNoVitacora = exports.TramiteEstado = exports.TramiteParametricaTipoCatalogo = exports.TramiteParametricaTipo = exports.TRAMITE_ACTUALIZACION_MATRICULA = exports.Genero = exports.TipoDocumento = exports.Order = exports.Status = exports.SWAGGER_API_CURRENT_VERSION = exports.SWAGGER_API_DESCRIPTION = exports.SWAGGER_API_NAME = exports.SWAGGER_API_ROOT = void 0;
exports.SWAGGER_API_ROOT = 'api/docs';
exports.SWAGGER_API_NAME = 'Proyecto base';
exports.SWAGGER_API_DESCRIPTION = 'Documentación de proyecto base';
exports.SWAGGER_API_CURRENT_VERSION = '1.0';
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVO";
    Status["INACTIVE"] = "INACTIVO";
    Status["CREATE"] = "CREADO";
    Status["PENDING"] = "PENDIENTE";
    Status["CANCEL"] = "CANCELADO";
})(Status = exports.Status || (exports.Status = {}));
var Order;
(function (Order) {
    Order["ASC"] = "ASC";
    Order["DESC"] = "DESC";
})(Order = exports.Order || (exports.Order = {}));
var TipoDocumento;
(function (TipoDocumento) {
    TipoDocumento["CI"] = "CI";
    TipoDocumento["PASAPORTE"] = "PASAPORTE";
    TipoDocumento["OTRO"] = "OTRO";
})(TipoDocumento = exports.TipoDocumento || (exports.TipoDocumento = {}));
var Genero;
(function (Genero) {
    Genero["M"] = "M";
    Genero["F"] = "F";
    Genero["OTRO"] = "OTRO";
})(Genero = exports.Genero || (exports.Genero = {}));
exports.TRAMITE_ACTUALIZACION_MATRICULA = 1;
var TramiteParametricaTipo;
(function (TramiteParametricaTipo) {
    TramiteParametricaTipo["EN_LINEA"] = "EN_LINEA";
    TramiteParametricaTipo["SEMI_LINEA"] = "SEMI_LINEA";
    TramiteParametricaTipo["PRESENCIAL"] = "PRESENCIAL";
})(TramiteParametricaTipo = exports.TramiteParametricaTipo || (exports.TramiteParametricaTipo = {}));
var TramiteParametricaTipoCatalogo;
(function (TramiteParametricaTipoCatalogo) {
    TramiteParametricaTipoCatalogo["TRAMITE"] = "TRAMITE";
    TramiteParametricaTipoCatalogo["PUBLICACION"] = "PUBLICACION";
})(TramiteParametricaTipoCatalogo = exports.TramiteParametricaTipoCatalogo || (exports.TramiteParametricaTipoCatalogo = {}));
var TramiteEstado;
(function (TramiteEstado) {
    TramiteEstado["SOLICITUD"] = "SOLICITUD";
    TramiteEstado["FINALIZADO"] = "FINALIZADO";
    TramiteEstado["ACEPTADO"] = "ACEPTADO";
    TramiteEstado["PAGADO"] = "PAGADO";
    TramiteEstado["ASIGNADO"] = "ASIGNADO";
    TramiteEstado["REVISION"] = "REVISION";
    TramiteEstado["CONCLUIDO"] = "CONCLUIDO";
    TramiteEstado["APROBADO"] = "APROBADO";
    TramiteEstado["INSCRITO"] = "INSCRITO";
    TramiteEstado["ANULADO"] = "ANULADO";
    TramiteEstado["REINGRESADO"] = "REINGRESADO";
    TramiteEstado["OBSERVADO"] = "OBSERVADO";
    TramiteEstado["ELIMINADO"] = "ELIMINADO";
    TramiteEstado["EN_CURSO"] = "EN_CURSO";
    TramiteEstado["CONFIRMADO"] = "CONFIRMADO";
    TramiteEstado["PUBLICADO"] = "PUBLICADO";
    TramiteEstado["APROBANDO"] = "APROBANDO";
    TramiteEstado["PRESENTADO"] = "PRESENTADO";
})(TramiteEstado = exports.TramiteEstado || (exports.TramiteEstado = {}));
exports.TramiteEstadoNoVitacora = ['APROBANDO'];
exports.TipoTramite = {
    TRAMITE: 1,
    PUBLICACION: 2,
};
var TramiteAcciones;
(function (TramiteAcciones) {
    TramiteAcciones["PAGO_SOLICITADO"] = "PAGO SOLICITADO";
    TramiteAcciones["FACTURA_SOLICITADA"] = "FACTURA SOLICITADA";
    TramiteAcciones["FACTURA_ANULACION"] = "EN ANULACION FACTURA";
    TramiteAcciones["FACTURA_EMITIDA"] = "FACTURA EMITIDA";
    TramiteAcciones["FACTURA_ANULADA"] = "FACTURA ANULADA";
})(TramiteAcciones = exports.TramiteAcciones || (exports.TramiteAcciones = {}));
var ObservacionEstado;
(function (ObservacionEstado) {
    ObservacionEstado["ACTIVE"] = "ACTIVO";
    ObservacionEstado["INACTIVE"] = "INACTIVO";
})(ObservacionEstado = exports.ObservacionEstado || (exports.ObservacionEstado = {}));
var TramiteProcesos;
(function (TramiteProcesos) {
    TramiteProcesos["APROBACION_CIUDADANIA"] = "Aprobaci\u00F3n con ciudadania digital";
    TramiteProcesos["GENERACION_CODIGO_YURI\u00D1A"] = "Generaci\u00F3n de c\u00F3digo Yuri\u00F1a";
    TramiteProcesos["PUBLICACION_GACETA"] = "Publicaci\u00F3n en la gaceta";
    TramiteProcesos["ACTUALIZACION_BD_REGISTRO_COMERCIO"] = "Actualizaci\u00F3n en la base de datos de registro de comercio";
    TramiteProcesos["ACTUALIZACION_KARDEX_DOCUMENTOS"] = "Actualizaci\u00F3n del Kardex de documentos";
    TramiteProcesos["GENERACION_CERTIFICADOS"] = "Generaci\u00F3n de certificados";
})(TramiteProcesos = exports.TramiteProcesos || (exports.TramiteProcesos = {}));
exports.CATALOGO_TRAMITE_CAMPO = 'campo';
exports.CAMPO_TIPO_ARCHIVO = 'file';
exports.DOCUMENTO_SOPORTE_FIELD_NAME = 'fieldname';
exports.DocumentoSoporteFields = {
    NRO_DOCUMENTO: '_nro_documento',
    EMISOR: '_emisor',
    FECHA_EMSION: '_fecha_emision',
    NRO_DOCUMENTO_ENTITY: 'nroDocumento',
    EMISOR_ENTITY: 'emisor',
    FECHA_EMSION_ENTITY: 'fechaEmision',
};
exports.ParametrosFacturacion = {
    MUNICIPIO: 'LA PAZ',
    DEPARTAMENTO: 'LA PAZ',
    TELEFONO_CONTACTO: '22184444',
    CODIGO_SUCURSAL: 0,
    PUNTO_VENTA: 1,
    DOCUMENTO_SECTOR: 1,
    FORMATO_FACTURA: 'pagina',
    CORREO_CONTACTO: 'seprec.test@agetic.gob.bo',
    ACTIVIDAD_ECONOMICA: '841121',
    CODIGO_SIN: '91111',
};
exports.GruposParametros = {
    TIPO_ESTADO_ACTUALIZACION: 'C02_estado_actualizacion',
    TIPO_SOCIETARIO: 'C03_tipo_societario',
    DEPARTAMENTO: 'C08_departamentos',
    PROVINCIA: 'C09_provincias',
    MUNICIPIO: 'C10_municipios',
    TIPO_DOCUMENTO_ID: 'C15_tipo_documento_id',
    TIPO_CIERRE_GESTION: 'C34_cierre_gestion',
    TIPO_SUBDIVISION_GEOGRAFICA: 'C102_subdivision_geografica',
    TIPO_VIA: 'C103_tipo_via',
    TIPO_AMBIENTE: 'C104_tipo_ambiente',
    TIPO_RAZON_SOCIAL: 'CA200_tipo_razon_social',
};
exports.OrigenLogin = {
    HABILITACION: 'habilitacion',
    NORMAL: 'normal',
    INTERNO: 'interno',
};
exports.FormatoRespuestaFUNDEMPRESA = {
    rutina: 'VRCONAG',
    sinCantidadPorDefecto: '0000',
    registroEncontrado: '0000',
    registroNoEncontrado: '0001',
};
exports.RUTA_LOGO = './src/templates/logo.png';
exports.RUTA_REPORTES = '/tmp/';
exports.MAX_SIZE_LOGO = 700000;
exports.CLASIFICADOR_ACTIVO = 'CAEB';
exports.CLASIFICADOR_INACTIVO = 'CIIU';
var TipoContacto;
(function (TipoContacto) {
    TipoContacto["TELEFONO"] = "TELEFONO";
    TipoContacto["CORREO"] = "CORREO";
})(TipoContacto = exports.TipoContacto || (exports.TipoContacto = {}));
exports.PublicacionEstado = {
    PUBLICADO: '1',
    PAGADO: '2',
};
exports.MATRICULA_ACTUALIZADO_VIGENTE = '0';
exports.CAMPO_REQUIRED = 'required';
//# sourceMappingURL=index.js.map