const SingleService = () => {
  return (
    <div className=" relative w-full h-full bg-white">
      <div className=" relative w-full h-[100vh] flex flex-row-reverse">
        <div className="w-[50%] h-full p-10 flex items-center justify-center">
          <div className=" w-[300px] h-[200px] bg-blue-500"></div>
        </div>
        <div className="w-[50%] h-full">
          <div>
            <h2>Branding</h2>
          </div>
          <div>
            <p>
              Our approach connects brand and user experience closely. We
              specialize in creating and presenting digital brand identities on
              all platforms. We also provide strategy help and guidelines to
              keep everything consistent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
