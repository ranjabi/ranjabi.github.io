const Contact = () => {
  return (
    // mt-24 p-8 md:pt-12 md:px-20 lg:pt-12 lg:px-28
    <div id="contact" className=" bg-secondary text-white ">
      <div className="container pt-12 md:pt-20 pb-8 pl-8">
        <h1 className="text-2xl tracking-widest font-semibold">
          Let's collaborate!
        </h1>
        <ul className="text-lg tracking-wider mt-8 leading-10">
          <li>
            <a href="https://id.linkedin.com/in/fikriranjabi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/ranjabi" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li>
            <a href="https://www.instagram.com/ranjabii/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
        <p className="mt-20 md:mt-16 lg:mt-16">© Fikri Ranjabi 2022</p>
      </div>
    </div>
  );
};

export default Contact;
