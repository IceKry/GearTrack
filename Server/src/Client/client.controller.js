import { pool } from "../../configs/DBConnection.js";

export const regitsClient = async (req, res) => {
  const { nombre, apellido, telefono, email } = req.body;
  try {
    await pool.query("call sp_agregar_cliente($1, $2, $3, $4)", [
      nombre,
      apellido,
      telefono,
      email,
    ]);
    return res.send({ message: "Client registered successfully" });
  } catch (error) {
    console.error("Error registering client: ", error.message);
    return res
      .status(500)
      .send({ message: "Error registering client, Please try again" });
  }
};
