/* eslint-disable camelcase */
import path from 'node:path'
import fs from 'node:fs/promises'
import { nuevoNombreArchivo } from '../config/multer.js'
import { pool } from '../config/db.js'

// Create (Crear)
export const createUser = async (req, res) => {
  const { name, email, role, password } = req.body
  try {
    if (!nuevoNombreArchivo) {
      return res.status(500).json({ message: 'No se pudo subir la imagen' })
    }
    const [result] = await pool.query('INSERT INTO all_users (name, email, role, profile_picture, password) VALUES (?, ?, ?, ?, ?)', [name, email, role, nuevoNombreArchivo, password])
    res.status(201).json({ message: 'Usuario nuevo creado con éxito', id: result.insertId, name, email, role, profile_picture: nuevoNombreArchivo, password })
    console.log('Ruta de crear a un empleado POST http://localhost:3000/api/users')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Read (Leer) FUNCIONAA
export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM all_users')
    res.status(200).json({ message: 'Usuarios completos de la tabla all_users', rows })
    console.log('Ruta de ver a todos los empleados GET http://localhost:3000/api/users')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
export const getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const [rows] = await pool.query('SELECT * FROM all_users WHERE ID = ?', [id])
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json(rows[0])
    console.log('Ruta de ver a un empleado GET http://localhost:3000/api/users/:id')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
export const getImagen = async (req, res) => {
  try {
    const { nombre } = req.params

    const ruta = path.resolve('./uploads')
    const rutaImagen = path.join(ruta, nombre)

    await fs.access(rutaImagen, fs.constants.F_OK)
    res.sendFile(rutaImagen)
  } catch (error) {
    console.log(error)
    if (error?.errno === -4058) {
      return res.status(404).json({ message: 'No se encontró la imagen' })
    }

    return res.status(500).json({ message: 'Error interno' })
  }
}

// Update (Actualizar)
export const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email, role, password } = req.body

  try {
    const [rows] = await pool.execute('SELECT * FROM all_users WHERE ID = ?', [id])
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    let profile_picture = rows[0].profile_picture
    if (nuevoNombreArchivo) {
      profile_picture = nuevoNombreArchivo
    }
    const [result] = await pool.query(
      'UPDATE all_users SET name = ?, email = ?, role = ?, password = ?, profile_picture = ? WHERE ID = ?',
      [name, email, role, password, profile_picture, id]
    )
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.status(200).json({ message: 'El usuario ha sido modificado con éxito', id, name, email, role, profile_picture, password })
    console.log(`Ruta de actualizar a un usuario PUT http://localhost:3000/api/users/${id}`)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Delete (Eliminar)
export const deleteUserAndImage = async (req, res) => {
  const { id } = req.params

  try {
    const [rows] = await pool.execute('SELECT profile_picture FROM all_users WHERE ID = ?', [id])

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    const profile_picture = rows[0].profile_picture

    if (profile_picture) {
      const rutaArchivo = path.resolve(`./uploads/${profile_picture}`)
      try {
        await fs.unlink(rutaArchivo)
        console.log('Imagen eliminada exitosamente')
      } catch (error) {
        if (error.code === 'ENOENT') {
          console.log('No se encontró el archivo de imagen')
        } else {
          throw error
        }
      }
    }

    const [result] = await pool.query('DELETE FROM all_users WHERE ID = ?', [id])

    if (result.affectedRows === 1) {
      console.log(`Ruta de eliminar a un usuario DELETE http://localhost:3000/api/users/${id}`)
      return res.status(200).json({ message: 'Se eliminó el usuario correctamente' })
    }

    res.status(500).json({ message: 'Error al eliminar el usuario' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
