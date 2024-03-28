import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub, FaSquareFacebook } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse items-center gap-12 ">
        <div className="text-left lg:text-left lg:w-1/2 lg:ml-6">
          <h1 className="text-5xl font-bold">Contact Us!</h1>
          <p className="py-6">
            We give priority on our every member and we are hardly try for response our all messages as soon as possible. Fell free to communicate with us.
          </p>
          <div className="flex flex-col gap-2">
            <span> <span className="font-semibold">Address:</span> Pallabi Mirpur-12 Dhaka 1216</span>
            <span> <span className="font-semibold">Phone:</span> +088-01971212616</span>
            <span> <span className="font-semibold">Website:</span> www.book-house.org</span>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mt-14 mb-4">Social Connect</h4>
            <div className="flex items-center  gap-5 "> 
                <span className="text-3xl"><FaSquareFacebook /></span>
                <span className="text-3xl"><FaLinkedin /></span>
                <span className="text-3xl"><FaTwitter /></span>
                <span className="text-3xl"><FaGithub /></span>
            </div>
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              {/* <input
                type="text"
                placeholder="your message"
                className="input input-bordered"
                required
              /> */}
              <textarea name="" id="" cols="30" rows="4" className="border border-[#13131326] rounded-lg pl-4 pt-2" placeholder="you message"></textarea>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Don't forget to mention your address!
                </a>
              </label>
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
