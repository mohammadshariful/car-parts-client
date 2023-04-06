import Loading from "../Shared/Loading/Loading";
import { useFetchData } from "../../hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import useAdmin from "../../hooks/useAdmin";

const CarParts = () => {
  const { dataInfo } = useFetchData('https://proper-parts-server-74zj.onrender.com/api/v1/tools');

  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [admin] = useAdmin(user);



  if (dataInfo?.loading) {
    return <Loading />;
  }

  if (dataInfo?.error) {
    return <p className="w-full h-24 flex justify-center items-center text-red-500 text-sm sm:text-xl">Something went wrong !</p>
  }

  const newCarParts = [...dataInfo?.data].reverse();
  const sliceCarParts = newCarParts.slice(0, 6);

  return (
    <div className="my-20 py-10 bg-white shadow-sm">
      <h4 className="text-center text-lg">
        Millions of High-quality Products
      </h4>
      <p className="text-center mb-4 text-sm">
        Proper Parts Industry currently has more than 40 million pieces of
        product information from 27 industries. Besides, based on different
        procurement demands from different buyers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3">
        {sliceCarParts.map((parts) => {
          const { _id, availableQuantity, description, img, minimumOrderQuantity, name, price } = parts;

          return (<div key={_id} data-aos="fade-up" className="shadow-lg rounded-md p-2">
            <img src={img} alt={name} />
            <div className="flex justify-between items-center mt-1">
              <h5 className="text-sm font-bold"><span>Name: </span>{name}</h5>
              <p className="text-sm">Price:<span>$</span>{price}</p>
            </div>
            <p className="text-sm"> Minimum Order:{minimumOrderQuantity} pics</p>
            <p className="text-sm">Available Quantity : {availableQuantity} pics</p>
            <p className="text-xs my-1">{description.length > 100 ? description.slice(0, 150) + ' ...see more' : description}</p>
            <div className="flex justify-end mt-1">
              <button
                disabled={admin}
                onClick={() => navigate(`/purchase/${_id}`)}
                className={`text-xs border-[1px] border-blue-500 bg-blue-500 px-2 py-1 rounded-[4px] text-white hover:bg-white hover:text-blue-500 ${admin ? 'hover:bg-blue-500 hover:text-white cursor-not-allowed' : ''}`}
              >
                Purchase Now
              </button>
            </div>
          </div>)
        })}
      </div>
    </div>
  );
};

export default CarParts;
