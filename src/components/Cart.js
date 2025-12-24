import { useContext } from "react";
import { CartContext } from "../store";

export default function Cart() {
  const [state, dispatch] = useContext(CartContext);
  
  return (
    <div className="bg-light p-3">
      <table className="table align-middle">
        <tbody>
          {state.cartList.map(product => {
            return(
              <tr key={product.id}>
                <td>
                  <button type='button' className="btn btn-sm btn-outline-danger"
                    onClick={()=>{
                      dispatch({
                        type: "REMOVE_ITEM",
                        payload: {...product}
                      })
                    }}>
                    <i className="bi bi-trash3"></i></button>
                </td>
                <td>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="cart-img"
                  />
                </td>
                <td>
                  {product.title}
                  <br />
                  <small>NT$ {product.price}</small>
                </td>
                <td>
                  <select className="form-select" value={product.quantity}
                    onChange={(e)=>{
                      dispatch({
                        type: "UPDATE_QTY",
                        payload:{
                          ...product,
                          quantity: Number(e.target.value),
                        }
                      })
                    }}>
                    {[...Array(10)].map((_, index)=>{
                      return (
                        <option key={index} value={index+1}>{index+1}</option>
                      )
                    })}
                  </select>
                </td>
                <td className="text-end">NT$ {product.price*product.quantity}</td>
              </tr>
            )
          })}
          
        </tbody>
        <tfoot>
          <tr>
            <td className="text-end" colSpan={5}>
              總計 NT$ {state.total || 0}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
