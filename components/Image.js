import React from 'react';

function LazyComponent(props) {
  return <img className={props.extraClasses} src={props.src} alt={props.alt} />;
}

export default LazyComponent;