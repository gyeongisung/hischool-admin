import styled from "@emotion/styled";

export const StudentListWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 15px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  h3 {
    font-size: 30px;
    margin-bottom: 10px;
  }
  .pagination-wrap {
    ul {
      display: flex;
      justify-content: center;
      margin-top: 15px;
      li {
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        cursor: pointer;
        a {
          text-decoration: none;
          color: #176b87;
          font-size: 16px;
          line-height: 16px;
        }
      }
      .active a {
        color: #fff;
      }
      .active {
        background-color: #176b87;
      }
    }
    .page-selection {
      width: 48px;
      height: 30px;
      color: #176b87;
    }
  }
`;

export const StudentListHeader = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search-wrap {
    width: 16%;
    form {
      display: flex;
      width: 100%;
      > input {
        border: 1px solid #bbb;
        border-radius: 3px;
        width: 100%;
        height: 24px;
        padding-left: 5px;
        margin-right: 5px;
      }
      button {
        width: 3vw;
        height: 24px;
        line-height: 1;
        background: #fff;
        border: 1px solid #bbb;
        border-radius: 3px;
        cursor: pointer;
      }
    }
  }
  .right-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    .filter-wrap {
      text-align: start;
      select {
        border: 1px solid #bbb;
        border-radius: 3px;
        width: 4.5vw;
        height: 24px;
        text-align: center;
        :not(:last-of-type) {
          margin-right: 5px;
        }
        :last-of-type {
          width: 90px;
        }
      }
    }
    .btn-wrap {
      button {
        width: 6vw;
        height: 24px;
        border: #64cbb2;
        border-radius: 3px;
        margin-right: 5px;
        background: #64ccc5;
        line-height: 1;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;

export const StudentListTitle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 0 0 0.5% 0;
  h3 {
    font-size: 30px;
  }
  button {
    width: 120px;
    height: 30px;
    font-size: 17px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #64ccc5;
    color: #fff;
  }
`;

export const StudentListDiv = styled.div`
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  > ul {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(18, 39px);
    > li {
      line-height: 39px;
      border-top: 1px solid #ccc;
      :first-of-type {
        background: #176b87;
        color: #fff;
        border-top: 0;
      }
      :last-of-type {
        border-bottom: 1px solid #ccc;
      }
      > ul {
        height: 100%;
        display: grid;
        grid-template-columns: 0.2fr 0.3fr 0.5fr 0.7fr 0.7fr 1.1fr 1.5fr 0.6fr;
        > li {
          line-height: 2;
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
        }
      }
    }
  }
`;
