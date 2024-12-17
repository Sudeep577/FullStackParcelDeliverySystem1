const Parcel = () => {
  return (
    <div className="m-[30px] bg-white p-[20px]">
      <h2 className="font-semibold text-lg">New Parcel</h2>
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="from">From</label>
            <input
              id="from"
              type="text"
              placeholder="Ontario USA"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="to">To</label>
            <input
              id="to"
              type="text"
              placeholder="Michigan, USA"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="senderName">Sender Name</label>
            <input
              id="senderName"
              type="text"
              placeholder="James Doe"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="recipientName">Recipient Name</label>
            <input
              id="recipientName"
              type="text"
              placeholder="Sudeep"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="senderEmail">Sender Email</label>
            <input
              id="senderEmail"
              type="email"
              placeholder="James@example.com"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="recipientEmail">Recipient Email</label>
            <input
              id="recipientEmail"
              type="email"
              placeholder="Sudeep@example.com"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="weight">Weight</label>
            <input
              id="weight"
              type="number"
              placeholder="200g"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="cost">Cost</label>
            <input
              id="cost"
              type="number"
              placeholder="$200"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="note">Note</label>
            <textarea
              id="note"
              placeholder="Perishable goods"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            ></textarea>
          </div>
          <button className="bg-[#1e1e1e] hover:bg-[#333] text-white p-[10px] w-[300px]">
            Update
          </button>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold">Feedback</h2>
          <span>Goods received in good condition</span>
          <span className="text-green-500 text 18px">Delivered</span>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
