import { useState } from "react"

export default function Listbuah({buah,onEdit,onDelete}) {
 
    return(
      
            <div className="max-w-xs rounded overflow-hidden shadow-lg my-4 bg-white">
              <img className="w-full" src={buah.gambar} alt={buah.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{buah.name}</div>
                <p className="text-gray-700 text-base">Harga: {buah.harga}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button
                  onClick={() => onInfo(buah)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Info
                </button>
                <button
                  onClick={() => onEdit(buah)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(buah.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Delete
                </button>
              </div>
            </div>
          
    )
}