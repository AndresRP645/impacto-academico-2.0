import jwt from "jsonwebtoken";
import { sign } from "jsonwebtoken";
import { setCookie, getCookie } from "cookies-next";
import pool from "@/cfg/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = getCookie("sessionToken", { req, res });
    const { cuenta } = jwt.verify(token, "secret");
    const aux = JSON.parse(req.body);

    var formatResp = {};

    aux.forEach((key) => {
      console.log(key);
      const pregunta = key[0].split(" ")[0];
      const materia = key[0].split(" ")[1];

      if (formatResp[materia] === undefined) formatResp[materia] = {};
      formatResp[materia][pregunta] = key[1];
    });

    //console.log(formatResp);
    Object.keys(formatResp).forEach(async (reg) => {
      if (reg != 'undefined') {
        var RespDcnte =
          "INSERT INTO RespDsmpDcnte values (0, " + cuenta + ", " + reg + ", ";
        var RespEstdtl =
          "INSERT INTO RespDsmpEstdtl values (0, " + cuenta + ", " + reg + ", ";

        Object.keys(formatResp[reg]).forEach((resp) => {
          const strResp =
            (resp >= 1 && resp < 30) || (resp >= 31 && resp < 40)
              ? formatResp[reg][resp] + ", "
              : formatResp[reg][resp] + ");";

          RespDcnte = resp <= 30 ? RespDcnte + strResp : RespDcnte;
          RespEstdtl = resp > 30 ? RespEstdtl + strResp : RespEstdtl;
        });

        await pool.query(RespDcnte);
        await pool.query(RespEstdtl);
      }
    });

    const sql = "INSERT INTO `RespIdntInst`VALUES (0, " + cuenta + ", " + formatResp['undefined']['41'] + ", " + formatResp['undefined']['42'] + ");";
    
    await pool.query(sql);
    res.status(200).json({message: "OK"});
  }
}
