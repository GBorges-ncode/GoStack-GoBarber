import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// The type was converted from interface, because the interface has no parameter to overwrite
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Loading...' : children}
  </Container>
);

export default Button;
