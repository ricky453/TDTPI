--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.8
-- Dumped by pg_dump version 9.6.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: asuetos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.asuetos (
    id_asueto integer NOT NULL,
    fecha date,
    descripcion text
);


ALTER TABLE public.asuetos OWNER TO postgres;


--
-- Name: asuetos_id_asueto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.asuetos_id_asueto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.asuetos_id_asueto_seq OWNER TO postgres;

--
-- Name: asuetos_id_asueto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.asuetos_id_asueto_seq OWNED BY public.asuetos.id_asueto;


--
-- Name: calendario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.calendario (
    id_calendario integer NOT NULL,
    fecha_inicio date,
    decripcion text,
    responsable text,
    telefono text,
    fecha_fin date,
    cantidad integer,
    id_asuetos integer
);


ALTER TABLE public.calendario OWNER TO postgres;

--
-- Name: calendario_id_calendario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.calendario_id_calendario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.calendario_id_calendario_seq OWNER TO postgres;

--
-- Name: calendario_id_calendario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.calendario_id_calendario_seq OWNED BY public.calendario.id_calendario;

--
-- Name: cargo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cargo (
    id_cargo integer NOT NULL,
    cargo text,
    descripcion text,
    id_trabajadores integer
);


ALTER TABLE public.cargo OWNER TO postgres;

--
-- Name: cargo_id_cargo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cargo_id_cargo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cargo_id_cargo_seq OWNER TO postgres;

--
-- Name: cargo_id_cargo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cargo_id_cargo_seq OWNED BY public.cargo.id_cargo;


--
-- Name: detalle_equipo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.detalle_equipo (
    id_detalle_equipo integer NOT NULL,
    dispositivo text,
    descripcion text,
    id_marca integer,
    id_modelo integer,
    id_equipo integer
);


ALTER TABLE public.detalle_equipo OWNER TO postgres;

--
-- Name: detalle_equipo_id_detalle_equipo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.detalle_equipo_id_detalle_equipo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.detalle_equipo_id_detalle_equipo_seq OWNER TO postgres;

--
-- Name: detalle_equipo_id_detalle_equipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.detalle_equipo_id_detalle_equipo_seq OWNED BY public.detalle_equipo.id_detalle_equipo;


--
-- Name: detalle_mantenimiento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.detalle_mantenimiento (
    id_detalle_mantenimiento integer NOT NULL,
    "hardware/software" text,
    detalle_harware text,
    detalle_software text,
    id_orden_trabajo integer
);


ALTER TABLE public.detalle_mantenimiento OWNER TO postgres;

--
-- Name: detalle_mantenimiento_id_detalle_mantenimiento_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.detalle_mantenimiento_id_detalle_mantenimiento_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.detalle_mantenimiento_id_detalle_mantenimiento_seq OWNER TO postgres;

--
-- Name: detalle_mantenimiento_id_detalle_mantenimiento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.detalle_mantenimiento_id_detalle_mantenimiento_seq OWNED BY public.detalle_mantenimiento.id_detalle_mantenimiento;


--
-- Name: diagnostico; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.diagnostico (
    id_diagnostico integer NOT NULL,
    diagnostico text,
    id_procedimiento integer,
    id_diagnostico_parte integer
);


ALTER TABLE public.diagnostico OWNER TO postgres;

--
-- Name: diagnostico_id_diagnostico_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.diagnostico_id_diagnostico_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.diagnostico_id_diagnostico_seq OWNER TO postgres;

--
-- Name: diagnostico_id_diagnostico_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.diagnostico_id_diagnostico_seq OWNED BY public.diagnostico.id_diagnostico;

--
-- Name: diagnostico_parte; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.diagnostico_parte (
    id_diagnostico_parte integer NOT NULL,
    parte text,
    observaciones text
);


ALTER TABLE public.diagnostico_parte OWNER TO postgres;

--
-- Name: diagnostico_parte_id_diagnostico_parte_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.diagnostico_parte_id_diagnostico_parte_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.diagnostico_parte_id_diagnostico_parte_seq OWNER TO postgres;

--
-- Name: diagnostico_parte_id_diagnostico_parte_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.diagnostico_parte_id_diagnostico_parte_seq OWNED BY public.diagnostico_parte.id_diagnostico_parte;


