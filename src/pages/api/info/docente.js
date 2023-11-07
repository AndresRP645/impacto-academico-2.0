import { sign } from "jsonwebtoken";
import { setCookie, getCookie } from "cookies-next";
import pool from "@/cfg/database";

export default async function handler(req, res) {

  if(req.method === "GET"){
    const str = 'SELECT respuesta_1, respuesta_2, respuesta_3, respuesta_4, respuesta_5, respuesta_6, respuesta_7, respuesta_8, respuesta_9, respuesta_10, respuesta_11, respuesta_12, respuesta_13, respuesta_14, respuesta_15, respuesta_16, respuesta_17, respuesta_18, respuesta_19, respuesta_20, respuesta_21, respuesta_22, respuesta_23, respuesta_24, respuesta_25, respuesta_26, respuesta_27, respuesta_28, respuesta_29, respuesta_30  FROM RespDsmpDcnte';
            
    const docente = await pool.query(str);

    res.status(200).json(docente);
  }

}
