// import * as express from 'express';
// import * as chirps from '../../utilites/chirpstore';
// import db from './db';

// const router = express.Router();

// router.get('/:id?', (req, res, next) => {
//     let id = req.params.id;
//     if(id) {
//     db.GetChirp(id).then( results => {
//         res.send(results);
//     })
//     } else {
//         db.GetChirps().then(results => {
//             res.send(results);
//         })
//     } 
// });

// router.post('/', (req, res, next) => {
//     db.PostChirp(req.body.text).then(results => {
//         res.send(results);
//     })
// });

// router.put('/:id/edit', (req, res, next) => {
//     let id = req.params.id;
//     db.UpdateChirp(id, req.body.text).then(results => {
//         res.send(results);
//     });
//     res.redirect('/');
// })

// router.delete('/:id', (req, res, next) => {
//     let id = req.params.id;
//     db.DeleteChirp(id).then(results => {
//         res.send(results);
//     })
// });

// export default router;