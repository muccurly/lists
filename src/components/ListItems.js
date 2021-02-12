import React, {useState, useEffect} from "react";
import {firestore} from "../config/firebase";
import {Link} from 'react-router-dom'

const getDataFromDB = (user) => {
    let data = [];
    return firestore
        .collection('list')
        .where('userId', '==', user.uid)
        .get()
        .then((querySnapshot) => {
            return querySnapshot.docs.map(doc => doc.data());
        });
}

export const ListItems = ({user}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getDataFromDB(user).then(i => setItems(i));
    }, [])

    return (
        <table>
            <tr>
                <thead>Name</thead>
                <thead>Link</thead>
            </tr>
            {items.map((item, index) =>
                <tr key={index}>
                    <tbody>{item.name}</tbody>
                    <tbody>
                        <Link to={{pathname: '/info',search:`?id=${item.id}`, state: {id: item.id}}}>{item.id}</Link>
                    </tbody>
                </tr>
            )}
        </table>
    )
}
