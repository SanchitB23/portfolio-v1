import React from 'react';
import styled from 'styled-components';
import {socialMedia} from '../../../config/constants';
import Side from './index';
import {LayoutProps} from "../Interface";
import Icon from "../../icons/icons";


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
      stroke: transparent;
      fill: var(--light-slate);
    }

    :hover {
      transform: translateY(-3px);

      a svg {
        stroke: var(--orange);
      }

      :last-child a svg {
        fill: var(--orange);
      }
    }

    a {
      padding: 0 1rem;

      svg {
        height: 2rem;
        width: 2rem;
        stroke: var(--light-slate);
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
