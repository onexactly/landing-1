import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage from "../first-app-png/2896.png" ;
import featureimage2 from "../first-app-png/Instagram.png" ;
import featureimage3 from "../first-app-png/YTB.png" ;

function Feature() {
  return( 
  
  <div id="features">
    <div className="a-container">
        <FeatureBox image={featureimage} title="Development Course"/>
        <FeatureBox image={featureimage2} title="Landing Page Price"/>
        <FeatureBox image={featureimage3} title="Team Working"/>
    </div>
  </div>
  )
}

export default Feature;
