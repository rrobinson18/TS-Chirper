import * as express from 'express';
import db, { getChirp, getChirps } from './db';


const router = express.Router();

// router.get('/api/chirpr', async (req, res) => {
//     try {
//         res.json(await db.chirpr.all())
//     } catch (error) {
//         console.log(error);
//         res.sendStatus(500);
//     }
// });

router.get('/api/chirpr/:id?', async (req, res) => {
    let id = req.params.id;
    if(id) {
        let chirp = await getChirp(id);
        res.send(chirp);
    } else {
    let chirps = await getChirps();
    res.send(chirps);
    }
});


router.post('/', async (req, res) => {
    db.PostChirp(req.body.text).then(results => {
        res.send(results);
    })
});

router.put('/:id/edit', (req, res) => {
    let id = req.params.id;
    db.UpdateChirp(id, req.body.text).then(results => {
        res.send(results);
    });
    res.redirect('/');
})

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    db.DeleteChirp(id).then(results => {
        res.send(results);
    })
});

export default router;
