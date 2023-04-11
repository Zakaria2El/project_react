import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const BookListing = () => {
    const [bookdata, bookdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/books/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/books/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/books/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }


    useEffect(() => {
        fetch("http://localhost:8000/books").then((res) => {
            return res.json();
        }).then((resp) => {
            bookdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card bg-light">
                <div className="card-title text-start">
                    <h2 className="mx-3">Book Listing</h2>
                </div>
                <div className="card-body ">
                    <div className="divbtn">
                        <Link to="books/create" className="btn btn-outline-success ">Add New Book</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="text-white">
                            <tr>
                                <td>ID</td>
                                <td>Title</td>
                                <td>Author</td>
                                <td>Number of pages</td>
                                <td>Year Production</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                bookdata &&
                                bookdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.author}</td>
                                        <td>{item.n_page}</td>
                                        <td>{item.yearP}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success"><img width="20px" src="/edit.png"/></a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger"><img width="20px" src="/delete.png"/></a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary"><img width="20px" src="/details.png"/></a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
}

export default BookListing;