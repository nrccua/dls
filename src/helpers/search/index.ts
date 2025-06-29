/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import get from 'lodash/get';
import toString from 'lodash/toString';

export function search<T>(docs: T[], properties: string[], value: string): T[] {
  return docs.filter(doc =>
    properties.some((property): boolean => {
      const currentValue = get(doc, property);
      if (doc !== null && currentValue !== null) {
        return toString(currentValue)
          .toLowerCase()
          .includes(value.trim().toLowerCase());
      }
      return false;
    }),
  );
}

export default search;
