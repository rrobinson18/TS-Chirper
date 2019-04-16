import * as mysql from 'mysql';
import chirps from './chiper';


export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirprapp',
    password: 'password',
    database: 'chirpr'
});

const getChirps = () => {
    let query = `Select * from chirps;
    `;
    return new Promise((resolve, reject) => {
        Connection.query(query, (err, results, fields) => {
            if (err) reject(err);
            resolve(results);
        })
    });
}


const getChirp = (id: number) => {
    let query = `Select * from chirps where id = ${id};
    `;
    return new Promise((resolve, reject) => {
    Connection.query(query, (err, results, fields) => {
        if (err) reject(err);
        resolve(results);
     });
    })
}

const deleteChirps = (id) => {
    let query = `Delete from chirps where id = ${id};
    `;
    return new Promise((resolve, reject) => {
        Connection.query(query, (err, results, fields) => {
            if (err) reject(err);
            resolve(results);
        })
    });
}


const editChirps = (id, text) => {
    let query = `Update chirps set text = '${text}' where id = ${id};
    `;
    return new Promise((resolve, reject) => {
        Connection.query(query, (err, results, fields) => {
            if (err) reject();
            resolve(results);
        })
    });
}


const postChirps = (text) => {
    let query = `Insert into chirps (userid, text) values (1, '${text}');
    `;
    return new Promise((resolve, reject) => {
        Connection.query(query, (err, results, fields) => {
            if (err) reject(err);
            resolve(results);
        })
    });
}

export {
getChirp,
getChirps,
deleteChirps,
editChirps,
postChirps
}