--
-- Name: equipo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.equipo (
    id_equipo integer NOT NULL,
    serie text,
    unidad text
);


ALTER TABLE public.equipo OWNER TO postgres;

--
-- Name: equipo_id_equipo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.equipo_id_equipo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.equipo_id_equipo_seq OWNER TO postgres;

--
-- Name: equipo_id_equipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.equipo_id_equipo_seq OWNED BY public.equipo.id_equipo;

--
-- Name: estado_detalle_mantenimiento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estado_detalle_mantenimiento (
    id_estado_detalle_mantenimiento integer NOT NULL,
    estado text,
    observaciones text,
    id_detalle_mantenimiento integer,
    id_procedimiento integer
);


ALTER TABLE public.estado_detalle_mantenimiento OWNER TO postgres;

--
-- Name: estado_detalle_mantenimiento_id_estado_detalle_mantenimiento_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.estado_detalle_mantenimiento_id_estado_detalle_mantenimiento_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.estado_detalle_mantenimiento_id_estado_detalle_mantenimiento_seq OWNER TO postgres;

--
-- Name: estado_detalle_mantenimiento_id_estado_detalle_mantenimiento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.estado_detalle_mantenimiento_id_estado_detalle_mantenimiento_seq OWNED BY public.estado_detalle_mantenimiento.id_estado_detalle_mantenimiento;


--
-- Name: marca; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.marca (
    id_marca integer NOT NULL,
    marca text,
    descripcion text,
    activo boolean DEFAULT true NOT NULL
);


ALTER TABLE public.marca OWNER TO postgres;

--
-- Name: marca_id_marca_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.marca_id_marca_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.marca_id_marca_seq OWNER TO postgres;

--
-- Name: marca_id_marca_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.marca_id_marca_seq OWNED BY public.marca.id_marca;


--
-- Name: modelo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modelo (
    id_modelo integer NOT NULL,
    modelo text,
    descripcion text
);


ALTER TABLE public.modelo OWNER TO postgres;

--
-- Name: modelo_id_modelo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modelo_id_modelo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.modelo_id_modelo_seq OWNER TO postgres;

--
-- Name: modelo_id_modelo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.modelo_id_modelo_seq OWNED BY public.modelo.id_modelo;


--
-- Name: orden_trabajo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orden_trabajo (
    id_orden_trabajo integer NOT NULL,
    fecha_inicio date,
    prioridad text,
    id_solicitud integer,
    id_calendario integer
);


ALTER TABLE public.orden_trabajo OWNER TO postgres;

--
-- Name: orden_trabajo_id_orden_trabajo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orden_trabajo_id_orden_trabajo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orden_trabajo_id_orden_trabajo_seq OWNER TO postgres;

--
-- Name: orden_trabajo_id_orden_trabajo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orden_trabajo_id_orden_trabajo_seq OWNED BY public.orden_trabajo.id_orden_trabajo;


--
-- Name: orden_trabajo_por_trabajadores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orden_trabajo_por_trabajadores (
    detalle text,
    id_trabajadores integer NOT NULL,
    id_orden_trabajo integer NOT NULL
);


ALTER TABLE public.orden_trabajo_por_trabajadores OWNER TO postgres;

--
-- Name: pasos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pasos (
    id_paso integer NOT NULL,
    paso text
);


ALTER TABLE public.pasos OWNER TO postgres;

--
-- Name: pasos_id_paso_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pasos_id_paso_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pasos_id_paso_seq OWNER TO postgres;

--
-- Name: pasos_id_paso_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pasos_id_paso_seq OWNED BY public.pasos.id_paso;


--
-- Name: procedimiento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.procedimiento (
    id_procedimiento integer NOT NULL,
    procedimiento text,
    id_pasos integer
);


ALTER TABLE public.procedimiento OWNER TO postgres;

--
-- Name: procedimiento_id_procedimiento_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.procedimiento_id_procedimiento_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.procedimiento_id_procedimiento_seq OWNER TO postgres;

--
-- Name: procedimiento_id_procedimiento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.procedimiento_id_procedimiento_seq OWNED BY public.procedimiento.id_procedimiento;

