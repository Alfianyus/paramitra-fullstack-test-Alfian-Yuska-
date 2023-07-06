import React, {useState} from 'react';
import {  Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';


export default function EditNews(props){
    const[title, setTitle]=useState('');
    const[description, setDescription]=useState('');
    const[category, setCategory]=useState('');
    const[isNotif,setIsNotif]=useState(false);

    const handleSubmit=()=>{
        const data={
            title,description,category
        }
        //Inertia.post('/news',data)
        setIsNotif(true)
        setTitle('')
        setDescription('')
        setCategory('')
console.log('props',props)
    return(
        <div className=' min-h-screen bg-slate-50 '>
            <Head title={props.title}/>
            <Navbar user={props.auth.user}/>
            <div  className="card w-full lg:w-96 bg-base-100 shadow-xl m-2">
                <div className="card-body">
                    <input type="text" placeholder="Judul" className=" m-2 input input-bordered w-full" onChange={(title)=>setTitle(title.target.value)} value={props.myNews.title} />
                    <input type="text" placeholder="Deskripsi" className=" m-2 input input-bordered w-full  " onChange={(description)=>setDescription(description.target.value)}   value={props.myNews.description}/>

                    <input type="text" placeholder="Kategori" className=" m-2 input input-bordered w-full " onChange={(category)=>setCategory(category.target.value)} value={props.myNews.category} />
                    <button className='btn btn-primary m-2' onClick={()=> handleSubmit()}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}
}
