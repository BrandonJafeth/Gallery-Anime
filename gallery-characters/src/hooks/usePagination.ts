import { useState } from "react";

type UsePaginationProps = {
    initialPage: number;
    totalPages: number;
}

type UsePaginationReturn = {
currentPage: number; 
setCurrentPage: (page: number) => void;
handlePageChange: (page: number) => void;
handlePreviousPage: () => void;
handleNextPage: () => void;
canGoPrevious: boolean;
canGoNext: boolean;
}


function usePagination({
initialPage = 1,
totalPages
}: UsePaginationProps): UsePaginationReturn {

    const [currentPage, setCurrentPage] = useState(initialPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    }


    const handlePreviousPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1);
        }
    }
    const canGoPrevious = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    return {
        currentPage,
        setCurrentPage,
        handlePageChange,
        handlePreviousPage,
        handleNextPage,
        canGoPrevious,
        canGoNext
    };
}

export default usePagination;