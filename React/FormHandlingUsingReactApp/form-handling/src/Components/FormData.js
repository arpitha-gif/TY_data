import '../index.css'
import {useState} from "react";

const FormData = () => {
    const [uname,setUname] = useState('')
    return (
        <div className="FormData">
            <h2>Sign-in Page</h2>
            <form>
                <label>UserName:</label>
                <input type="text" required value={uname} onChange={(e)=>setUname(e.target.value)}/>
                <label>Password:</label>
                <input type="password" required/>
                <label>Gender:</label>
                <select>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button>Submit</button>
                <p>{uname}</p>
            </form>
        </div>
    );
}

export default FormData