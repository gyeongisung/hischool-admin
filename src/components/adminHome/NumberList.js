import React, { useEffect, useState } from "react";
import { NumberListWrap } from "../../styles/AdminHomeStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { SaveNumverModal } from "../Modal";
import { getNumberList } from "../../api/adminHomeAxios";

const NumberList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [numberList, setNumberList] = useState([]);

  const handleEditNumber = () => {
    if (editMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  const handleSaveNumber = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    getNumberList(setNumberList);
  }, []);

  return (
    <>
      {modalOpen && (
        <SaveNumverModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setEditMode={setEditMode}
          numberList={numberList}
        />
      )}
      <NumberListWrap>
        <div className="number-list-header">
          <h3>교내 비상연락망</h3>
          <button>
            {editMode ? (
              <span className="save-btn" onClick={handleSaveNumber}>
                저장
              </span>
            ) : (
              <FontAwesomeIcon
                icon={faPencil}
                className="icon-arrow"
                onClick={handleEditNumber}
              />
            )}
          </button>
        </div>
        <div className="number-list-top">
          <div className="main-number-list">
            <ul>
              <li>
                <ul>
                  <li>행정실</li>
                  <li>
                    {editMode ? (
                      <input
                        type="text"
                        placeholder="행정실 번호"
                        value={numberList.admNum}
                        onChange={e =>
                          setNumberList({
                            ...numberList,
                            admNum: e.target.value,
                          })
                        }
                      />
                    ) : (
                      numberList.admNum
                    )}
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>교무실</li>
                  <li>
                    {editMode ? (
                      <input
                        type="text"
                        placeholder="교무실 번호"
                        value={numberList.tcNum}
                        onChange={e =>
                          setNumberList({
                            ...numberList,
                            tcNum: e.target.value,
                          })
                        }
                      />
                    ) : (
                      numberList.tcNum
                    )}
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>교장실</li>
                  <li>
                    {editMode ? (
                      <input
                        type="text"
                        placeholder="교장실 번호"
                        value={numberList.prcpNum}
                        onChange={e =>
                          setNumberList({
                            ...numberList,
                            prcpNum: e.target.value,
                          })
                        }
                      />
                    ) : (
                      numberList.prcpNum
                    )}
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <ul>
                  <li>관리실</li>
                  <li>
                    {editMode ? (
                      <input
                        type="text"
                        placeholder="관리실 번호"
                        value={numberList.mainNum}
                        onChange={e =>
                          setNumberList({
                            ...numberList,
                            mainNum: e.target.value,
                          })
                        }
                      />
                    ) : (
                      numberList.mainNum
                    )}
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>기계실</li>
                  <li>
                    {editMode ? (
                      <input
                        type="text"
                        placeholder="기계실 번호"
                        value={numberList.machineNum}
                        onChange={e =>
                          setNumberList({
                            ...numberList,
                            machineNum: e.target.value,
                          })
                        }
                      />
                    ) : (
                      numberList.machineNum
                    )}
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Fax</li>
                  <li>
                    {editMode ? (
                      <input
                        type="text"
                        placeholder="팩스 번호"
                        value={numberList.faxNum}
                        onChange={e =>
                          setNumberList({
                            ...numberList,
                            faxNum: e.target.value,
                          })
                        }
                      />
                    ) : (
                      numberList.faxNum
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </NumberListWrap>
    </>
  );
};

export default NumberList;
