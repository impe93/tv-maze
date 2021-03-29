import {renderHook, RenderHookOptions} from '@testing-library/react-hooks';
import {Container} from 'inversify';
import React, {Fragment} from 'react';
import {RootState} from '../src/redux/store';
import {TestComponentBuilder} from './TestComponentBuilder';

type TestContextConfig<P, R> = {
  callback: (props: P) => R;
  container?: Container;
  initialState?: Partial<RootState>;
};

function withTestContext<P, R>({
  container,
  initialState,
  callback,
}: TestContextConfig<P, R>) {
  const {TestComponent, ...builderOutput} = TestComponentBuilder.fromComponent(
    Fragment,
  )
    .withContainer(container)
    .withState(initialState)
    .build();

  const wrapper = (props?: Record<string, any>) => <TestComponent {...props} />;

  function renderWrappedHook(
    inlineCallback = callback,
    options: RenderHookOptions<P> = {},
  ) {
    return renderHook(inlineCallback, {
      wrapper,
      ...options,
    });
  }

  return {
    ...builderOutput,
    renderWrappedHook,
  };
}

export class TestHookBuilder<P, R> {
  config: TestContextConfig<P, R>;

  static fromHook<P1, R1>(callback?: TestContextConfig<P1, R1>['callback']) {
    return new TestHookBuilder(callback);
  }

  constructor(callback?: TestContextConfig<P, R>['callback']) {
    this.config = {callback};
  }

  withContainer(container: TestContextConfig<P, R>['container']) {
    this.config.container = container;
    return this;
  }

  withState(initialState: TestContextConfig<P, R>['initialState']) {
    this.config.initialState = initialState;
    return this;
  }

  build() {
    return withTestContext(this.config);
  }
}
