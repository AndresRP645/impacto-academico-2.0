import { sign } from "jsonwebtoken";
import { setCookie, getCookie } from "cookies-next";
import pool from "@/cfg/database";

export default async function handler(req, res) {

  if (req.method === "POST") {
    setCookie('materiasToken', req.body, { req, res, maxAge: 60 * 60});

    res.status(200).send("OK");
  }

  if(req.method === "GET"){
    
    var Preguntas = {};
        var str = "select id_Pregunta, Pregunta " +
            "from Preguntas where id_Type = 1";
            
        var consulta = await pool.query(str);

        Preguntas['DesempeñoDocente'] = {};
    
        consulta.forEach(reg => {
            Preguntas['DesempeñoDocente'][reg.id_Pregunta] = [reg.Pregunta];
        });
        
        str = "select id_Pregunta, Pregunta " +
            "from Preguntas where id_Type = 2";
            
        consulta = await pool.query(str);

        Preguntas['DesempeñoEstudiantil'] = {};
        
        consulta.forEach(reg => {
            Preguntas['DesempeñoEstudiantil'][reg.id_Pregunta] = [reg.Pregunta];
        });

        str = "select id_Pregunta, Pregunta " +
            "from Preguntas where id_Type = 3";

        consulta = await pool.query(str);

        Preguntas['IdentidadInstitucional'] = {};

        consulta.forEach(reg => {
          Preguntas['IdentidadInstitucional'][reg.id_Pregunta] = [reg.Pregunta];
        });


    res.status(200).json(Preguntas);
  }

}
