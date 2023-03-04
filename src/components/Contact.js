function Contact(){
    return (
        <section className="footer-container">
        <div className="flexfooter contactme">
          <h2>Contact Me</h2>
        </div>
        <div className="flexfooter phone">
          <i className="fa-solid fa-phone fa-3x" />
          <h3>520-719-9810</h3>
        </div>
        <div className="flexfooter email">
          <i className="fa-regular fa-envelope fa-3x" />
          <a href="mailto:" email="pradogeovana07@gmail.com">
            <h3>Pradogeovana07@gmail.com</h3>
          </a>
        </div>
        <div className="flexfooter github">
          <i className="fa-brands fa-github fa-3x" />
          <a href="https://www.github.com/Pradogeovana07">
            <h3>Github.com</h3>
          </a>
        </div>
      </section>
    )
}

export default Contact