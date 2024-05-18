import React, { lazy, Suspense } from 'react';
import { Spin } from "antd";

const retryLoadComponent = (fn, retriesLeft = 5, interval = 1000) =>
  new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }

          retryLoadComponent(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });

const Home = lazy(() => retryLoadComponent(() => import('@/pages/Home/index.jsx')));
const Test = lazy(() => retryLoadComponent(() => import('@/pages/Test/index.jsx')));

export const Paths = {
  Home: '/',
  Test: '/test',
  Rest: '*',
};

export const Pages = {
  Home,
  Test
};

export const RoutingWrapper = ({ component: Component, ...rest }) => (
  <Suspense fallback={<Spin spinning={true} style={{ minHeight: '100vh' }} />}>
    <Component {...rest} />
  </Suspense>
);