--
-- Name: solicitud; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.solicitud (
    id_solicitud integer NOT NULL,
    fecha date,
    responsable text,
    email text,
    telefono text,
    descripcion text,
    id_equipo integer,
    id_tipo_mantenimiento integer
);


ALTER TABLE public.solicitud OWNER TO postgres;

--
-- Name: solicitud_id_solicitud_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.solicitud_id_solicitud_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.solicitud_id_solicitud_seq OWNER TO postgres;

--
-- Name: solicitud_id_solicitud_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.solicitud_id_solicitud_seq OWNED BY public.solicitud.id_solicitud;


--
-- Name: tipo_mantenimiento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_mantenimiento (
    id_tipo_mantenimiento integer NOT NULL,
    tipo_mantenimiento text,
    observaciones text
);


ALTER TABLE public.tipo_mantenimiento OWNER TO postgres;

--
-- Name: tipo_mantenimiento_id_tipo_mantenimiento_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tipo_mantenimiento_id_tipo_mantenimiento_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tipo_mantenimiento_id_tipo_mantenimiento_seq OWNER TO postgres;

--
-- Name: tipo_mantenimiento_id_tipo_mantenimiento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipo_mantenimiento_id_tipo_mantenimiento_seq OWNED BY public.tipo_mantenimiento.id_tipo_mantenimiento;

--
-- Name: trabajadores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.trabajadores (
    id_trabajador integer NOT NULL,
    nombres text,
    apellidos text,
    email text
);


ALTER TABLE public.trabajadores OWNER TO postgres;

--
-- Name: trabajadores_id_trabajador_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.trabajadores_id_trabajador_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.trabajadores_id_trabajador_seq OWNER TO postgres;

--
-- Name: trabajadores_id_trabajador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.trabajadores_id_trabajador_seq OWNED BY public.trabajadores.id_trabajador;


--
-- Name: marca id_marca; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marca ALTER COLUMN id_marca SET DEFAULT nextval('public.marca_id_marca_seq'::regclass);

--
-- Name: asuetos id_asueto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asuetos ALTER COLUMN id_asueto SET DEFAULT nextval('public.asuetos_id_asueto_seq'::regclass);

--
-- Name: calendario id_calendario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendario ALTER COLUMN id_calendario SET DEFAULT nextval('public.calendario_id_calendario_seq'::regclass);

--
-- Name: cargo id_cargo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo ALTER COLUMN id_cargo SET DEFAULT nextval('public.cargo_id_cargo_seq'::regclass);

--
-- Name: detalle_equipo id_detalle_equipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_equipo ALTER COLUMN id_detalle_equipo SET DEFAULT nextval('public.detalle_equipo_id_detalle_equipo_seq'::regclass);

--
-- Name: detalle_mantenimiento id_detalle_mantenimiento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_mantenimiento ALTER COLUMN id_detalle_mantenimiento SET DEFAULT nextval('public.detalle_mantenimiento_id_detalle_mantenimiento_seq'::regclass);

--
-- Name: diagnostico id_diagnostico; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diagnostico ALTER COLUMN id_diagnostico SET DEFAULT nextval('public.diagnostico_id_diagnostico_seq'::regclass);

--
-- Name: diagnostico_parte id_diagnostico_parte; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diagnostico_parte ALTER COLUMN id_diagnostico_parte SET DEFAULT nextval('public.diagnostico_parte_id_diagnostico_parte_seq'::regclass);

--
-- Name: equipo id_equipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipo ALTER COLUMN id_equipo SET DEFAULT nextval('public.equipo_id_equipo_seq'::regclass);

--
-- Name: estado_detalle_mantenimiento id_estado_detalle_mantenimiento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estado_detalle_mantenimiento ALTER COLUMN id_estado_detalle_mantenimiento SET DEFAULT nextval('public.estado_detalle_mantenimiento_id_estado_detalle_mantenimiento_seq'::regclass);

--
-- Name: modelo id_modelo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modelo ALTER COLUMN id_modelo SET DEFAULT nextval('public.modelo_id_modelo_seq'::regclass);

--
-- Name: orden_trabajo id_orden_trabajo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo ALTER COLUMN id_orden_trabajo SET DEFAULT nextval('public.orden_trabajo_id_orden_trabajo_seq'::regclass);

