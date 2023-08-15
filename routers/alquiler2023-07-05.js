import {Router} from 'express';
import dotenv from 'dotenv';
import { con } from "../db/atlas.js";


dotenv.config();
const appAlquilerFecha = Router();

appAlquilerFecha.get('/',async(req, res)=>{
    try {
        const db = await con(); // Obtén la conexión a la base de datos
        const Alquiler = db.collection("Alquiler"); // Define la colección
        let id = req.params.id;
        const result = await Alquiler.find({ Fecha_Inicio: "2023-07-05" }).project({ _id: 0}).toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
})

export default appAlquilerFecha