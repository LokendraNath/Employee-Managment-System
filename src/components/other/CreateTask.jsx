const CreateTask = () => {
  return (
    <div className="bg-[#1a182f] mt-20 px-10 py-7 mx-20 rounded-3xl">
      <form className="flex flex-col items-center">
        <div className="w-full flex justify-between">
          <div>
            <div>
              <h3 className="admin-h3">Task Title</h3>
              <input
                className="admin-input"
                type="text"
                placeholder="Enter The Task"
              />
            </div>
            <div>
              <h3 className="admin-h3">Date</h3>
              <input className="bg-white h-15 w-[500px] px-3 text-black font-semibold text-[17px] rounded-xl mb-5" type="date" />
            </div>
            <div>
              <h3 className="admin-h3">Assign To</h3>
              <input
                className="admin-input"
                type="text"
                placeholder="Employee Name"
              />
            </div>
          </div>
          <div className="mb-5">
            <div>
              <h3 className="admin-h3">Description</h3>
              <textarea
                className="bg-white w-[500px] rounded-xl text-black p-1 text-xl overflow-y-auto [&::-webkit-scrollbar]:hidden"
                name=""
                id=""
                cols={30}
                rows={6}
              ></textarea>
            </div>
            <div className="mt-5">
              <h3 className="admin-h3">Category</h3>
              <input
                className="admin-input mb-1 w-full"
                type="text"
                placeholder="Design, dev, etc"
              />
            </div>
          </div>
        </div>
        <button className="bg-blue-700 py-3 text-2xl rounded-2xl mx-15 w-[500px] ">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
