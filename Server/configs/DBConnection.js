import { Pool } from "pg";

//* Crear el pool usando la URL de conexión de neon
export const pool = new Pool({
  connectionString: process.env.DBURL,
  ssl: {
    rejectUnauthorized: false,
  },
});

//* Testear conexión al inicializar
export const testConnection = async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Conexión Exitosa con Neon PostgreSQL: ", res.rows[0].now);
  } catch (error) {
    console.error("Error al conectar con Neon PostgreSQL: ", error.message);
  }
};
