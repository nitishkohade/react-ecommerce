import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { fetchCollectionsStartAsync, updateCollections } from "../../redux/shop/shop.actions";
import { selectIsCollectionsLoaded, selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component{

    // state = {
    //     isLoading: true
    // }
    // unsubscribeFromSnapshot = null;

    componentDidMount() {
        console.log('mounting')
        const {fetchCollectionsStartAsync} = this.props
        fetchCollectionsStartAsync()
        // const collectionRef = firestore.collection('collections')

        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        //     updateCollections(collectionsMap)
        //     this.setState({isLoading: false})
        // })
    }

    render(){
        console.log('rendering')
        const {match, isCollectionFetching, isCollectionsLoaded} = this.props
        // const {isLoading} = this.state
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={
                    (props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                }/>
                <Route exact path={`${match.path}/:collectionId`} render={
                    (props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
                }/>
            </div>
            )
    }

    componentWillUnmount() {
        // this.unsubscribeFromSnapshot()
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
    // updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)