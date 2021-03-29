import {Container} from 'inversify';
import React from 'react';
import {Provider} from 'react-redux';
import {RootState} from '../src/redux/store';
import {ContainerContext} from '../src/services/ioc/ContainerContext';
import configureMockStore from 'redux-mock-store';
import {instance, mock} from 'ts-mockito';
import {IHttpClient, IHttpClientType} from '../src/services/http/HttpClient';

export type TestContextConfig = {
  Component: React.ReactElement | React.ComponentType;
  container?: Container;
  initialState?: Partial<RootState>;
};

export type TestComponentBuilderDependencies = {
  httpClient: IHttpClient;
};

const createMocksDependencies = (): TestComponentBuilderDependencies => ({
  httpClient: mock<IHttpClient>(),
});

const createInstancesDependecies = (
  mocks: TestComponentBuilderDependencies,
) => ({
  httpClient: instance(mocks.httpClient),
});

const createDependencies = () => {
  const mocksDependencies = createMocksDependencies();
  const instancesDependencies = createInstancesDependecies(mocksDependencies);

  return {
    instancesDependencies,
    mocksDependencies,
  };
};

function createTestContainer(container = new Container()) {
  const {instancesDependencies, mocksDependencies} = createDependencies();
  const {httpClient} = instancesDependencies;

  container.bind(IHttpClientType).toConstantValue(httpClient);

  return {container, instancesDependencies, mocksDependencies};
}

function createTestStore(initialState: Partial<RootState>) {
  const mockStore = configureMockStore();
  return mockStore({
    ...initialState,
  });
}

function withTestContext<P>({
  container: userContainer,
  initialState,
  Component,
}: TestContextConfig) {
  const {container, mocksDependencies} = createTestContainer(userContainer);
  const store = createTestStore(initialState ?? {});

  function TestComponent(props?: P) {
    return (
      <ContainerContext.Provider value={container}>
        <Provider store={store}>
          {React.isValidElement(Component) ? (
            Component
          ) : (
            <Component {...props} />
          )}
        </Provider>
      </ContainerContext.Provider>
    );
  }

  return {
    TestComponent,
    dependencies: mocksDependencies,
  };
}

export class TestComponentBuilder {
  config: TestContextConfig;

  static fromComponent<P1>(component: TestContextConfig['Component']) {
    return new TestComponentBuilder(component);
  }

  constructor(Component: TestContextConfig['Component']) {
    this.config = {Component};
  }

  withContainer(container: TestContextConfig['container']) {
    this.config.container = container;
    return this;
  }

  withState(initialState: TestContextConfig['initialState']) {
    this.config.initialState = initialState;
    return this;
  }

  build() {
    return withTestContext(this.config);
  }
}
