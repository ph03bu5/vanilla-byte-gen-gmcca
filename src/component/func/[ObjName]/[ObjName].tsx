/*
 * Copyright (c) $YYYY$ GM Global Technology Operations LLC. All rights reserved.
 * This information is confidential and proprietary to GM Global Technology
 * Operations LLC and may not be used, modified, copied or distributed.
 */

import React from 'react';

interface $ObjName$Props {
  [key: string]: any;
}

const $ObjName$ = ({ ...rest }: $ObjName$Props) => {
  /* ==========================================================
  Part 1: Global States - 전역 상태 연동 hook 위치
  ========================================================== */

  /* ==========================================================
  Part 2: Local States - 컴포넌트 상태 hook 위치
  ========================================================== */

  /* ==========================================================
  Part 3: React Hooks - 기타 React hook 위치
  ========================================================== */

  /* ==========================================================
  Part 4: Event Handling - 이벤트 핸들러 위치
  ========================================================== */

  /* ==========================================================
  Part 5: Internal processes and components - JSX 생성에 필요한 값 계산
  ========================================================== */

  /* ==========================================================
  Part 6: Returning JSX
  ========================================================== */
  return (
    <GmPage>
      <p>Hello $ObjName$ !!</p>
    </GmPage>
  );
};

$ObjName$.displayName = '$ObjName$';

export default $ObjName$;
