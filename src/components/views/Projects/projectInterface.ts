import {ImageDataLike} from "gatsby-plugin-image";

export interface ProjectsDataType {
    allContentfulProjects: {
        nodes:
            [{
                description: string
                image: ImageDataLike
                tags: [{
                    name: string
                }]
                title: string
                url: string[]
            }]

    }
}
