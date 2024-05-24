import { Router } from 'express'
import { uploadImage } from '../config/multer.js'
import { manejarErrorArchivo } from '../src/helper.js'
import { createUser, getUsers, getUserById, getImagen, updateUser, deleteUserAndImage } from '../src/userController.js'
const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.get('/photo/:nombre', getImagen)
router.get('*', (req, res) => res.end('GET: No se encontró la ruta'))

router.post('/users', uploadImage.single('imagen'), createUser)
router.post('*', (req, res) => res.end('POST: No se encontró la ruta'))

router.put('/users/:id', uploadImage.single('imagen'), updateUser, manejarErrorArchivo)
router.put('*', (req, res) => res.end('PUT: No se encontró la ruta'))

router.delete('/users/:id', deleteUserAndImage)
router.delete('*', (req, res) => res.end('DELETE: No se encontró la ruta'))

export default router
