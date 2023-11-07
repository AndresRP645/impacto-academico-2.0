import { sign } from "jsonwebtoken";
import { setCookie, getCookie } from "cookies-next";
import pool from "@/cfg/database";

export default async function handler(req, res) {

  if(req.method === "GET"){
    const { pid } = req.query
    const str = 'SELECT ' + pid + '  FROM RespDsmpEstdtl';
            
    const docente = await pool.query(str);

    res.status(200).json(docente);
  }

}
