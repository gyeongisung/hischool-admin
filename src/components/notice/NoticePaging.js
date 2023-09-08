import Pagination from "react-js-pagination";
import { PagiWrap } from "../../styles/PagiStyle";

const NoticePaging = ({
  currentPage,
  setCurrentPage,
  totalCount,
  last4Important,
}) => {
  let itemsCount = 14 - Math.min(last4Important.length);

  return (
    <PagiWrap>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={itemsCount}
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
