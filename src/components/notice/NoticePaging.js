import Pagination from "react-js-pagination";
import { PagiWrap } from "../../styles/PagiStyle";

const NoticePaging = ({
  currentPage,
  totalNoticeCount,
  setCurrentPage,
}) => {
  console.log(currentPage, totalNoticeCount);

  return (
    <PagiWrap>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={10}
        totalItemsCount={totalNoticeCount}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={setCurrentPage}
      />
    </PagiWrap>
  );
};

export default NoticePaging;
