import { sign } from 'jsonwebtoken';
import { setCookie, getCookie } from 'cookies-next';
import pool from '@/cfg/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const str =
      'select ' +
      'doc.respuesta_1	r1,		doc.respuesta_2		r2,		doc.respuesta_3		r3,		doc.respuesta_4		r4,		doc.respuesta_5		r5, ' +
      'doc.respuesta_6	r6,		doc.respuesta_7		r7,		doc.respuesta_8		r8,		doc.respuesta_9		r9,		doc.respuesta_10	r10,' +
      'doc.respuesta_11	r11,	doc.respuesta_12	r12,	doc.respuesta_13	r13,	doc.respuesta_14	r14,	doc.respuesta_15	r15,  ' +
      'doc.respuesta_16	r16,	doc.respuesta_17	r17,	doc.respuesta_18	r18,	doc.respuesta_19	r19,	doc.respuesta_20	r20,  ' +
      'doc.respuesta_21	r21,	doc.respuesta_22	r22,	doc.respuesta_23	r23,	doc.respuesta_24	r24,	doc.respuesta_25	r25,  ' +
      'doc.respuesta_26	r26,	doc.respuesta_27	r27,	doc.respuesta_28	r28,	doc.respuesta_29	r29,	doc.respuesta_30	r30,  ' +
      'est.respuesta_1 	r31,	est.respuesta_2		r32,	est.respuesta_3		r33,	est.respuesta_4		r34,	est.respuesta_5		r35,  ' +
      'est.respuesta_6	r36,	est.respuesta_7		r37,	est.respuesta_8		r38,	est.respuesta_9		r39,	est.respuesta_10	r40 ' +
      'from RespDsmpDcnte doc inner join RespDsmpEstdtl est on doc.id_Alumno = est.id_Alumno and	doc.id_Materia = est.id_Materia';

    const respuestas = await pool.query(str);
    res.status(200).json(respuestas);
  }
}