--
-- Name: pasos id_paso; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pasos ALTER COLUMN id_paso SET DEFAULT nextval('public.pasos_id_paso_seq'::regclass);

--
-- Name: procedimiento id_procedimiento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.procedimiento ALTER COLUMN id_procedimiento SET DEFAULT nextval('public.procedimiento_id_procedimiento_seq'::regclass);

--
-- Name: solicitud id_solicitud; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud ALTER COLUMN id_solicitud SET DEFAULT nextval('public.solicitud_id_solicitud_seq'::regclass);

--
-- Name: tipo_mantenimiento id_tipo_mantenimiento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_mantenimiento ALTER COLUMN id_tipo_mantenimiento SET DEFAULT nextval('public.tipo_mantenimiento_id_tipo_mantenimiento_seq'::regclass);

--
-- Name: trabajadores id_trabajador; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trabajadores ALTER COLUMN id_trabajador SET DEFAULT nextval('public.trabajadores_id_trabajador_seq'::regclass);

--
-- Data for Name: asuetos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.asuetos (id_asueto, fecha, descripcion) FROM stdin;
\.


--
-- Data for Name: calendario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.calendario (id_calendario, fecha_inicio, decripcion, responsable, telefono, fecha_fin, cantidad, id_asuetos) FROM stdin;
\.


--
-- Data for Name: cargo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cargo (id_cargo, cargo, descripcion, id_trabajadores) FROM stdin;
\.


--
-- Data for Name: detalle_equipo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.detalle_equipo (id_detalle_equipo, dispositivo, descripcion, id_marca, id_modelo, id_equipo) FROM stdin;
\.


--
-- Data for Name: detalle_mantenimiento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.detalle_mantenimiento (id_detalle_mantenimiento, "hardware/software", detalle_harware, detalle_software, id_orden_trabajo) FROM stdin;
\.


--
-- Data for Name: diagnostico; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.diagnostico (id_diagnostico, diagnostico, id_procedimiento, id_diagnostico_parte) FROM stdin;
\.


--
-- Data for Name: diagnostico_parte; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.diagnostico_parte (id_diagnostico_parte, parte, observaciones) FROM stdin;
\.


--
-- Data for Name: equipo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.equipo (id_equipo, serie, unidad) FROM stdin;
\.


--
-- Data for Name: estado_detalle_mantenimiento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estado_detalle_mantenimiento (id_estado_detalle_mantenimiento, estado, observaciones, id_detalle_mantenimiento, id_procedimiento) FROM stdin;
\.


--
-- Data for Name: marca; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.marca (id_marca, marca, descripcion, activo) FROM stdin;
1	HP	DESCRIPCION	true
2	LENOVO	DESCRIPCION	true
3	TOSHIBA	DESCRIPCION	true
4	SAMSUNG	DESCRIPCION	true
5	ACER	DESCRIPCION	true
6	DELL	DESCRIPCION	true
7	APPLE	DESCRIPCION	true
8	ASUS	DESCRIPCION	true
9	ALIENWARE	DESCRIPCION	true
10	GATEWAY	DESCRIPCION	true
11	LANIX	DESCRIPCION	true
12	VAIO	DESCRIPCION	true
13	SONY	DESCRIPCION	true
14	LG	DESCRIPCION	true
15	COMPAQ	DESCRIPCION	true
16	PANASONIC	DESCRIPCION	true
17	IBM	DESCRIPCION	true
18	SYSTEMAX	DESCRIPCION	true
19	FUJITSU	DESCRIPCION	true
20	SIMPLETECH	DESCRIPCION	true
\.

--
-- Name: marca_id_marca_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.marca_id_marca_seq', 20, true);



--
-- Data for Name: modelo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modelo (id_modelo, modelo, descripcion) FROM stdin;
\.


--
-- Data for Name: orden_trabajo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orden_trabajo (id_orden_trabajo, fecha_inicio, prioridad, id_solicitud, id_calendario) FROM stdin;
\.


--
-- Data for Name: orden_trabajo_por_trabajadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orden_trabajo_por_trabajadores (detalle, id_trabajadores, id_orden_trabajo) FROM stdin;
\.


