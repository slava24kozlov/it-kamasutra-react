import React, {useState} from "react";
import style from "./Pagination.module.scss";

type PropsType = {
    currentPage: number
    onChangeCurrentPage: (currentPage: number) => void
    pagesCount: number
    double: boolean
    children: React.ReactChildren
}

const Pagination: React.FC<PropsType> = ({currentPage, onChangeCurrentPage, pagesCount, double, children}) => {
    const [currentLine, setCurrentLine] = useState(1);

    const handleChangePaginationLeft = (): void => {
        setCurrentLine(prev => currentLine - 5 <= 0 ? 1 : prev - 5);
    };

    const handleChangePaginationRight = (): void => {
        setCurrentLine(prev => currentLine + 5 > pagesCount ? pagesCount - 4 : prev + 5);
    };

    const contentPagination = (): JSX.Element => (
        <div className={style.pagesList}>
            <button onClick={handleChangePaginationLeft} disabled={currentLine === 1}>
                &#8592;
            </button>
            {Array(5).fill(currentLine).map((el: number, index: number) => (
                <span
                    key={el + index}
                    aria-selected={currentPage === (el + index)}
                    datatype={currentPage === (el + index) ? "active" : ""}
                    className={style.selected}
                    onClick={() => onChangeCurrentPage(el + index)}
                >{el + index}</span>
            ))}
            <button onClick={handleChangePaginationRight} disabled={currentLine === pagesCount - 4}>
                &#8594;
            </button>
        </div>
    );

    return (
        <>
            {contentPagination()}
            {children}
            {double && contentPagination()}
        </>
    );
};

export default Pagination;
