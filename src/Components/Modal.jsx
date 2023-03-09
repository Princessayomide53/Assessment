import React from 'react';

const Modal = ({ data, open, onClose }) => {

    const {imgScr, title, desc, Chain, Created, page} = data
    if (!open) return null;
    

    return (
      <div className="flex flex-col justify-center items-center fixed bg-[#7c7979] bg-opacity-30 inset-0 w-full h-screen">
        <div className="absolute top-[28%] left-[14%] lg:top-[28%] lg:left-[31%] xl:top-[28%] xl:left-[31%] 2xl:top-[28%] 2xl:left-[31%] w-full">
          <div className="lg:w-[60%] xl:w-[40%]  w-[75%] fixed md:w-[60%] h-[415px] md:h-96 lg:h-96 rounded-xl p-4 pt-3 bg-white">
            <div className="flex justify-between">
              <h3 className="md:text-xl lg:text-xl text-base sm:text-base font-bold text-black">
                Created {title} on {Created}
              </h3>
              <button
                type="button"
                className="text-2xl font-bold"
                onClick={onClose}
              >
                X
              </button>
            </div>
            <div className="mt-2">
              <center>
                <img src={imgScr} alt="" className="w-56 h-44" />
              </center>
              <p className="mt-5 text-sm lg:text-base md:text-base sm:text-sm">{desc}</p>
            </div>
            <div className=" text-end mt-2">
              <a href={page} target="_blank" rel="noopener noreferrer">
                <button type="button" className="bg-blue-100 rounded-xl px-2 text-blue-500 mr-auto text-end" onClick={onClose}>
                  Purchase item
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Modal;