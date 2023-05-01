export const Contact = () => { 
    return (
        <div className="auth-container">
      <form>
        <h2>Contact Us</h2>
        <div className="mb-3">
            <p>Enjoying this site? Have an upgrade suggestion? Send us an email!</p>
          <label className="form-label" htmlFor="username">Name:</label>
          <input className="form-control"
            type="name"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">Email:</label>
          <input className="form-control"
            type="email"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">Subject:</label>
          <textarea className="form-control"
            type="emailbody"
            id="emailbody"
          />
        </div>
        <button className="furn-buttons" type="Send">Send Mail</button>
      </form>
    </div> )
}