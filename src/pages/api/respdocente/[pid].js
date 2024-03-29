import pool from "@/cfg/database";

export default async function handler(req, res) {

  if(req.method === "GET"){
    const {pid} = req.query;
    const str = 'SELECT ' + pid + ' FROM RespDsmpDcnte';
      
    const consulta = await pool.query(str);
    var respuestas = [];
    consulta.forEach((reg, i) => {
      respuestas[i] = Object.values(reg)[0];
  });
    res.status(200).json(respuestas);
  }
}
