import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white sm:bg-Green-200 text-black w-full h-screen">
      <section className="w-[375px] md:w-[1440px] bg-Green-200 px-1 py-2 sm:mx-auto">
        <div className="bg-White rounded-2xl my-4 mx-3 py-3 px-4">
          <h1 className="text-3xl font-bold mt-5 mb-5">Contact Us</h1>
          <form action="">
            <div className="md:flex content-between">
              <label className="mb-2 flex flex-col md:w-full sm:mr-2">
                <span className="text-gray-700 font-[16px] mb-2">
                  First Name
                  <span className="ml-2 text-Green-600">*</span>
                </span>
                <input
                  type="text"
                  name="firstname"
                  className="text-black border border-gray-300 w-full px-3 py-2 mb-6 rounded-md disabled:border-Red"
                />
              </label>
              <label className="mb-2 flex flex-col md:w-full sm:ml-2">
                <span className="text-gray-700 font-[16px] mb-2">
                  Last Name
                  <span className="ml-2 text-Green-600">*</span>
                </span>
                <input
                  type="text"
                  name="lastname"
                  className="text-black border border-gray-300 w-full px-3 py-2 mb-6 rounded-md disabled:border-Red"
                />
              </label>
            </div>
            <label className="mb-2 flex flex-col">
              <span className="text-gray-700 font-[16px] mb-2">
                Email Address
                <span className="ml-2 text-Green-600">*</span>
              </span>
              <input
                type="email"
                name="email"
                className="text-black border border-gray-300 w-full px-3 py-2 mb-6 rounded-md disabled:border-Red"
              />
            </label>
            <p className="font-[16px] mb-2">
              Query Type
              <span className="ml-2 text-Green-600">*</span>
            </p>
            <div className="md:flex content-between">
              <div className="w-full h-12 border border-gray-300 rounded-lg px-5 py-3 mb-6 sm:mr-2">
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
              <div className="w-full h-12 border border-gray-300 rounded-lg px-5 py-3 mb-6 sm:ml-2">
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
            </div>
            <label className="mb-2 flex flex-col">
              <span className="text-gray-700 font-[16px] mb-2">
                Message
                <span className="ml-2 text-Green-600">*</span>
              </span>
              <input
                type="textarea"
                name="message"
                className="h-48 text-black border border-gray-300 w-full px-3 py-2 mb-4 rounded-md disabled:border-Red"
              />
            </label>
            <div className="form-group form-check flex">
              <div className="h-12 w-6 content-center">
                <input
                  name="acceptTerms"
                  type="checkbox"
                  id="acceptTerms"
                  className=""
                />
              </div>
              <div className="h-12 w-full px-3 content-center">
                <label
                  htmlFor="acceptTerms"
                  className="form-check-label font-[16px]"
                >
                  I consent to being contacted by the team
                  <span className="ml-1 text-Green-600">*</span>
                </label>
              </div>
            </div>
            <div>
              <button className="bg-Green-600 text-Green-200 rounded-lg w-full h-[60px] mt-10">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="text-center font-[11px]">
        <span>Challenge by </span>
        <Link
          className="font-bold"
          href={"https://www.frontendmentor.io?ref=challenge"}
          target="_blank"
        >
          Frontend Mentor
        </Link>
        <span> Code by </span>
        <Link className="text-Violet-blue font-bold" href={"#"}>
          José A. Suárez
        </Link>
      </div>
    </main>
  );
}
