import { sign } from "jsonwebtoken";
import { setCookie } from 'cookies-next';
import pool from "@/cfg/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { cuenta, nombre, carrera } = await req.body;

    if (cuenta === 'admin'){
      if (nombre === 'H3lPd35k'){
        res.status(408).send('OK');
      } else {
        res.status(409).send('Los datos proporcionados no coinciden con el numero de cuenta registrado\n\nFavor de hablar con el encargado si existe algún inconveniente');
      }
    }

    if (nombre.split(" ").length < 3) {
      console.log("error");
      res.status(406).send('Favor de Ingresar tu Nombre Completo');
    }

    const rows = await pool.query(
      "select * from Alumnos where Cuenta = " + cuenta
    );

    if (rows.length > 0) {
      const rows = await pool.query(
        "select * from Alumnos where Cuenta = " +
          cuenta +
          " and Nombre = '" +
          nombre +
          "'" +
          " and id_Carrera = '" +
          carrera +
          "'"
      );

      if (rows.length > 0) {
        const token = sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            cuenta,
            nombre,
            carrera,
          },
          "secret"
        );

        /*cookies().set({
          name: "sessionToken",
          value: token,
          httpOnly: true,
          sameSite: "strict",
          maxAge: 1000 * 60 * 60,
          path: "/",
        });*/

        setCookie('sessionToken', token, { req, res, maxAge: 60 * 60});

        res.status(200).json({message: "OK"});
      } else {
        res.status(409).send('Los datos proporcionados no coinciden con el numero de cuenta registrado\n\nFavor de hablar con el encargado si existe algún inconveniente');
      }
    } else {
      const newUser = {
        id: cuenta,
        Cuenta: cuenta,
        Nombre: nombre,
        id_Carrera: carrera,
      };
      await pool.query("INSERT INTO Alumnos SET ?", [newUser]);

      const token = sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          cuenta,
          nombre,
          carrera,
        },
        "secret"
      );

      /*cookies().set({
        name: "sessionToken",
        value: token,
        httpOnly: true,
        secure: false,
        sameSite: "strinct",
        maxAge: 1000 * 60 * 60,
        path: "/",
      });*/
      setCookie('sessionToken', token, { req, res, maxAge: 60 * 60});
      res.status(200).send('OK');
    }
  }
}
