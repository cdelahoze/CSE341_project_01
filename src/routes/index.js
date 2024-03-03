import { Router } from "express"
const router = Router()

router.get('/', (req, res) => res.render('index.ejs', {title: 'First Website with Node'})) //se renderiza el archivo index que tiene el HTML

export default router