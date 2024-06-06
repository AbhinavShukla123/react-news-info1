
// import React from 'react';
function Newsnavbar({setCategory}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" ><span className="badge bg-light text-dark fs-5">New Zone</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
         
          <li className="nav-item">
            <div className="nav-link" role="button" onClick={()=>setCategory("technology")} >Technology</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" role="button" onClick={()=>setCategory("business")} >Business</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" role="button" onClick={()=>setCategory("health")} >Health</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" role="button" onClick={()=>setCategory("sports")}>Sports</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" role="button" onClick={()=>setCategory("entertainment")} >Entertainment</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" role="button" onClick={()=>setCategory("science")} >Science</div>
          </li>
          
        </ul>
      </div>
    </div>
    
  </nav>
  </>
  );
}

export default Newsnavbar
