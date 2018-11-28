import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Image = styled.Image`
  border-radius: ${props => (props.size === "sm" ? "20px" : "40px")};
  height: ${props => (props.size === "sm" ? "40px" : "80px")};
  width: ${props => (props.size === "sm" ? "40px" : "80px")};
`;

const Avatar = ({ size = "sm", source }) => (
  <Image size={size} source={source} resizeMode="cover" />
);

Avatar.propTypes = {
  size: PropTypes.oneOf(["sm", "lg"]),
  source: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

export default Avatar;
