import express from "express";
import morgan from "morgan";
import pkg from '../package.json'

import {createRoles} from './lib/initialSetup'

import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes'
import eventosRoutes from './routes/eventos.routes'
import noticiasRoutes from './routes/noticias.routes'

const app = express()
createRoles();

app.set('pkg', pkg)

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/eventos',eventosRoutes)
app.use('/api/noticias',noticiasRoutes)

export default app;