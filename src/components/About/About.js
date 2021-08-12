import aboutStyles from './about.module.css';

const About = () => {
  // set the title of the page
  document.title = "Technify - About Us";

  return (
    <div className="container">
      <h4 className="display-4 text-center fw-bold"> About Us</h4>

      <div className="my-4">
        <p className="display-6 text-center text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta obcaecati error placeat fuga odio ab.</p>
      </div>

    </div>
  );
}
 
export default About;