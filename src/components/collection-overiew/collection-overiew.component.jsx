import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";


import CollectionPreview from "../preview-collection/collection-preview";

import './collection-overiew.styles.scss';

const CollectionsOverview = ({ collections}) => (

    <div className="collection-overiew">
        {
            collections.map(({id, ...otherCollectionProps })=> (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }

    </div>
);



const mapStateToProps = createStructuredSelector({

    collections: selectCollectionsForPreview

});



export default connect(mapStateToProps)(CollectionsOverview);
