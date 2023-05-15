import logo from './logo.svg';
import { useState } from 'react';
import FormInput from './FormInput';
import FormData from './FormData';
import { TableHead } from './TableData';
function App() {
  const [formData, setFormData]= useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
    address:"",
    role:"",
  })
  
  const[chunkData, setChunkData]= useState([]);
  
console.log('jsh', chunkData)
  const handleInput=(e)=>{
     const {name, value}= e.target;
     setFormData({...formData, [name]:value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
    setChunkData([...chunkData, formData])
 
  }

  
  return (
    <div className="App d-flex justify-content-center pt-2">
      <div className="form_container w-50">
        <form onSubmit={handleSubmit}>
        
          {
            FormData.map((curElm)=>{
              return(
                <>
                    <FormInput label={curElm.label} type={curElm.type} name={curElm.name} id={curElm.id} value={formData.sunny} onChange={handleInput} className="form-control" placeholder={curElm.placeholder} />

                </>
              )
            })
          }   

          <button type="submit" className="btn btn-success mt-2">Submit</button>

        </form>

        <div className="table_con mt-4">
          <table className='table table-bordered'>
         
             <thead>
              <tr>
               {
                TableHead.map((curElm)=><th>{curElm.name} </th>)
               }
              </tr>
             </thead>

             <tbody>
              {
               chunkData?.map((curElm)=><tr>
                <td>{curElm.fname} </td>
                <td>{curElm.lname} </td>
                <td>{curElm.email} </td>
                <td>{curElm.phone} </td>
                <td>{curElm.address} </td>
                <td>{curElm.role} </td>
                <td colSpan={2}><button className='btn btn-info btn-sm'>Edit</button> <button className='btn btn-success btn-sm'>Trash</button>  </td>
               </tr>)
              }
             </tbody>
         
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
