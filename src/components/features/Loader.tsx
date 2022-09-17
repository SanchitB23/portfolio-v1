import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import styled from "styled-components";
import LogoLoader from "../icons/LogoLoader";

interface LoaderProps {
    finishLoading: () => void
}

const Loader: React.FC<LoaderProps> = ({finishLoading}) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        const loaderAnimationTimeOut = setTimeout(() => finishLoading(), 1000)
        return () => {
            clearTimeout(timeout)
            clearTimeout(loaderAnimationTimeOut)
        };
    }, [finishLoading])

    return (
        <div className="loader">
            <Helmet bodyAttributes={{class: `hidden`}}/>
            <LogoWrapper className="loader__logo-wrapper" isMounted={isMounted}>
                <LogoLoader/>
            </LogoWrapper>
        </div>
    );
};
const LogoWrapper = styled.div<{ isMounted: boolean }>`
  opacity: ${({isMounted}) => (isMounted ? 1 : 0)};
`
export default Loader;
