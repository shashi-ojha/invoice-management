PGDMP      !                |            invoice_management    16.0    16.0 ?    :           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ;           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            <           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            =           1262    16397    invoice_management    DATABASE     �   CREATE DATABASE invoice_management WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
 "   DROP DATABASE invoice_management;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            >           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1255    16500    update_updated_date()    FUNCTION     �   CREATE FUNCTION public.update_updated_date() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
   NEW.updated_date = CURRENT_TIMESTAMP;
   RETURN NEW;
END;
$$;
 ,   DROP FUNCTION public.update_updated_date();
       public          postgres    false    4            �            1259    16424    area    TABLE     V  CREATE TABLE public.area (
    id integer NOT NULL,
    area_name character varying(255) NOT NULL,
    city_id integer NOT NULL,
    state_id integer NOT NULL,
    created_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    is_active boolean DEFAULT true
);
    DROP TABLE public.area;
       public         heap    postgres    false    4            �            1259    16423    area_id_seq    SEQUENCE     �   CREATE SEQUENCE public.area_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.area_id_seq;
       public          postgres    false    220    4            ?           0    0    area_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.area_id_seq OWNED BY public.area.id;
          public          postgres    false    219            �            1259    16409    city    TABLE     3  CREATE TABLE public.city (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    state_id integer NOT NULL,
    created_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    is_active boolean DEFAULT true
);
    DROP TABLE public.city;
       public         heap    postgres    false    4            �            1259    16408    city_id_seq    SEQUENCE     �   CREATE SEQUENCE public.city_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.city_id_seq;
       public          postgres    false    218    4            @           0    0    city_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.city_id_seq OWNED BY public.city.id;
          public          postgres    false    217            �            1259    16464    clients    TABLE     �  CREATE TABLE public.clients (
    id integer NOT NULL,
    building_name character varying(255) NOT NULL,
    area_id integer NOT NULL,
    address text NOT NULL,
    city_id integer NOT NULL,
    state_id integer NOT NULL,
    chairperson_name character varying(255),
    lift_type_id integer NOT NULL,
    contract_period_id integer NOT NULL,
    from_date date NOT NULL,
    to_date date NOT NULL,
    maintenance_charge numeric(10,2) NOT NULL,
    status character varying(50) NOT NULL,
    created_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    is_active boolean DEFAULT true,
    phonenumber character varying(15),
    email character varying(255)
);
    DROP TABLE public.clients;
       public         heap    postgres    false    4            �            1259    16463    clients_id_seq    SEQUENCE     �   CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.clients_id_seq;
       public          postgres    false    226    4            A           0    0    clients_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;
          public          postgres    false    225            �            1259    16454    lifttype    TABLE     H  CREATE TABLE public.lifttype (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    created_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    is_active boolean DEFAULT true,
    price numeric(10,2) DEFAULT 0.00 NOT NULL
);
    DROP TABLE public.lifttype;
       public         heap    postgres    false    4            �            1259    16453    lifttype_id_seq    SEQUENCE     �   CREATE SEQUENCE public.lifttype_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.lifttype_id_seq;
       public          postgres    false    4    224            B           0    0    lifttype_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.lifttype_id_seq OWNED BY public.lifttype.id;
          public          postgres    false    223            �            1259    16444    periods    TABLE     5  CREATE TABLE public.periods (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    months integer NOT NULL,
    created_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    is_active boolean DEFAULT true
);
    DROP TABLE public.periods;
       public         heap    postgres    false    4            �            1259    16443    periods_id_seq    SEQUENCE     �   CREATE SEQUENCE public.periods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.periods_id_seq;
       public          postgres    false    4    222            C           0    0    periods_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.periods_id_seq OWNED BY public.periods.id;
          public          postgres    false    221            �            1259    16399    state    TABLE       CREATE TABLE public.state (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    created_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    is_active boolean DEFAULT true
);
    DROP TABLE public.state;
       public         heap    postgres    false    4            �            1259    16398    state_id_seq    SEQUENCE     �   CREATE SEQUENCE public.state_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.state_id_seq;
       public          postgres    false    4    216            D           0    0    state_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.state_id_seq OWNED BY public.state.id;
          public          postgres    false    215            r           2604    16427    area id    DEFAULT     b   ALTER TABLE ONLY public.area ALTER COLUMN id SET DEFAULT nextval('public.area_id_seq'::regclass);
 6   ALTER TABLE public.area ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            n           2604    16412    city id    DEFAULT     b   ALTER TABLE ONLY public.city ALTER COLUMN id SET DEFAULT nextval('public.city_id_seq'::regclass);
 6   ALTER TABLE public.city ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218                       2604    16467 
   clients id    DEFAULT     h   ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);
 9   ALTER TABLE public.clients ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            z           2604    16457    lifttype id    DEFAULT     j   ALTER TABLE ONLY public.lifttype ALTER COLUMN id SET DEFAULT nextval('public.lifttype_id_seq'::regclass);
 :   ALTER TABLE public.lifttype ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            v           2604    16447 
   periods id    DEFAULT     h   ALTER TABLE ONLY public.periods ALTER COLUMN id SET DEFAULT nextval('public.periods_id_seq'::regclass);
 9   ALTER TABLE public.periods ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222            j           2604    16402    state id    DEFAULT     d   ALTER TABLE ONLY public.state ALTER COLUMN id SET DEFAULT nextval('public.state_id_seq'::regclass);
 7   ALTER TABLE public.state ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            1          0    16424    area 
   TABLE DATA           g   COPY public.area (id, area_name, city_id, state_id, created_date, updated_date, is_active) FROM stdin;
    public          postgres    false    220   �L       /          0    16409    city 
   TABLE DATA           Y   COPY public.city (id, name, state_id, created_date, updated_date, is_active) FROM stdin;
    public          postgres    false    218   �M       7          0    16464    clients 
   TABLE DATA           �   COPY public.clients (id, building_name, area_id, address, city_id, state_id, chairperson_name, lift_type_id, contract_period_id, from_date, to_date, maintenance_charge, status, created_date, updated_date, is_active, phonenumber, email) FROM stdin;
    public          postgres    false    226   DN       5          0    16454    lifttype 
   TABLE DATA           [   COPY public.lifttype (id, title, created_date, updated_date, is_active, price) FROM stdin;
    public          postgres    false    224   �O       3          0    16444    periods 
   TABLE DATA           [   COPY public.periods (id, title, months, created_date, updated_date, is_active) FROM stdin;
    public          postgres    false    222   .P       -          0    16399    state 
   TABLE DATA           P   COPY public.state (id, name, created_date, updated_date, is_active) FROM stdin;
    public          postgres    false    216   �P       E           0    0    area_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.area_id_seq', 10, true);
          public          postgres    false    219            F           0    0    city_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.city_id_seq', 5, true);
          public          postgres    false    217            G           0    0    clients_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.clients_id_seq', 4, true);
          public          postgres    false    225            H           0    0    lifttype_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.lifttype_id_seq', 4, true);
          public          postgres    false    223            I           0    0    periods_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.periods_id_seq', 4, true);
          public          postgres    false    221            J           0    0    state_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.state_id_seq', 4, true);
          public          postgres    false    215            �           2606    16432    area area_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.area
    ADD CONSTRAINT area_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.area DROP CONSTRAINT area_pkey;
       public            postgres    false    220            �           2606    16417    city city_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.city
    ADD CONSTRAINT city_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.city DROP CONSTRAINT city_pkey;
       public            postgres    false    218            �           2606    16474    clients clients_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_pkey;
       public            postgres    false    226            �           2606    16462    lifttype lifttype_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.lifttype
    ADD CONSTRAINT lifttype_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.lifttype DROP CONSTRAINT lifttype_pkey;
       public            postgres    false    224            �           2606    16452    periods periods_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.periods
    ADD CONSTRAINT periods_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.periods DROP CONSTRAINT periods_pkey;
       public            postgres    false    222            �           2606    16407    state state_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.state
    ADD CONSTRAINT state_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.state DROP CONSTRAINT state_pkey;
       public            postgres    false    216            �           2620    16503    area set_updated_date    TRIGGER     y   CREATE TRIGGER set_updated_date BEFORE UPDATE ON public.area FOR EACH ROW EXECUTE FUNCTION public.update_updated_date();
 .   DROP TRIGGER set_updated_date ON public.area;
       public          postgres    false    227    220            �           2620    16502    city set_updated_date    TRIGGER     y   CREATE TRIGGER set_updated_date BEFORE UPDATE ON public.city FOR EACH ROW EXECUTE FUNCTION public.update_updated_date();
 .   DROP TRIGGER set_updated_date ON public.city;
       public          postgres    false    227    218            �           2620    16506    clients set_updated_date    TRIGGER     |   CREATE TRIGGER set_updated_date BEFORE UPDATE ON public.clients FOR EACH ROW EXECUTE FUNCTION public.update_updated_date();
 1   DROP TRIGGER set_updated_date ON public.clients;
       public          postgres    false    226    227            �           2620    16505    lifttype set_updated_date    TRIGGER     }   CREATE TRIGGER set_updated_date BEFORE UPDATE ON public.lifttype FOR EACH ROW EXECUTE FUNCTION public.update_updated_date();
 2   DROP TRIGGER set_updated_date ON public.lifttype;
       public          postgres    false    224    227            �           2620    16504    periods set_updated_date    TRIGGER     |   CREATE TRIGGER set_updated_date BEFORE UPDATE ON public.periods FOR EACH ROW EXECUTE FUNCTION public.update_updated_date();
 1   DROP TRIGGER set_updated_date ON public.periods;
       public          postgres    false    227    222            �           2620    16501    state set_updated_date    TRIGGER     z   CREATE TRIGGER set_updated_date BEFORE UPDATE ON public.state FOR EACH ROW EXECUTE FUNCTION public.update_updated_date();
 /   DROP TRIGGER set_updated_date ON public.state;
       public          postgres    false    227    216            �           2606    16433    area area_city_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.area
    ADD CONSTRAINT area_city_id_fkey FOREIGN KEY (city_id) REFERENCES public.city(id) ON DELETE CASCADE;
 @   ALTER TABLE ONLY public.area DROP CONSTRAINT area_city_id_fkey;
       public          postgres    false    4742    220    218            �           2606    16438    area area_state_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.area
    ADD CONSTRAINT area_state_id_fkey FOREIGN KEY (state_id) REFERENCES public.state(id) ON DELETE CASCADE;
 A   ALTER TABLE ONLY public.area DROP CONSTRAINT area_state_id_fkey;
       public          postgres    false    216    220    4740            �           2606    16418    city city_state_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.city
    ADD CONSTRAINT city_state_id_fkey FOREIGN KEY (state_id) REFERENCES public.state(id) ON DELETE CASCADE;
 A   ALTER TABLE ONLY public.city DROP CONSTRAINT city_state_id_fkey;
       public          postgres    false    216    4740    218            �           2606    16475    clients clients_area_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_area_id_fkey FOREIGN KEY (area_id) REFERENCES public.area(id) ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_area_id_fkey;
       public          postgres    false    220    4744    226            �           2606    16480    clients clients_city_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_city_id_fkey FOREIGN KEY (city_id) REFERENCES public.city(id) ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_city_id_fkey;
       public          postgres    false    226    218    4742            �           2606    16495 '   clients clients_contract_period_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_contract_period_id_fkey FOREIGN KEY (contract_period_id) REFERENCES public.periods(id) ON DELETE SET NULL;
 Q   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_contract_period_id_fkey;
       public          postgres    false    222    226    4746            �           2606    16490 !   clients clients_lift_type_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_lift_type_id_fkey FOREIGN KEY (lift_type_id) REFERENCES public.lifttype(id) ON DELETE SET NULL;
 K   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_lift_type_id_fkey;
       public          postgres    false    226    224    4748            �           2606    16485    clients clients_state_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_state_id_fkey FOREIGN KEY (state_id) REFERENCES public.state(id) ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_state_id_fkey;
       public          postgres    false    226    4740    216            1   �   x����j�0Eף��Dh��ڕd��]7*q[��$�_u�M0�Pfy���;��m�C�d��s�ay��VC�[������z�@��x8����t��F:�H!�ZA&��H#�Nt�����%�Oy�����)4Q1Nc�����8�*F�iL�u=w�����]D�����P1<��:n]T7k�=�Sn�bNiZ&�k�ԯCz�Y�:x��:o�+�[����P1/�����      /   �   x���K
�0@���*����O>��X\��W���ܽ����.¨����y�
�Hz��Q�!󐉭$��K�!�{�pX���E�@?_v����m����bC`��Pfo)bp	N��x�E�e�2G%�о?�j�����H�      7   :  x���MN�0���)| j�c;+ڲB"T
�n��CW�iZNϴi���k${��ȟ�R�j�Z���AH:i�=*��W-��cԌ��)`&Q�3��|NM*�\f9H�R������R�\0K��/�ؽi���=�l���v�t�� Q:��Z�� |ٸPaW�z"��A�ȃ�ރ��L�l��Zx*�-�&��r8[V��}|�vrd�`�g��ta�/0E��[��D'pm%�X�D2��H��ٺ`j��͇��4�`ۗ���i��a6�����O��?�9�)Ÿ�2H��oi�YE�v�W      5   �   x��λ
1��z��e��&;���7���J\���7�j���|��M͇�NgX�̥i4Q��k�ɴ�c��8,�BDH���2��<_���'�=�~I���<:��j]`�1�|�{;�FԘQE���������;bJ��4>�      3   Q   x�3�,M,*I-ʩ�4�4202�54�50R04�2��22�3�0473�'U�e�鑘����2ǌls�9�F�mF� �r-      -   j   x�3��M�H,J,�()J�4202�54�50R04�2��22�3�0473�'U�e�ZR�X�P���Z�A�9&��Y@ה �+Z�X��YZ����*����� .�.     