--
-- Data for Name: pasos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pasos (id_paso, paso) FROM stdin;
\.


--
-- Data for Name: procedimiento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.procedimiento (id_procedimiento, procedimiento, id_pasos) FROM stdin;
\.


--
-- Data for Name: solicitud; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.solicitud (id_solicitud, fecha, responsable, email, telefono, descripcion, id_equipo, id_tipo_mantenimiento) FROM stdin;
\.


--
-- Data for Name: tipo_mantenimiento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipo_mantenimiento (id_tipo_mantenimiento, tipo_mantenimiento, observaciones) FROM stdin;
\.


--
-- Data for Name: trabajadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.trabajadores (id_trabajador, nombres, apellidos, email) FROM stdin;
\.


--
-- Name: asuetos asuetos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asuetos
    ADD CONSTRAINT asuetos_pkey PRIMARY KEY (id_asueto);


--
-- Name: calendario calendario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendario
    ADD CONSTRAINT calendario_pkey PRIMARY KEY (id_calendario);


--
-- Name: cargo cargo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_pkey PRIMARY KEY (id_cargo);


--
-- Name: detalle_equipo detalle_equipo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_equipo
    ADD CONSTRAINT detalle_equipo_pkey PRIMARY KEY (id_detalle_equipo);


--
-- Name: detalle_mantenimiento detalle_mantenimiento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_mantenimiento
    ADD CONSTRAINT detalle_mantenimiento_pkey PRIMARY KEY (id_detalle_mantenimiento);


--
-- Name: diagnostico_parte diagnostico_parte_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diagnostico_parte
    ADD CONSTRAINT diagnostico_parte_pkey PRIMARY KEY (id_diagnostico_parte);


--
-- Name: diagnostico diagnostico_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diagnostico
    ADD CONSTRAINT diagnostico_pkey PRIMARY KEY (id_diagnostico);


--
-- Name: equipo equipo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipo
    ADD CONSTRAINT equipo_pkey PRIMARY KEY (id_equipo);


--
-- Name: estado_detalle_mantenimiento estado_detalle_mantenimiento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estado_detalle_mantenimiento
    ADD CONSTRAINT estado_detalle_mantenimiento_pkey PRIMARY KEY (id_estado_detalle_mantenimiento);


--
-- Name: marca marca_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marca
    ADD CONSTRAINT marca_pkey PRIMARY KEY (id_marca);


--
-- Name: modelo modelo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modelo
    ADD CONSTRAINT modelo_pkey PRIMARY KEY (id_modelo);


--
-- Name: orden_trabajo orden_trabajo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo
    ADD CONSTRAINT orden_trabajo_pkey PRIMARY KEY (id_orden_trabajo);


--
-- Name: orden_trabajo_por_trabajadores orden_trabajo_por_trabajadores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo_por_trabajadores
    ADD CONSTRAINT orden_trabajo_por_trabajadores_pkey PRIMARY KEY (id_trabajadores, id_orden_trabajo);


--
-- Name: pasos pasos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pasos
    ADD CONSTRAINT pasos_pkey PRIMARY KEY (id_paso);


--
-- Name: procedimiento procedimiento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.procedimiento
    ADD CONSTRAINT procedimiento_pkey PRIMARY KEY (id_procedimiento);


--
-- Name: solicitud solicitud_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT solicitud_pkey PRIMARY KEY (id_solicitud);


--
-- Name: tipo_mantenimiento tipo_mantenimiento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_mantenimiento
    ADD CONSTRAINT tipo_mantenimiento_pkey PRIMARY KEY (id_tipo_mantenimiento);


--
-- Name: trabajadores trabajadores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trabajadores
    ADD CONSTRAINT trabajadores_pkey PRIMARY KEY (id_trabajador);


--
-- Name: calendario calendario_id_asuetos_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendario
    ADD CONSTRAINT calendario_id_asuetos_fkey FOREIGN KEY (id_asuetos) REFERENCES public.asuetos(id_asueto);


--
-- Name: cargo cargo_id_trabajadores_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_id_trabajadores_fkey FOREIGN KEY (id_trabajadores) REFERENCES public.trabajadores(id_trabajador);


