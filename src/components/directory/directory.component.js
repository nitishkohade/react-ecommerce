import React, {Component} from 'react'
import MenuItem from '../menu-item/menu-item.component'
import hats from '../../assets/images/hats.jpg'
import jackets from '../../assets/images/jackets.jpg'
import womens from '../../assets/images/womens.jpg'
import sneakers from '../../assets/images/sneakers.jpg'
import mens from '../../assets/images/mens.png'

import "./directory.styles.scss"


class Directory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sections: [
                {
                    title: "hats",
                    imageUrl: hats,
                    id: 1,
                    linkUrl: "hats"
                },
                {
                    title: "jackets",
                    imageUrl: jackets,
                    id: 2,
                    linkUrl: ""
                },
                {
                    title: "sneakers",
                    imageUrl: sneakers,                    
                    id: 3,
                    linkUrl: ""
                },
                {
                    title: "womens",
                    imageUrl: womens,
                    size: "large",
                    id: 4,
                    linkUrl: ""
                },
                {
                    title: "mens",
                    imageUrl: mens,
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