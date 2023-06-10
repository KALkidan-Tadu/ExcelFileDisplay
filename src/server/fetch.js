const db = require('./config/db')

const fetch = () => {
    const createTable = (tableName) => {

        db.query(`CREATE TABLE ${tableName} (
            ItemNo FLOAT,
            Description varchar(255),
            Unit varchar(20),
            Qty DOUBLE,
            Rate DOUBLE,
            Amount DOUBLE
        );`, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        });
    }

    const addRow = (row, tableName) => {
        db.query(`INSERT INTO ${tableName} (ItemNo, Description, Unit, Qty, Rate, Amount) VALUES (?,?,?,?,?,?)`, [row[0], row[1], row[2], row[3], row[4], row[5]], (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        });
    }

    const editRow = (itemNo, row, tableName) => {
        db.query(`UPDATE ${tableName} SET 
        ItemNo = ${row[0]},
        Description ${row[1]},
        Unit ${row[2]},
        Qty ${row[3]},
        Rate ${row[4]},
        Amount ${row[5]} WHERE ItemNo = ${itemNo};`, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        });
    }

    const deleteRow = (itemNo, tableName) => {
        db.query(`DELETE FROM ${tableName} WHERE ItemNo = ${itemNo};`, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        });
    }

    return ({ createTable, addRow, editRow, deleteRow });
}

export default fetch;