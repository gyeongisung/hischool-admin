import styled from "@emotion/styled";

export const AdminHomeDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 15px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  .bottom-wrap {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    .calendar {
      width: 100%;
      height: 100%;
    }
    .bottom-right-wrap {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
    }
  }
`;

export const StatusCountDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  .student-status-wrap {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    background: #f7f7f7;
    box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 8px 15px;
    h3 {
      width: 6.3%;
      font-size: 21px;
      border-right: 1px solid #ccc;
      margin-right: 15px;
      margin-bottom: 0;
      padding-right: 15px;
    }
    .student-status {
      width: 100%;
      height: 100%;
      font-size: 21px;
      font-weight: 600;
      color: #176b87;
      > span {
        display: inline-block;
        &:nth-of-type(3) {
          margin-right: 0;
        }
      }
      .student-num {
        font-weight: 600;
        margin-left: 10px;
        color: #64ccc5;
        text-decoration: underline;
      }
    }
  }
  .teacher-status-wrap {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    background: #f7f7f7;
    box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 8px 15px;
    h3 {
      width: 6.3%;
      font-size: 21px;
      border-right: 1px solid #ccc;
      margin-right: 15px;
      margin-bottom: 0;
      padding-right: 15px;
    }
    .teacher-status {
      width: 100%;
      height: 100%;
      font-size: 21px;
      font-weight: 600;
      color: #176b87;
      > span {
        display: inline-block;
        &:nth-of-type(3) {
          margin-right: 0;
        }
      }
      .teacher-num {
        font-weight: 600;
        margin-left: 10px;
        color: #64ccc5;
        text-decoration: underline;
      }
    }
  }
`;

export const FullCalendarDiv = styled.div`
  width: 100%;
  background: #f7f7f7;
  padding: 5px 15px 15px;
  border-radius: 5px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  .fc {
    width: 100%;
    color: #333;
    .fc-button-primary {
      background: transparent;
      border-color: transparent;
      color: #000;
      font-size: 15px;
      font-weight: 900;
    }
    .fc-header-toolbar {
      position: relative;
      justify-content: center;
      gap: 30px;
      margin-top: 10px;
      margin-bottom: 5px;
      .fc-toolbar-title {
        font-size: 24px;
      }
      .fc-prev-button {
        background: transparent;
        border-color: transparent;
        color: #000;
        font-size: 15px;
        font-weight: 900;
        :hover {
          color: #000 !important;
          background: transparent !important;
        }
        :focus {
          box-shadow: none !important;
          background: "none" !important;
        }
      }
      .fc-next-button {
        background: transparent;
        border-color: transparent;
        color: #000;
        font-size: 15px;
        font-weight: 900;
        :hover {
          color: #000 !important;
          background: transparent !important;
        }
        :focus {
          box-shadow: none !important;
          background: "none" !important;
        }
      }
      .fc-today-button {
        position: absolute;
        right: 1px;
        bottom: 0px;
        font-size: 12px;
        font-weight: 400;
        background: #2c3e50;
        color: #fff;
        cursor: pointer;
      }
    }
    .fc-scroller-harness {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    .fc-col-header {
      background: #176b87;
      height: 3vh;
      .fc-col-header-cell-cushion {
        color: #fff;
        font-size: 15px;
        font-weight: 400;
        line-height: 3vh;
      }
    }
    .fc-scrollgrid-section {
      background: #fff;
    }
    .fc-daygrid-day-top {
      .fc-daygrid-day-number {
        padding: 4px 2px 0px;
        font-size: 12px;
      }
    }
    .fc-daygrid-day-events {
      margin: 0;
      line-height: 1.5;
      font-size: 15px;
    }
    .fc-view-harness {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      overflow: hidden;
    }
    .fc-day-today {
      background: #f1f6f9;
    }
    .fc-event {
      height: 18px !important;
      margin: 1px !important;
      .fc-event-main {
        height: 100% !important;
        line-height: 15px !important;
        padding-left: 0.8vw;
        position: relative;
        ::before {
          position: absolute;
          content: "";
          top: calc(50% - 1.8px);
          left: 8px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #64ccc5;
        }
        .fc-event-main-frame {
          height: 100%;
          .fc-event-title {
            padding-left: 3px;
            font-size: 12px;
          }
        }
      }
    }
    .fc-view-harness {
      box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2) !important;
    }
  }
`;

export const HomeNoticeWrap = styled.div`
  width: 100%;
  background: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 15px;
  margin-bottom: 10px;
  flex-grow: 1;
  h3 {
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #333;
  }
  .notice-wrap {
    .notice-title-wrap {
      width: 100%;
      height: 3.5vh;
      display: grid;
      grid-template-columns: 0.05fr 0.7fr 0.15fr 0.1fr;
      grid-template-rows: 1fr;
      text-align: center;
      background: #176b87;
      color: #fff;
      font-size: 15px;
      line-height: 3.5vh;
      padding: 0 5px 0 10px;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
  }
  .notice-list-wrap {
    background: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
    > ul {
      width: 100%;
      height: 3.5vh;
      display: grid;
      grid-template-columns: 0.05fr 0.7fr 0.15fr 0.1fr;
      grid-template-rows: 1fr;
      text-align: center;
      font-size: 15px;
      line-height: 3.5vh;
      padding: 0 5px 0 10px;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      > li {
        :nth-of-type(2) {
          cursor: pointer;
          :hover {
            text-decoration: underline;
          }
        }
      }
    }
    .important-notice {
      font-weight: 600;
      > li {
        :first-of-type {
          > span {
            background: #ffe7ea;
            font-size: 12px;
            font-weight: 900;
            text-align: center;
            color: #ff5e5e;
            padding: 3px 6px;
            border-radius: 3px;
          }
        }
      }
    }
  }
`;

export const NumberListWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 15px;
  .number-list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    h3 {
      font-size: 21px;
      font-weight: 700;
      color: #333;
    }
    button {
      border: 0;
      background: transparent;
      font-size: 15px;
      color: #333;
      cursor: pointer;
      .save-btn {
        background: #64ccc5;
        padding: 3px 5px;
        font-size: 12px;
        color: #fff;
        border-radius: 3px;
      }
    }
  }
  .number-list-top {
    .main-number-list {
      display: flex;
      gap: 20px;
      > ul {
        width: 100%;
        height: 100%;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        > li {
          height: 33.3%;
          line-height: 2.4;
          > ul {
            display: grid;
            grid-template-columns: 0.7fr 1.3fr;
            grid-template-rows: 1fr;
            font-size: 15px;
            text-align: center;
            > li {
              border-right: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              :first-of-type {
                background: #176b87;
                color: #fff;
              }
              :last-of-type {
                border-right: 0;
              }
              input {
                height: 27px;
                border: 1px solid #ccc;
                padding-left: 6px;
              }
            }
          }
          :last-of-type {
            > ul {
              > li {
                border-bottom: 0;
              }
            }
          }
        }
      }
    }
  }
`;
