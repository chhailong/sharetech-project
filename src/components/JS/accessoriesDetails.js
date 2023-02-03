
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
                        
                        <img src={show.img} alt="picture"/>
                    </div>
                    <div class="col">
                    <table className='table'>
                            <h2>{show.brand}</h2>
                          
                            <tr>
                              <td className="main">About Item </td>
                              <td><span>{show.description}</span>
                
                              </td>
                            </tr>
                            <tr>
                              <td className="main">Who Use It</td>
                              <td><span>{show.user}</span></td>
                            </tr>
                            <tr>
                              <td className="main">Price</td>
                              <td><span>{show.price}</span></td>
                            </tr>
        
                          </table>
        
                    </div>
                    
            
                </div>
                <br />
                <br />

                  {/* <div className="related">
                      <br />
                      <br />
                    <h2>You May Also Be Interested In</h2>
                    <div>

                    </div>
    
                </div> */}
                </div>
                    
                ))
            }
            <br />

        </div>

    </>

    
  )
}
export default  AccessoriesDetails ; 

