const Blogs = () => {
  return (
    <div className="mb-20">
      <h2 className="text-2xl font-semibold mb-8">
        Welcome to Book House - Your Ultimate Destination for Books.
      </h2>
      <p className="text-[#131313B3] flex flex-col gap-3">
        <span>
          {" "}
          Are you a bookworm looking for your next literary adventure? Do you
          love diving into the pages of a captivating story and getting lost in
          its world? If so, you have come to the right place! Welcome to Bookish
          Reads, where we bring you insightful reviews, recommendations, and
          discussions on a wide range of books from various genres.
        </span>
        <span>
          At Book House, we understand the thrill of discovering a new favorite
          book or revisiting a timeless classic. Thats why we are dedicated to
          providing you with honest, detailed, and thought-provoking reviews to
          help you make informed decisions about your next reading choice.
        </span>
      </p>
      <h2 className="text-2xl mt-20 mb-8 font-semibold">Why Book House?</h2>
      <ul className="flex flex-col gap-3 text-[#131313B3] list-disc ml-10">
        <li>
          <span className="font-bold">Book Reviews:</span>
          Dive into our extensive collection of book reviews, ranging from
          bestsellers to indie gems. Whether you are looking for your next
          page-turner or seeking a critical analysis of a classic, our reviews
          will guide you on your literary journey.
        </li>
        <li>
          <span className="font-bold">Featured Authors:</span>
          Get to know the masterminds behind your favorite books. Our featured
          author profiles shine a spotlight on talented writers, providing
          insights into their inspirations, writing process, and future
          projects.
        </li>
        <li>
          <span className="font-bold">Reading Lists:</span>
          Need inspiration for your next reading adventure? Explore our curated
          reading lists tailored to different themes, moods, and interests. From
          Summer Escapes to Mind-Bending Thrillers, we have got a list for every
          reader.
        </li>
        <li>
          <span className="font-bold">Book Club Discussions:</span>
          Join our virtual book club discussions where we delve into the
          intricacies of a selected book each month. Share your thoughts, engage
          in lively debates, and connect with fellow book enthusiasts from
          around the globe.
        </li>
        <li>
          <span className="font-bold">Writing Tips and Tricks:</span>
          Are you an aspiring writer looking to hone your craft? Check out our
          writing tips and tricks for guidance on everything from character
          development to plot structuring. Let us unlock your full potential as
          a storyteller!
        </li>
      </ul>
    </div>
  );
};

export default Blogs;
