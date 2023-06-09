PGDMP                         {         
   blockchain    15.2    15.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16417 
   blockchain    DATABASE     �   CREATE DATABASE blockchain WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE blockchain;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    32816    orders    TABLE     <  CREATE TABLE public.orders (
    id_order integer NOT NULL,
    id_user character(200),
    email character(50),
    number character(50),
    address character(500),
    method character(50),
    total_products character(1000),
    total_price character(50),
    placed_on date,
    payment_status character(20)
);
    DROP TABLE public.orders;
       public         heap    postgres    false    4            �            1259    32815    orders_id_order_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_id_order_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.orders_id_order_seq;
       public          postgres    false    4    215            �           0    0    orders_id_order_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.orders_id_order_seq OWNED BY public.orders.id_order;
          public          postgres    false    214            e           2604    32819    orders id_order    DEFAULT     r   ALTER TABLE ONLY public.orders ALTER COLUMN id_order SET DEFAULT nextval('public.orders_id_order_seq'::regclass);
 >   ALTER TABLE public.orders ALTER COLUMN id_order DROP DEFAULT;
       public          postgres    false    214    215    215            �          0    32816    orders 
   TABLE DATA           �   COPY public.orders (id_order, id_user, email, number, address, method, total_products, total_price, placed_on, payment_status) FROM stdin;
    public          postgres    false    215   ?                   0    0    orders_id_order_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.orders_id_order_seq', 1, false);
          public          postgres    false    214            g           2606    32823    orders orders_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id_order);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    215            �      x������ � �     