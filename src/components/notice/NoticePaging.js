import Pagination from "react-js-pagination";
import { PagiWrap } from "../../styles/PagiStyle";

const NoticePaging = ({
  currentPage,
  setCurrentPage,
  totalCount,
}) => {

  return (
    <PagiWrap>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={14}
        totalItemsCount={totalCount}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={setCurrentPage}
      />
    </PagiWrap>
  );
};

export default NoticePaging;
