import React, {useEffect, useState} from "react";
import {firestore} from "../../config/firebase";

const getDataFromDb = (id) => {
    return firestore.collection('list').where('id', '==', id).limit(1).get().then(data => {
        return data.docs[0].data();
    });

}

export const InfoScreen = (props) => {
    const query = new URLSearchParams(props.location.search);
    const id = query.get('id');
    const [user, setUser] = useState(null);

    useEffect(() => {
        getDataFromDb(id).then((u) => setUser(u));
    }, [])

    return (
        <>
            {user && <h1>{user.name}</h1>}
        </>
    )
}
