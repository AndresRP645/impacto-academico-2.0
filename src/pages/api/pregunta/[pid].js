import pool from "@/cfg/database";

export default async function handler(req, res) {

  if(req.method === "GET"){
    const {pid} = req.query;
    const str = 'SELECT Pregunta FROM Preguntas where id_Pregunta = ' + pid;
    const consulta = await pool.query(str);
    res.status(200).json(consulta[0].Pregunta);
  }
}
