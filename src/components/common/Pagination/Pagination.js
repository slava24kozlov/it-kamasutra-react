import React, {useState} from "react";
import style from './Pagination.module.scss';

const Pagination = ({currentPage, onChangeCurrentPage, pagesCount, double, children}) => {
  const [currentLine, setCurrentLine] = useState(1);

  const handleChangePaginationLine = (event) => {
    const value = event.target.dataset.name;
    if (value === 'arrowLeft') {
      setCurrentLine(prev => currentLine - 5 <= 0 ? 1 : prev - 5)
    } else if (value === 'arrowRight') {
      setCurrentLine(prev => currentLine + 5 > pagesCount ? pagesCount - 4 : prev + 5)
    }
  }

  const contentPagination = () => (
    <div className={style.pagesList}>
      <button data-name="arrowLeft"
              onClick={handleChangePaginationLine}
              disabled={currentLine === 1}>
        &#8592;
      </button>
      {Array(5).fill(currentLine).map((el, index) => (
        <span
          key={el + index}
          aria-selected={currentPage === (el + index)}
          datatype={currentPage === (el + index) ? "active" : null}
          className={style.selected}
          onClick={() => onChangeCurrentPage(el + index)}
        >{el + index}</span>
      ))}
      <button data-name="arrowRight"
              onClick={handleChangePaginationLine}
              disabled={currentLine === pagesCount - 4}>
        &#8594;
      </button>
    </div>
  )

  return (
    <>
      {contentPagination()}
      {children}
      {double && contentPagination()}
    </>
  )
}

export default Pagination;