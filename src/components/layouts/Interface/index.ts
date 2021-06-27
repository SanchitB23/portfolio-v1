import {RouteComponentProps} from "@reach/router";

export interface LayoutProps extends RouteComponentProps {
    isHome?: boolean
    title?: string,
}
