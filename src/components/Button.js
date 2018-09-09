import { css, cx } from 'emotion';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const button = css({
  backgroundColor: 'white',
  borderRadius: '10rem',
  color: 'rgb(45, 45, 45)',
  display: 'inline-block',
  fontSize: '1rem',
  fontWeight: 600,
  padding: '0.25rem 1rem',
  textDecoration: 'none',
  transition: 'all 125ms ease-in-out',

  '& + &': {
    marginLeft: '1rem'
  },

  '&:hover, &:focus': {
    boxShadow: '0 0 0 0.25rem rgba(255, 255, 255, 0.2)',
    color: 'rgb(30, 130, 230)'
  },

  '&:active': {
    boxShadow: 'none',
    transform: 'scale(0.95)'
  }
});

const Button = ({ children, className, href, to, ...rest }) =>
  to ? (
    <Link className={cx(button, className)} to={to} tabIndex={0} role="button" {...rest}>
      {children}
    </Link>
  ) : (
    <a className={cx(button, className)} href={href} tabIndex={0} role="button" {...rest}>
      {children}
    </a>
  );

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      type: PropTypes.string.isRequired
    })
  ])
};

export default Button;
