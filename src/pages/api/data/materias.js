import jwt from "jsonwebtoken";
import { getCookie } from "cookies-next";
import pool from "@/cfg/database";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const token = getCookie("sessionToken",{req, res});
    const {carrera} = jwt.verify(token, "secret");

    var materias = {};
    for (var sem = 1; sem < 11; sem++) {
        const str = "select id_Materia, Nombre " +
        "from Materias where id_Carrera = '" + carrera + "'"  + " AND Semestre = " + sem;
        
        const consulta = await pool.query(str);
            materias[sem] = {};

        consulta.forEach(reg => {
            materias[sem][reg.id_Materia] = reg.Nombre;
        });
    }

    res.status(200).json({materias});
  }
}
