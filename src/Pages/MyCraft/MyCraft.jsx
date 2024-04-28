import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";

const MyCraft = () => {
  const { user } = useContext(AuthContext) || {};
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:5000/myProducts/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setItems(data);
      console.log(data);
    })
  },[user])

  return (
    <div>
      {items.map((p) => (
        <div key={p._id}>
          <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={p.photoUrl} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        </div>
      ))}
    </div>
  );
};

export default MyCraft;
