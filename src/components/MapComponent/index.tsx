import React from "react";

const index = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          width="100%"
          src="https://maps.google.com/maps?width=1324&height=700&hl=en&q=islamabad&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        />
        <a href="https://sprunkin.com/">Sprunki Incredibox</a>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".mapouter{position:relative;text-align:right;width:100%;height:500px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:500px;}.gmap_iframe {height:500px!important;}",
        }}
      />
    </div>
  );
};

export default index;
