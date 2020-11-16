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
          <div className='bullets'>
            <h3 className='left'>Managing Director</h3> <h3 className='middle'>&#11044;</h3> <h3 className='right'>Solution Architect</h3>
            <h5 className='left'>Skyward App Company</h5> <h5 className='middle'>&#11044;</h5> <h5 className='right'>Columbia, Maryland</h5>
          </div>
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
