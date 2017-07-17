--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.3
-- Dumped by pg_dump version 9.6.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
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


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Questions; Type: TABLE; Schema: public; Owner: markus
--

CREATE TABLE "Questions" (
    id integer NOT NULL,
    question text NOT NULL,
    "answerChoice1" text NOT NULL,
    "answerChoice2" text NOT NULL,
    "answerChoice3" text NOT NULL,
    "answerChoice4" text NOT NULL,
    "correctAnswer" text NOT NULL
);


ALTER TABLE "Questions" OWNER TO markus;

--
-- Name: Questions_id_seq; Type: SEQUENCE; Schema: public; Owner: markus
--

CREATE SEQUENCE "Questions_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Questions_id_seq" OWNER TO markus;

--
-- Name: Questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: markus
--

ALTER SEQUENCE "Questions_id_seq" OWNED BY "Questions".id;


--
-- Name: Questions id; Type: DEFAULT; Schema: public; Owner: markus
--

ALTER TABLE ONLY "Questions" ALTER COLUMN id SET DEFAULT nextval('"Questions_id_seq"'::regclass);


--
-- Data for Name: Questions; Type: TABLE DATA; Schema: public; Owner: markus
--

COPY "Questions" (id, question, "answerChoice1", "answerChoice2", "answerChoice3", "answerChoice4", "correctAnswer") FROM stdin;
1	How do you start a (kind of) impossible quiz? 	Confidently	Carefully	Painfully	You Don't	Painfully
2	What sound does an ambulance siren make?	Whoop-Whoop	Wee-Woo-Wee-Woo	Blip-Blop-Bloop-Bling-Blang	Qwop-Qwop-Qwop-Qwop-Qwop	Wee-Woo-Wee-Woo
3	What do you call a wingless fly?	A Flap	An Orange	A Walk	Jason	A Walk
4	How many holes are in a phone?	2	3	4	5	4
5	Sdrawkcab noitseuq siht rewsna	What?	I don't understand..	Next question please	K.O	K.O
6	What is the 7th letter in the alphabet?	G	H	I	E	H
7	Look! Count Dracula!	Uhhh... One?	Yeah... That is him...	That's not him....	This doesnt make sense...	Uhhh... One?
8	On the subject of Dracula, what is his favorite food?	Blood	Urine	Chicken Fried Chicken	Pumpkin Pie	Chicken Fried Chicken
9	Remember these colors: Blue, Red, Orange, Purple	Okey Dokey	Why?	I can't...	This quiz is stupid...	Okey Dokey
10	What color is this moose?	FFFF00	FFE507	E2000B	A5814B	FFFF00
11	Can you get this question wrong?	No	Nope	No Way	Of Course Not	Of Course Not
12	I hope you've been paying attention to the question numbers!!	Go to 13	Go to 14	Go to 15	Go to 16	Go to 15
13	What was the 3rd color listed on number 7?	Purple	Red	Blue	Orange	Orange
14	Did you enjoy the last question?	Nope	This is a waste of time...	I loved it!!	Elbow Orange	I loved it!!
15	What is the 7th letter of the alphabet?	G	I	H	Wait a minute...	G
\.


--
-- Name: Questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: markus
--

SELECT pg_catalog.setval('"Questions_id_seq"', 16, true);


--
-- Name: Questions Questions_pkey; Type: CONSTRAINT; Schema: public; Owner: markus
--

ALTER TABLE ONLY "Questions"
    ADD CONSTRAINT "Questions_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

