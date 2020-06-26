import React from 'react';
import {Link, LinkProps} from 'react-router-dom';

export interface EkpLinkProps extends LinkProps {
  navigateType?: 'none' | 'push' | 'navigate';
}

export const Custom: React.FC<EkpLinkProps> = input => {
  const {children, navigateType, ...rest} = input;

  return (
    <Link
      {...rest}
      to={generateProps({to: input.to, navigateType: navigateType})}
    >
      {children}
    </Link>
  );
};

const generateProps = (input: {
  to: string | any;
  navigateType?: 'none' | 'push' | 'navigate';
}): any => {
  const hash = getHashByType(input.navigateType);

  if (typeof input.to === 'string') {
    return {
      pathname: input.to,
      hash,
    };
  }

  return {
    ...input,
    hash: `${input.to.hash || ''}${hash}`,
  };
};

const getHashByType = (
  type: 'none' | 'push' | 'navigate' | undefined
): string => {
  if (typeof type === 'undefined') {
    return '#ekp-allow-push';
  }

  const block = {
    none: '',
    push: '#ekp-allow-push',
    navigate: '#ekp-allow-navigate',
  };

  return block[type];
};
