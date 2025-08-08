
import usePagination from "@/hooks/usePagination";
import CharactersGallery from "../features/characters/components/CharactersGallery";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useCallback, useState } from "react";
import type { PaginationInfo } from "@/types/pagination";
function CharactersPage() {
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo | null>(null);
  
  const {
    currentPage,
    handlePageChange,
    handlePreviousPage,
    handleNextPage,
    canGoPrevious,
    canGoNext
  } = usePagination({
    initialPage: 1,
    totalPages: paginationInfo?.last_visible_page || 1
  });

  const handlePaginationData = useCallback((pagination: PaginationInfo) => {
    setPaginationInfo(pagination);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <CharactersGallery 
          page={currentPage} 
          onPaginationData={handlePaginationData}
        />
      </main>
      
 {paginationInfo && (
  <div className="pb-8">
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={handlePreviousPage}
            className={!canGoPrevious ? "pointer-events-none opacity-50" : "cursor-pointer"}
          >
            Previous
          </PaginationPrevious>
        </PaginationItem>
        
        {/* Primera página */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink 
              onClick={() => handlePageChange(1)}
              className="cursor-pointer"
            >
              1
            </PaginationLink>
          </PaginationItem>
        )}
        
        {/* Ellipsis si estamos lejos del inicio */}
        {currentPage > 4 && <PaginationEllipsis />}
        
        {/* Páginas cercanas a la actual */}
        {[...Array(5)].map((_, i) => {
          const pageNum = currentPage - 2 + i;
          if (pageNum > 0 && pageNum <= paginationInfo.last_visible_page) {
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink 
                  onClick={() => handlePageChange(pageNum)}
                  isActive={pageNum === currentPage}
                  className="cursor-pointer"
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          }
          return null;
        })}
        
        {/* Ellipsis si estamos lejos del final */}
        {currentPage < paginationInfo.last_visible_page - 3 && <PaginationEllipsis />}
        
        {/* Última página */}
        {currentPage < paginationInfo.last_visible_page && (
          <PaginationItem>
            <PaginationLink 
              onClick={() => handlePageChange(paginationInfo.last_visible_page)}
              className="cursor-pointer"
            >
              {paginationInfo.last_visible_page}
            </PaginationLink>
          </PaginationItem>
        )}
        
        <PaginationItem>
          <PaginationNext 
            onClick={handleNextPage}
            className={!canGoNext ? "pointer-events-none opacity-50" : "cursor-pointer"}
          >
            Next
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    
    <div className="text-center text-sm text-muted-foreground mt-4">
      Página {currentPage} de {paginationInfo.last_visible_page.toLocaleString()} 
      ({paginationInfo.items.total.toLocaleString()} personajes totales)
    </div>
  </div>
)}
    </div>    
  );
}

export default CharactersPage;