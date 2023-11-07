import { sign } from "jsonwebtoken";
import { setCookie, getCookie } from "cookies-next";
import pool from "@/cfg/database";

export default async function handler(req, res) {

  if(req.method === "GET"){
    const str = 'SELECT respuesta_1, respuesta_2, respuesta_3, respuesta_4, respuesta_5, respuesta_6, respuesta_7, respuesta_8, respuesta_9, respuesta_10  FROM RespDsmpEstdtl';
            
    const estudiantil = await pool.query(str);

    res.status(200).json(estudiantil);
  }

}
