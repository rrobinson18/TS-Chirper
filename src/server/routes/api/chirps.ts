import * as express from 'express';
import * as Chirps from '../../utilites/chirpstore';

const router = express.Router();

router.get('/:id?', (req, res, next) => {
    let id = req.params.id;
    if(id) {
        res.json(Chirps.GetChirp(id))
    } else {
        res.json(Chirps.GetChirps())
    } 
});

router.post('/', (req, res, next) => {
    let chirp = req.body;
    Chirps.CreateChirp(chirp);
    res.redirect('/');
});

router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    Chirps.UpdateChirp(id, req.body);
    res.redirect('/');
})

router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Chirps.DeleteChirp(id);
    res.sendStatus(200);
})

export default router;