import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-black w-full h-screen">
      <section className="w-[375px] bg-Green-200 px-1 py-2">
        <div className="bg-White rounded-2xl my-3 mx-2 py-3 px-3">
          <h1 className="text-3xl font-bold mt-5 mb-5">Contact Us</h1>
          <form action="">
            <label className="mb-2">
              <span className="text-gray-700 flex flex-col font-semibold mb-2">
                First Name
              </span>
              <input
                type="text"
                name="firstname"
                className="text-black border border-gray-300 w-full px-3 py-2 mb-6 rounded-md disabled:border-Red"
              />
            </label>
            <label className="mb-2">
              <span className="text-gray-700 flex flex-col font-semibold mb-2">
                Last Name
              </span>
              <input
                type="text"
                name="lastname"
                className="text-black border border-gray-300 w-full px-3 py-2 mb-6 rounded-md disabled:border-Red"
              />
            </label>
            <label className="mb-2">
              <span className="text-gray-700 flex flex-col font-semibold mb-2">
                Email Address
              </span>
              <input
                type="email"
                name="email"
                className="text-black border border-gray-300 w-full px-3 py-2 mb-6 rounded-md disabled:border-Red"
              />
            </label>
            <p className="font-semibold mb-2">Query Type</p>
            <div className="w-full h-12 border border-gray-300 rounded-lg px-5 py-3 mb-6">
              <input
                type="radio"
                name="topping"
                value="General Enquiry"
                id="General_Enquiry"
                // checked={selectedTopping === "Regular"}
                // onChange={(e) => setSelectedTopping(e.target.value)}
              />
              <label className="ml-2" htmlFor="General_Enquiry">
                General Enquiry
              </label>
            </div>
            <div className="w-full h-12 border border-gray-300 rounded-lg px-5 py-3 mb-6">
              <input
                type="radio"
                name="topping"
                value="Support Request"
                id="Support_Request"
                // checked={selectedTopping === "Regular"}
                // onChange={(e) => setSelectedTopping(e.target.value)}
              />
              <label className="ml-2" htmlFor="Support_Request">
                Support Request
              </label>
            </div>
            <label className="mb-2">
              <span className="text-gray-700 flex flex-col font-semibold mb-2">
                Message
              </span>
              <input
                type="textarea"
                name="message"
                className="h-48 text-black border border-gray-300 w-full px-3 py-2 mb-4 rounded-md disabled:border-Red"
              />
            </label>
            <div className="form-group form-check">
              <input
                name="acceptTerms"
                type="checkbox"
                id="acceptTerms"
                className=""
              />
              <label htmlFor="acceptTerms" className="form-check-label ml-2">
                I consent to being contacted by the team
              </label>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
