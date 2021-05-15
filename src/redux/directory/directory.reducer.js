import hats from '../../assets/images/hats.jpg'
import jackets from '../../assets/images/jackets.jpg'
import womens from '../../assets/images/womens.jpg'
import sneakers from '../../assets/images/sneakers.jpg'
import mens from '../../assets/images/mens.png'

const INITIAL_STATE = {
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

const DirectoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state
    }
}

export default DirectoryReducer