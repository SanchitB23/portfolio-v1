import React from 'react';
import styled from 'styled-components';
import {email} from '../../../config/constants';
import Side from './index';
import {LayoutProps} from "../Interface";


const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: 1.3rem;
    line-height: var(--fz-lg);
    letter-spacing: 0.1rem;
    writing-mode: vertical-rl;
    color: var(--light-slate);
    &:hover,
    &:focus {
      color: var(--orange);
      transform: translateY(-3px);
    }
  }
`;

const Email: React.FC<LayoutProps> = ({isHome}) => (
    <Side isHome={isHome} orientation="right">
        <StyledLinkWrapper>
            <a href={`mailto:${email}`}>{email}</a>
        </StyledLinkWrapper>
    </Side>
);

export default Email;
