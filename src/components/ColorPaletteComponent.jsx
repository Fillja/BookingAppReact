import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './generic-components/Button'

const ColorPaletteComponent = () => {
  return (
    <>
    <section className="colorpalette-section bg-light">
    
      <div className="container">

        <div className="content bg-light">
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
          <p className="danger">Danger</p>
          <p className="success">Success</p>
          <p className="warning">Warning</p>
          <p>Paragraph</p>
          <span>Span</span>
          <div><a href="#" className="link">A-link<i class="fa-solid fa-chevron-right"></i></a></div>
          <div><NavLink to="#" className="link">Navlink<i class="fa-solid fa-chevron-right"></i></NavLink></div>
          <div className="button-div">
            <Button color={"theme"} url={"/"} text={"Home"} icon={<i class="fa-solid fa-arrow-right"></i>} />
            <Button color={"secondary"} url={"/about"} text={"About"} icon={<i class="fa-solid fa-arrow-right"></i>} />
            <Button color={"black"} url={"/contact"} text={"Contact"} icon={<i class="fa-solid fa-arrow-right"></i>} />
          </div>
        </div>

        <div className="content bg-gray">
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
          <p className="danger">Danger</p>
          <p className="success">Success</p>
          <p className="warning">Warning</p>
          <p>Paragraph</p>
          <span>Span</span>
          <div><a href="#" className="link">A-link<i class="fa-solid fa-chevron-right"></i></a></div>
          <div><NavLink to="#" className="link">Navlink<i class="fa-solid fa-chevron-right"></i></NavLink></div>
          <div className="button-div">
            <Button color={"theme"} url={"/"} text={"Home"} icon={<i class="fa-solid fa-arrow-right"></i>} />
            <Button color={"secondary"} url={"/about"} text={"About"} icon={<i class="fa-solid fa-arrow-right"></i>} />
            <Button color={"black"} url={"/contact"} text={"Contact"} icon={<i class="fa-solid fa-arrow-right"></i>} />
          </div>
        </div>

        <div className="content bg-dark">
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
          <p className="danger">Danger</p>
          <p className="success">Success</p>
          <p className="warning">Warning</p>
          <p>Paragraph</p>
          <span>Span</span>
          <div><a href="#" className="link">A-link<i class="fa-solid fa-chevron-right"></i></a></div>
          <div><NavLink to="#" className="link">Navlink<i class="fa-solid fa-chevron-right"></i></NavLink></div>
          <div className="button-div">
            <Button color={"theme"} url={"/"} text={"Home"} icon={<i class="fa-solid fa-arrow-right"></i>} />
            <Button color={"secondary"} url={"/about"} text={"About"} icon={<i class="fa-solid fa-arrow-right"></i>} />
            <Button color={"black"} url={"/contact"} text={"Contact"} icon={<i class="fa-solid fa-arrow-right"></i>} />
          </div>
        </div>

        <div className="content bg-coal">
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
          <p className="danger">Danger</p>
          <p className="success">Success</p>
          <p className="warning">Warning</p>
          <p>Paragraph</p>
          <span>Span</span>
          <div><a href="#" className="link">A-link<i class="fa-solid fa-chevron-right"></i></a></div>
          <div><NavLink to="#" className="link">Navlink<i class="fa-solid fa-chevron-right"></i></NavLink></div>
          <div className="button-div">
            <Button color={"theme"} url={"/"} text={"Home"} icon={<i class="fa-solid fa-arrow-right"></i>} />
            <Button color={"secondary"} url={"/about"} text={"About"} icon={<i class="fa-solid fa-arrow-right"></i>} />
            <Button color={"black"} url={"/contact"} text={"Contact"} icon={<i class="fa-solid fa-arrow-right"></i>} />
          </div>
        </div>

      </div>

    </section>
    </>
  )
}

export default ColorPaletteComponent