import React, { PropTypes } from 'react';

const ProgressBar = ({
  width,
  height,
  barWidth,
  barHeight,
  translate,
  onClick,
  children
}, { color }) => {
  const diff = (height - barHeight) / 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <g onClick={onClick}>
        {/* A rect to expand the area of clicking */}
        <rect
          x={height / 2}
          y='0'
          width={barWidth}
          height={height}
          opacity='0'
        />
        <rect
          x={height / 2}
          y={diff}
          width={barWidth}
          height={barHeight}
          fill="#E0E0E0" rx="2" ry="2"
        />
        <rect
          x={height / 2}
          y={diff}
          width={translate}
          height={barHeight}
          fill={`${color}`} rx="2" ry="2"
        />
      </g>
      { children }
    </svg>
  );
};
ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  barHeight: PropTypes.number.isRequired,
  translate: PropTypes.number.isRequired,
  onClick: PropTypes.func
};
ProgressBar.contextTypes = {
  color: PropTypes.string
};
export default ProgressBar;
