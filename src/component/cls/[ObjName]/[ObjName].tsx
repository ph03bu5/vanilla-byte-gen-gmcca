import React from 'react';

interface $ObjName$Props {
  [key: string]: any;
}

interface $ObjName$States {
  name: string;
  [key: string]: any;
}

export default class ObjName extends React.Component<$ObjName$Props, $ObjName$States> {
  /* ==========================================================
  Part 1: Static properties and methods - 정적 속성과 정적 메소드
  ========================================================== */
  /**
   * 정적 속성 혹은 상수값
   * (불필요시 삭제)
   */
  private static instance: ObjName;

  /**
   * 정적 메소드 - 컴포넌트 객체 생성과 상관 없이 컴포넌트에 관계된 유틸리티성 메소드 구현
   * (불필요시 삭제)
   */
  public static getInstance() {
    if (typeof this.instance === 'undefined') {
      this.instance = new ObjName({});
    }

    return this.instance;
  }

  /* ==========================================================
  Part 2: constructor - 생성자와 초기 State
  ========================================================== */
  /**
   * 생성자
   * (내용 구현 없을시 삭제)
   */
  constructor(props: $ObjName$Props) {
    super(props);
    console.debug('created $ObjName$ component');
  }

  state: $ObjName$States = {
    name: '$ObjName$',
  };

  /* ==========================================================
  Part 3: React lifecycle method overrides - 리액트 생명주기 메소드
  ========================================================== */
  /**
   * state나 props가 바뀌면 호출됩니다.
   * (불필요시 메소드 전체 삭제)
   */
  getChildContext() {
    console.debug('state or props of $ObjName$ has been changed');
  }

  /**
   * 컴포넌트가 화면에 생성되면 호출됩니다.
   * (불필요시 메소드 전체 삭제)
   */
  componentDidMount() {
    console.debug('$ObjName$ component has been created on screen');
  }

  /**
   * props, state, context 중에서 변경되었을 때 특정한 조건의 경우에는 컴포넌트를 업데이트하지 않도록 구현
   * (불필요시 메소드 전체 삭제)
   * @param nextProps
   * @param nextState
   * @param nextContext
   */
  shouldComponentUpdate(nextProps: Readonly<$ObjName$Props>, nextState: Readonly<$ObjName$States>, nextContext: any): boolean {
    return true;
  }

  /**
   * 컴포넌트 업데이트가 일어난 직후에 호출됩니다.
   * (불필요시 메소드 전체 삭제)
   * @param prevProps
   * @param prevState
   * @param snapshot
   */
  componentDidUpdate(prevProps: Readonly<$ObjName$Props>, prevState: Readonly<$ObjName$States>, snapshot?: any) {
    console.debug('$ObjName$ component has been updated');
  }

  /**
   * 컴포넌트가 화면에서 없어지기 직전에 호출됩니다.
   * (불필요시 메소드 전체 삭제)
   */
  componentWillUnmount() {
    console.debug('$ObjName$ component will be removed from screen');
  }

  /* ==========================================================
  Part 4-1: 이벤트 핸들러 중 handle로 시작하는 메소드 (ref를 통한 외부 호출 메소드도 여기 위치)
  ========================================================== */
  private handleSomething() {
    console.debug('handling something in $ObjName$');
  }

  /* ==========================================================
  Part 4-2: 이벤트 핸들러 중 on으로 시작하는 메소드
  ========================================================== */
  private onSomething() {
    console.debug('something happened in $ObjName$');
  }

  /* ==========================================================
  Part 5: getter 메소드
  ========================================================== */
  public getSomething() {
    return 'something';
  }

  /* ==========================================================
  Part 6: 서브 렌더링 메소드
  ========================================================== */
  private renderHello() {
    return <p>Hello {this.state.name} !!</p>;
  }

  /* ==========================================================
  Part 7: 메인 렌더링 메소드
  ========================================================== */
  render() {
    const { children, ...rest } = this.props;

    return (
      <div className="$obj-name$" {...rest}>
        {this.renderHello()}
        <span>{children}</span>
      </div>
    );
  }
}
