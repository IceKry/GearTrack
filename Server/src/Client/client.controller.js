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

export const updateClient = async (req, res) => {
  const { nombre, apellido, telefono, email } = req.body;
  const { clienteID } = req.params;
  try {
    await pool.query("call sp_actualizar_cliente($1, $2, $3, $4, $5)", [
      clienteID,
      nombre,
      apellido,
      telefono,
      email,
    ]);
    return res.send({ message: "Client updated successfully" });
  } catch (error) {
    console.error("Error updating client: ", error);
    return res
      .status(500)
      .send({ message: "Error updating client, Please try again" });
  }
};

export const deleteClient = async (req, res) => {
  const { clienteID } = req.params;
  try {
    await pool.query("call sp_eliminar_cliente($1)", [clienteID]);
    return res.send({ message: "Client deleted successfully" });
  } catch (error) {
    console.error("Error deleting client: ", error);
    return res
      .status(500)
      .send({ message: "Error deleting client, Please try again" });
  }
};

export const getActiveClients = async (req, res) => {
  try {
    const {rows} = await pool.query('select * from vw_clientes_activos')
    return res.json(rows)
  } catch (error) {
    console.error('Failed to get Active Clients');
    return res.status(500).send({message:'Error getting Active clients, Please try again'})
  }
};