--
-- Name: detalle_equipo detalle_equipo_id_equipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_equipo
    ADD CONSTRAINT detalle_equipo_id_equipo_fkey FOREIGN KEY (id_equipo) REFERENCES public.equipo(id_equipo);


--
-- Name: detalle_equipo detalle_equipo_id_marca_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_equipo
    ADD CONSTRAINT detalle_equipo_id_marca_fkey FOREIGN KEY (id_marca) REFERENCES public.marca(id_marca);


--
-- Name: detalle_equipo detalle_equipo_id_modelo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_equipo
    ADD CONSTRAINT detalle_equipo_id_modelo_fkey FOREIGN KEY (id_modelo) REFERENCES public.modelo(id_modelo);


--
-- Name: detalle_mantenimiento detalle_mantenimiento_id_orden_trabajo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_mantenimiento
    ADD CONSTRAINT detalle_mantenimiento_id_orden_trabajo_fkey FOREIGN KEY (id_orden_trabajo) REFERENCES public.orden_trabajo(id_orden_trabajo);


--
-- Name: diagnostico diagnostico_id_diagnostico_parte_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diagnostico
    ADD CONSTRAINT diagnostico_id_diagnostico_parte_fkey FOREIGN KEY (id_diagnostico_parte) REFERENCES public.diagnostico_parte(id_diagnostico_parte);


--
-- Name: diagnostico diagnostico_id_procedimiento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diagnostico
    ADD CONSTRAINT diagnostico_id_procedimiento_fkey FOREIGN KEY (id_procedimiento) REFERENCES public.procedimiento(id_procedimiento);


--
-- Name: estado_detalle_mantenimiento estado_detalle_mantenimiento_id_detalle_mantenimiento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estado_detalle_mantenimiento
    ADD CONSTRAINT estado_detalle_mantenimiento_id_detalle_mantenimiento_fkey FOREIGN KEY (id_detalle_mantenimiento) REFERENCES public.detalle_mantenimiento(id_detalle_mantenimiento);


--
-- Name: estado_detalle_mantenimiento estado_detalle_mantenimiento_id_procedimiento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estado_detalle_mantenimiento
    ADD CONSTRAINT estado_detalle_mantenimiento_id_procedimiento_fkey FOREIGN KEY (id_procedimiento) REFERENCES public.procedimiento(id_procedimiento);


--
-- Name: orden_trabajo orden_trabajo_id_calendario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo
    ADD CONSTRAINT orden_trabajo_id_calendario_fkey FOREIGN KEY (id_calendario) REFERENCES public.calendario(id_calendario);


--
-- Name: orden_trabajo orden_trabajo_id_solicitud_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo
    ADD CONSTRAINT orden_trabajo_id_solicitud_fkey FOREIGN KEY (id_solicitud) REFERENCES public.solicitud(id_solicitud);


--
-- Name: orden_trabajo_por_trabajadores orden_trabajo_por_trabajadores_id_orden_trabajo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo_por_trabajadores
    ADD CONSTRAINT orden_trabajo_por_trabajadores_id_orden_trabajo_fkey FOREIGN KEY (id_orden_trabajo) REFERENCES public.orden_trabajo(id_orden_trabajo);


--
-- Name: orden_trabajo_por_trabajadores orden_trabajo_por_trabajadores_id_trabajadores_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo_por_trabajadores
    ADD CONSTRAINT orden_trabajo_por_trabajadores_id_trabajadores_fkey FOREIGN KEY (id_trabajadores) REFERENCES public.trabajadores(id_trabajador);


--
-- Name: procedimiento procedimiento_id_pasos_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.procedimiento
    ADD CONSTRAINT procedimiento_id_pasos_fkey FOREIGN KEY (id_pasos) REFERENCES public.pasos(id_paso);


--
-- Name: solicitud solicitud_id_equipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT solicitud_id_equipo_fkey FOREIGN KEY (id_equipo) REFERENCES public.equipo(id_equipo);


--
-- Name: solicitud solicitud_id_tipo_mantenimiento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT solicitud_id_tipo_mantenimiento_fkey FOREIGN KEY (id_tipo_mantenimiento) REFERENCES public.tipo_mantenimiento(id_tipo_mantenimiento);


--
-- PostgreSQL database dump complete
--

