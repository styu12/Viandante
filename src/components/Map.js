// import React from "react";
// import { RenderAfterNavermapsLoaded, Map as NaverMap } from "react-naver-maps";

// const Map = () => {
//   return (
//     <RenderAfterNavermapsLoaded
//       ncpClientId={"lzvjn9drae"}
//       error={<p>Maps Load Error</p>}
//       loading={<p>Maps Loading...</p>}
//     >
//       <NaverMap
//         id={"map"}
//         mapDivId={"react-naver-map"} // default name
//         style={{
//           width: "100%",
//           height: "400px",
//         }}
//         defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
//         defaultZoom={10}
//       />
//     </RenderAfterNavermapsLoaded>
//   );
// };

// export default Map;

import React from "react";
import Loadable from "react-loadable";
import loadJs from "load-js";
import { Map } from "react-naver-maps";

const MyMap = () => {
  return (
    <Map
      center={window.naver.maps.LatLng(37.3595704, 127.105399)}
      style={{ width: "100%", height: "400px" }}
    />
  );
};

const NaverMapLoadable = Loadable({
  loader: () =>
    loadJs(
      `https://openapi.map.naver.com/openapi/v3/maps.js?cnpClientId=lzvjn9drae&`
    ).then(() => window.naver.maps),

  render(navermaps, props) {
    return <MyMap {...props} />;
  },

  loading(props) {
    if (props.error) {
      return <div>Error!</div>;
    } else if (props.pastDelay) {
      return <div>Loading...</div>;
    } else {
      return null;
    }
  },
});

export default NaverMapLoadable;
