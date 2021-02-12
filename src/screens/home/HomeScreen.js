import './styles.css';
import React, {useEffect, useState} from "react";
import {auth} from "../../config/firebase";
import {ModalView} from "../../components/ModalView";
import {ListItems} from "../../components/ListItems";

function HomeScreen() {
    const [isShow, setIsShow] = useState(false);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                auth.signInAnonymously().catch((err) => {
                    console.log(err);
                })
            }
        });
    }, [])

    return (
        <>
            {isShow && <ModalView setIsShow={setIsShow} user={currentUser}/>}
            <div className='container'>
                <input onClick={() => setIsShow(true)} className="create-btn" placeholder='create'/>
                {currentUser && <ListItems user={currentUser}/>}
            </div>
        </>
    );
}

export default HomeScreen;
