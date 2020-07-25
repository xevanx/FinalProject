import axios from 'axios';

export class Storage {
    cosntructor(storageName = 'gameScoreboard', intitialValue = '[]') {
        this.storageName = storageName

        if (!localStorage.getItem(storageName)) {
            localStorage.setItem(storageName, initialValue)
        }
    }

    getData() {
        // Completely wrong but used to pull data from db into table

        return JSON.parse(db.get(createMinesweeper(req, res) => {
            cosole.log(req.data);
        }));
    }

    update(data) {
        setItem(this.storageName, JSON.stringify(data))
    }
}