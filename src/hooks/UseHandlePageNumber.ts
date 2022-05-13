import {useState} from 'react'

export const useHandlePageNumber = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handleNextPage: () => void = () => {
    setPageNumber(pageNumber + 1);
  };
  const handlePreventPage: () => void = () => {
    setPageNumber(pageNumber - 1);
  };

 
  return {pageNumber,handleNextPage,handlePreventPage}
}
