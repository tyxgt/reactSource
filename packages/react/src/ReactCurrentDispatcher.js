/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

// tyx: ☁️Hook-3 查看resolveDispatcher中ReactCurrentDispatcher是做什么的
import type {Dispatcher} from 'react-reconciler/src/ReactInternalTypes';

/**
 * Keeps track of the current dispatcher.
 */
const ReactCurrentDispatcher = {
  current: (null: null | Dispatcher),
};

export default ReactCurrentDispatcher;
