import React,{useState} from "react";
import {firestore} from "../config/firebase";

const addToFirestore=(name,user)=>{

    let docRef = firestore.collection('list').doc();
    return docRef.set({
        id:docRef.id,
        name,
        userId:user.uid
    });
}
export const ModalView=({setIsShow,user})=>{
    const[name,setName] = useState('');

    return(
        <div className="modal">
            <div className="modal-content">
                <div className="close" onClick={()=>setIsShow(false)}>&times;</div>
                <div className="content">
                    <label>Name: </label>
                    <div style={{display:'flex', width:'30%',flexDirection:'column'}}>
                        <input value={name} onChange={e=>setName(e.target.value)} type='text' style={{outline:'none', }}/>
                        <input onClick={()=>{addToFirestore(name,user);setIsShow(false)}} type='button' className='create-btn btn' placeholder='Create'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
