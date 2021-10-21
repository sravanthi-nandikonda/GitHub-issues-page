import ReactPaginate from "react-paginate";



import React from 'react'

function Pagination() {

    const handlePageClick =(data)=>{
        console.log(data.selected)
      }


    return (
        <ReactPaginate
   previousLabel={'Previous'}
   nextLabel={'Next'}
   breakLabel={'...'}
   pageCount={6}
   marginPagesDisplayed={1}
   //onPageChange={handlePageClick}
   containerClassName={'pagination justify-content-center'}
   pageClassName={'page-item'}
   pageLinkClassName={'page-link'}
   previousClassName={'page-item'}
   previousLinkClassName={'page-link'}
   nextClassName={'page-item'}
   nextLinkClassName={'page-link'}
   breakClassName={'page-item'}
   breakLinkClassName={'page-link'}
   activeClassName={'active'}
      />
    )
}

export default Pagination
