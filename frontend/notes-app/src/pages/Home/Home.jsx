import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";

const Home = () => {

    const [openAddEditModal, setOpenAddEditModal] = useState({isShown: false, type: "add", data: null});

    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4 mt-8">
                    <NoteCard title="Treinar JavaScript" date="8 Jul 2024" content="JavaScript, React, Tailwindcss" tags="#Programação" isPinned={true} onEdit={()=>{}} onDelete={()=>{}} onPinNote={()=>{}} />
                    <NoteCard title="Treinar JavaScript" date="8 Jul 2024" content="JavaScript, React, Tailwindcss" tags="#Programação" isPinned={true} onEdit={()=>{}} onDelete={()=>{}} onPinNote={()=>{}} />
                    <NoteCard title="Treinar JavaScript" date="8 Jul 2024" content="JavaScript, React, Tailwindcss" tags="#Programação" isPinned={true} onEdit={()=>{}} onDelete={()=>{}} onPinNote={()=>{}} />
                    <NoteCard title="Treinar JavaScript" date="8 Jul 2024" content="JavaScript, React, Tailwindcss" tags="#Programação" isPinned={true} onEdit={()=>{}} onDelete={()=>{}} onPinNote={()=>{}} />
                    <NoteCard title="Treinar JavaScript" date="8 Jul 2024" content="JavaScript, React, Tailwindcss" tags="#Programação" isPinned={true} onEdit={()=>{}} onDelete={()=>{}} onPinNote={()=>{}} />
                    <NoteCard title="Treinar JavaScript" date="8 Jul 2024" content="JavaScript, React, Tailwindcss" tags="#Programação" isPinned={true} onEdit={()=>{}} onDelete={()=>{}} onPinNote={()=>{}} />
                </div>
            </div>

            <button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-600 absolute right-10 bottom-10" onClick={() => {setOpenAddEditModal({ isShown: true, type: "add", data: null})}}>
                <MdAdd className="text-[32px] text-blue" />
            </button>

            <Modal isOpen={openAddEditModal.isShown} oneRequestClose={() => {}} style={{overlay: {backgroundColor: "rgba(0,0,0,0.2)",},}} contentLabel="" className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll" >
                <AddEditNotes type={setOpenAddEditModal.type} noteData={openAddEditModal.data} onClose={() => {setOpenAddEditModal({isShown: false, type: "add", data: null});}}/>
            </Modal>
        </>
    )
}

export default Home