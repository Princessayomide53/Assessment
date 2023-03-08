import React, { useState } from "react";
import NFTAdventure from "../Data/NFTAdventure";
import Modal from "./Modal";

function NFTcards() {
  const [selectedData, setSelectedData] = useState({});
  const [modalOpen, setModalOpen] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const getData = (title, imgScr, page, Chain, Created, desc) => {
    const modalOpen = [title, imgScr, page, Created, Chain, desc];
    setModalOpen((item) => [1, ...modalOpen]);
    setShowModal(true);
  };


  return (
    <>
      <div className="">
        <h1 className="text-center text-3xl text-black mt-3 mb-8">
          Trending in Adventure Games
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 m-0 grid-cols-1 mx-auto w-[85%] pl-8 lg:pl-0 md:pl-0 sm:pl-0 ">
        {NFTAdventure.NFTData.map((data, id) => (
          <div className="space-y-10 " key={id}>
            <div className="box lg:w-[85%] md:w-[90%] w-[95%] rounded-md h-[90%] bg-[#cbe7f7] pl-5 pr-5 pt-2 ">
              <div className="mb-8 img ">
                <center>
                  <img src={data.imgScr} alt="" className="rounded-lg" />
                </center>
                <div className="text-base font-bold mt-2 lg:pb-5 md:pb-5 pb-7">
                  <div className="pb-2">{data.title}</div>

                  <div className="flex pt-1 justify-between text-[16px]">
                    <div className="flex flex-col border-2  border-black px-2 rounded-tl-2xl rounded-br-2xl ">
                      <small className="border-b border-black">
                        current bid
                      </small>
                      {data.Bib}
                    </div>
                    <div>{data.stock}</div>
                  </div>

                  <div className="text-end -mt-1">
                    <button
                      className="bg-blue-300 rounded-br-2xl w-24 mr-auto " 

                      onClick={
                        () => {
                          setShowModal(true);
                          setSelectedData(data)
                        } 
                      }
                    >
                      {" "}
                      See more....
                    </button>
                  </div>
                 
                  <Modal
                    open={showModal}
                    onClose={() => {
                      setShowModal(false)
                      setSelectedData({})
                    }
                    }
                      data={selectedData}
                  />
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </>
  );
}

export default NFTcards;
