
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../CSS/accessories.css" ; 
 const AccessoriesDetails = () => {
    const { id } = useParams();
  const [items, allItem] = useState([]);

  const getProuduct = async () => {
    try {
      const req = await fetch("http://localhost:3333/product/accessories/" + id);
      const dataItems = await req.json();

      allItem(dataItems.accessorie);
      console.log(dataItems);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProuduct();
    console.log(items);
  }, []);


  return (
    <>

         <div class="container">
            <br />
            {
                items.map((show) =>(
                    <div className="Detais">
                        <div class="row">
                    <div class="col">
                        
                        <img src="https://fastly.picsum.photos/id/828/400/300.jpg?hmac=UhSMxxeXSsUpgyeZ4M9PSYbB7yVstarD0GP7v5F5_ys" alt="..."/>
                    </div>
                    <div class="col">
                    <table className='table'>
                            <h2>{show.brand}</h2>
                            
        
                            <tr>
                              <td>About Item :</td>
                              <td><span>{show.description}</span>
                
                              </td>
                            </tr>
                            <tr>
                              <td>Who Use It</td>
                              <td><span>{show.user}</span></td>
                            </tr>
                            <tr>
                              <td>Price</td>
                              <td><span>{show.price}</span></td>
                            </tr>
        
                          </table>
        
                    </div>
            
                </div>
                    <div className="related">
                    <h2>You May Also Be Interested In</h2>
                </div>
                </div>
                    
                ))
            }
            <br />

        </div>

    </>

    
  )
}
export default  AccessoriesDetails ; 

