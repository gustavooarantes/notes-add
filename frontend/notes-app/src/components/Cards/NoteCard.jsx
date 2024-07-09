import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
    return (
        <div className="border -rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
            <div className="flex items-center justify-between">
                <div>
                    <h6 className="text-sm font-medium">{title}</h6>
                    <span className="text-xs text-slate-500">{date}</span>
                </div>

                <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-blue' : 'text-slate-300'}`} onClick={onPinNote} />

            </div>

            <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>

            <div className="flex items-center gap-2 mt-4">
                <div className="text-xs text-slate-500">{tags}</div>
                <MdCreate className="icon-btn" onClick={onEdit} />
                <MdDelete className="icon-btn" onClick={onDelete} />
            </div>
        </div>
    )
}

export default NoteCard