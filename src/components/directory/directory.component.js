import React, {Component} from 'react'
import MenuItem from '../menu-item/menu-item.component'
import "./directory.styles.scss"


class Directory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sections: [
                {
                    title: "hats",
                    imageUrl: "hats.jpg",
                    id: 1,
                    linkUrl: "hats"
                },
                {
                    title: "jackets",
                    imageUrl: "jackets.jpg",
                    id: 2,
                    linkUrl: ""
                },
                {
                    title: "sneakers",
                    imageUrl: "sneakers.jpg",                    
                    id: 3,
                    linkUrl: ""
                },
                {
                    title: "womens",
                    imageUrl: "womens.jpg",
                    size: "large",
                    id: 4,
                    linkUrl: ""
                },
                {
                    title: "mens",
                    imageUrl: "mens.png",
                    size: "large",
                    id: 5,
                    linkUrl: ""
                }

            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(
                        section => (
                            <MenuItem 
                                {...section}
                                key={section.id}
                            />
                        )
                    )
                }
                </div>
        )
    }
}

export default Directory