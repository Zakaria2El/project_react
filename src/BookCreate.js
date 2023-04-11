import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BookCreate = () => {

    const[id,idchange]=useState("");
    const[title,titlechange]=useState("");
    const[author,authorchange]=useState("");
    const[n_page,n_pagechange]=useState("");
    const[yearP,yearPchange]=useState("");
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const bookdata={title,author,n_page,yearP};
      

      fetch("http://localhost:8000/books",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(bookdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input required value={title} onMouseDown={e=>valchange(true)} onChange={e=>titlechange(e.target.value)} className="form-control"></input>
                                        {title.length==0 && validation && <span className="text-danger">Enter the title</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Author</label>
                                            <input value={author} onChange={e=>authorchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Number of pages</label>
                                            <input value={n_page} onChange={e=>n_pagechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                    <div className="form-group">
                                            <label>Year production</label>
                                            <input value={yearP} onChange={e=>yearPchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link className="btn btn-danger my-2" to="/"><img className="mr-2" width="20px" src="/back.png"/>  Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default BookCreate;