import React from "react";

const ModalProduct = ({ modalOpen, setModalOpen, product }) => {
  return (
    <div
      className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${modalOpen ? "block" : "hidden"}`}
    >
      <div
        className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
      >
        <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
          {product.title}
        </h3>
        <span
          className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary"
        ></span>
        <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
          {product.description}
        </p>

        <div className="pt-6 border-t border-slate-100">
          <button
            onClick={() => setModalOpen(false)}
            className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
