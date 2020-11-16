import { Link, PageProps } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '../utils/icons';
import './index.scss';

export default function Home(props:PageProps) {
  return <div className='root'>
      <header>
        <aside><h3>Nicholas M.T. Elliott</h3></aside>
        <nav>
          <Link to='/me'>About Me</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/site'>This Site</Link>
        </nav>
      </header>
      <main>
			  <div className='above'>
          <img className='LayoutAvatar' src='https://gravatar.com/avatar/468788fd550c4128b0c250566ea8729f?s=64' />
          <h1>Nicholas M.T. Elliott</h1>
        </div>

        <div className='below'>
          <h3>Managing Director &#11044; Solution Architect</h3>
          <h5>Skyward App Company &#11044; Columbia, Maryland</h5>
          <div className='social'>
            <a href='https://twitter.com/lightsidenick'><FontAwesomeIcon icon={icons.faTwitter}/></a>
            <a href='https://www.linkedin.com/in/nicholasmtelliott/'><FontAwesomeIcon icon={icons.faLinkedin}/></a>
            <a href='https://github.com/NicholasMTElliott'><FontAwesomeIcon icon={icons.faGithub}/></a>
          </div>
        </div>
      </main>
      <footer>

      </footer>
  </div>;
}
