import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component{

    state = {
        isLoading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({isLoading: false})
        })
    }

    render(){
        const {match} = this.props
        const {isLoading} = this.state
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={
                    (props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
                }/>
                <Route exact path={`${match.path}/:collectionId`} render={
                    (props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />
                }/>
            </div>
            )
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot()
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)