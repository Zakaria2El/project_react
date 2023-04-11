import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const BookDetail = () => {
    const { bookid } = useParams();

    const [bookdata, bookdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/books/" + bookid).then((res) => {
            return res.json();
        }).then((resp) => {
            bookdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>


            <div className="container">

                <div className="card card-details bg-dark my-5 py-5 row">
                    <div className="card-title">
                        <h2>Book #{bookdata.id} Details</h2>
                    </div>
                    <div className="card-body"></div>

                    {bookdata &&
                        <div className="text-white">
                            <h2>The Book title is : <b>{bookdata.title}</b></h2>
                            <h5>Author is : {bookdata.author}</h5>
                            <h5>Number of pages is : {bookdata.n_page}</h5>
                            <h5>Year production is : {bookdata.yearP}</h5>

                            <Link className="btn btn-danger my-2" to="/"><img className="mr-2" width="20px" src="/back.png"/>  Back</Link>
                        </div>
                    }
                </div>
            </div>
        </div >
    );
}

export default BookDetail;