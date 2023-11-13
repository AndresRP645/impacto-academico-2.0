import { sign } from "jsonwebtoken";
import { setCookie, getCookie } from "cookies-next";
import pool from "@/cfg/database";

export default async function handler(req, res) {

  if(req.method === "GET"){
    const str = 
    'SELECT doc.respuesta_1, doc.respuesta_2, doc.respuesta_3, doc.respuesta_4, doc.respuesta_5, doc.respuesta_6, doc.respuesta_7, doc.respuesta_8, doc.respuesta_9, doc.respuesta_10, doc.respuesta_11, doc.respuesta_12, doc.respuesta_13, doc.respuesta_14, doc.respuesta_15, doc.respuesta_16, doc.respuesta_17, doc.respuesta_18, doc.respuesta_19, doc.respuesta_20, doc.respuesta_21, doc.respuesta_22, doc.respuesta_23, doc.respuesta_24, doc.respuesta_25, doc.respuesta_26, doc.respuesta_27, doc.respuesta_28, doc.respuesta_29, doc.respuesta_30, est.respuesta_1, est.respuesta_2, est.respuesta_3, est.respuesta_4, est.respuesta_5, est.respuesta_6, est.respuesta_7, est.respuesta_8, est.respuesta_9, est.respuesta_10 FROM RespDsmpDcnte doc inner join RespDsmpEstdtl est on doc.id_Alumno = est.id_Alumno and id_Materia = est.id_Materia';
            
    const docente = await pool.query(str);

    res.status(200).json(docente);
  }

}
