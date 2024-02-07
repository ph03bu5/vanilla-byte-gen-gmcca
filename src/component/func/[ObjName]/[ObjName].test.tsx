import { render } from '@testing-library/react';

import $ObjName$ from './$ObjName$';

describe('$ObjName$', () => {
  it('has texts', () => {
    const result = render(<$ObjName$ />);

    result.getByText('Hello $ObjName$ !!');
  });
});
