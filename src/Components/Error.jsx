import React from "react";

import ErrorStyles from "../ComponentsCSS/Error.module.css"

const Error = () => {
   return (
      <div className={`${ErrorStyles.container}`}>
        <div className={`${ErrorStyles.error_field}`}>
            <p className={`${ErrorStyles.error_text}`}>Please fill in all fields and choose skill</p>
        </div>
      </div>
   )
}

export default Error