import { useState } from "react"
import ListProduct from "../components/ListProduct"
import { useEffect } from "react";


const initialBuah = [
    {
        id : 1,
        gambar : "public/semangka.png",
        harga:10000,
        nama : "semangka",
    
    },
    {
        id : 2,
        gambar : "public/pisang.png",
        harga:10000,
        nama : "pisang",
    
    }, 
     {
        id : 3,
        gambar : "public/jambu.jpg",
        harga:10000,
        nama : "jambu",
    
    },
    ];
const savedBuahs = localStorage.getItem("buahs");
export default function Products() {
    
const [buah,setBuah] = useState(
    savedBuahs ? JSON.parse(savedBuahs) : initialBuah
);

const [editBuah,setEditBuah]=useState();

const menanganiEdit = (buah) =>{
    setEditBuah(buah);
}
const menanganiDelete = (id)=> {
    

    if (confirm("Apakah Anda yakin ingin menghapus buah  ini?")) {
        setBuah(buah.filter((p)=> p.id !== id))
      }
}
function addProduct() {
    setEditBuah({});
}

useEffect(()=>{
    localStorage.setItem("buahs", JSON.stringify(buah));
})

return(
    <main>
        <div>
           {
            buah.map((buah)=>(
                <ListProduct
                key={buah.id}
                buah={buah}
                onEdit={menanganiEdit}
                onDelete={menanganiDelete}
                
                />
            ))
        } 
        <button onClick={addProduct} className="bg-red-500 w-12">Add Produk</button>
        </div>
        {editBuah &&(
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
                <form >
                    <h1>Edit Product</h1>
                    <div className="flex flex-col">
                        <label htmlFor="nama">Nama</label>
                        <input type="text" value={editBuah.nama} id="nama" onChange={(e) =>{
                            setEditBuah({...editBuah, nama: e.target.value })
                        }}/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="harga">Harga</label>
                        <input type="number" value={editBuah.harga} id="harga" onChange={(e) =>{
                            setEditBuah({...editBuah, harga: e.target.value })
                        }}/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="gambar">Gambar</label>
                        <input type="text" value={editBuah.gambar} id="gambar" onChange={(e) =>{
                            setEditBuah({...editBuah, gambar: e.target.value })
                        }}/>
                    </div>
                    <div className="flex gap-5">
                        <button onClick={() => {
                            if (editBuah.id) {
                                setBuah(
                                    buah.map((b) => (b.id === editBuah.id ? editBuah : b))
                                )
                            } else{
                                setBuah([
                                    ...buah,
                                    {id: buah.length + 1, ...editBuah}
                                ])
                            }
                        }}>Save</button>
                        <button onClick={()=> setEditBuah()}>Cancel</button>
                    </div>
                </form>
            </div>
        )}
    </main>
)
   
    
}