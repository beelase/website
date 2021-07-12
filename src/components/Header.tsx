

export function Header() {
  return (
    <header className="navbar navbar-inverse p-2" id="mu-header">
        <div>  
          <i className="fas fa-envelope fa-xs"> </i>
          <span> contact@beela.se</span>
        </div>
        <div className="mu-header-top-right">
          <a href="https://www.instagram.com/beela.se/"><span className="fab fa-instagram"> </span></a>
          <a href="https://www.linkedin.com/company/beela-se/"> <span className="fab fa-linkedin"></span></a>
        </div>
      </header>
  )
}