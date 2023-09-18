const Contact = () => {
  return (
    <div className="px-12 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-5 max-w-screen-sm lg:max-w-screen-lg mx-auto">
        <div className="lg:col-span-2 lg:py-12">
          <p className=" text-lg text-color2">
            I&apos;m always curious about new technology, concepts and ideas.
            Feel free to contact me if you have any questions or if you just
            want to say hi.
          </p>

          <div className="mt-8 text-color2">
            <a href="" className="text-2xl font-bold text-color2">
              +47 483 47 323
            </a>

            <address className="mt-2 not-italic ">
              Fullstakk AS , Etterstadsletta 71 B, 0660 Oslo
            </address>
          </div>
        </div>

        <div className="rounded-lg lg:col-span-3 lg:p-12">
          <form action="" className="space-y-2">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-lg border-color2 p-3 text-sm bg-eerie_black_2-500 placeholder-eerie_black-700 focus:outline outline-1 outline-offset-2 outline-color1"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border-color2 p-3 text-sm bg-eerie_black_2-500 placeholder-eerie_black-700 focus:outline outline-1 outline-offset-2 outline-color1"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded-lg border-color2 p-3 text-sm bg-eerie_black_2-500 placeholder-eerie_black-700 focus:outline outline-1 outline-offset-2 outline-color1"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full rounded-lg border-color2 p-3 text-sm bg-eerie_black_2-500 placeholder-eerie_black-700 focus:outline outline-1 outline-offset-2 outline-color1"
                placeholder="Subject"
                type="text"
                id="subject"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>

              <textarea
                className="w-full rounded-lg border-color2 p-3 text-sm bg-eerie_black_2-500 placeholder-eerie_black-700 focus:outline outline-1 outline-offset-2 outline-color1"
                placeholder="Message"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-eerie_black_2-600 px-5 py-3 font-medium text-color1 transition duration-300 ease-in-out focus:outline outline-1 outline-offset-2 outline-color1"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
