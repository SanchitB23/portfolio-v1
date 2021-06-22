import React from 'react';
import styled from 'styled-components';
import {socialMedia} from '../../../config/constants';
import Side from './index';
import {LayoutProps} from "../Interface";
import Icon from "../../../resources/icons/icons";


const StyledSocial = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  :after {
    content: "";
    height: 9rem;
    width: .2rem;
    background-color: var(--light-slate);
    margin: 0 auto;
  }

  li {
    padding: .5rem 0;
    margin: .25rem 0;
    transition: all .2s;

    :last-of-type {
      margin-bottom: 2rem;
    }

    :last-child a svg {
      height: 3rem;
      fill: var(--orange);
      stroke: transparent;
    }

    :hover {
      transform: translateY(-3px);
    }

    a {
      padding: 1rem;
      margin-bottom: 2rem;

      svg {
        height: 2.5rem;
        width: 2.5rem;
        stroke: var(--orange);
      }
    }
  }
`

const Social: React.FC<LayoutProps> = ({isHome}) => (
    <Side isHome={isHome} orientation="left">
        <StyledSocial>
            {socialMedia &&
            socialMedia.map(({url, name}, i) => (
                <li key={i}>
                    <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                        <Icon name={name}/>
                    </a>
                </li>
            ))}
        </StyledSocial>
    </Side>
);


export default Social;
