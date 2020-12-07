import React from 'react'
import Navbar from '../Navbar/index'
import {HeroContainer} from './HeroElements'
function index() {
    return (
      <HeroContainer>
          <Navbar/>
          <HeroContent>
              <HeroItems>
                <HeroH1>
                    Greatest Pizza Ever
                </HeroH1>
                <HeroP>
                    Ready in 60 seconds
                </HeroP>
                <HeroBtn>
                    
                </HeroBtn>
              </HeroItems>
          </HeroContent>
      </HeroContainer>
    )
}

export default index
