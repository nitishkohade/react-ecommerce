import React, { Component } from "react";
import { connect } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => (
    <div className="shop-page">
        <CollectionsOverview />
    </div>
)

export default ShopPage