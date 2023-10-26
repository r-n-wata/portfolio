import Line from "../atoms/Line";

function Contact() {
  return (
    <div className="w-[95%] ml-24 mobile:mx-0 mobile:w-full">
      <Line />
      <section className=" my-32 mb-52 mobile:my-20" id="contact">
        <div>
          <h2 className="text-4xl text-orange-600 font-semibold mobile:text-3xl mobile:-mb-3">
            Contact
          </h2>
          <Line style="justify-start flex-col" />
        </div>

        <div className="flex mobile:flex-col">
          <section className="w-1/2 mobile:w-full">
            <p className=" mt-10 text-3xl w-3/4 mobile:text-2xl mobile:w-full mobile:mb-10 mobile:border-l-4 mobile:pl-4 mobile:mt-2">
              You have a project in mind? Let's talk!
              <br /> Drop me a message and I will get back to you as soon as
              possible.
            </p>
          </section>

          <section className="border-l-4 w-1/2 pl-14 pt-8 mobile:border-l-0 mobile:w-full mobile:pl-0 mobile:pt-2">
            <form
              action=""
              className="flex flex-col text-xl w-3/4 mobile:w-full mobile:text-lg"
            >
              <label htmlFor="name" className="mb-2">
                Name
              </label>
              <input
                type="text"
                name=""
                id="name"
                className="mb-6 bg-gray-700 rounded-md h-10 px-4 py-2"
              />
              <label htmlFor="email" className="mb-2">
                Email
              </label>
              <input
                type="email"
                name=""
                id="email"
                className="mb-6 bg-gray-700 rounded-md h-10 px-4 py-2"
              />
              <label htmlFor="message" className="mb-2">
                Message
              </label>
              <textarea
                name=""
                id="message"
                cols={30}
                rows={10}
                className="bg-gray-700 rounded-md px-4 py-2"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-600 w-24 py-2 rounded-lg mt-10 hover:bg-orange-500 px-4"
              >
                Send
              </button>
            </form>
          </section>
        </div>
      </section>

      <Line />
    </div>
  );
}

export default Contact;
