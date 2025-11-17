import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { RootLayout } from '@/layouts/RootLayout';

const HomePage = lazy(() => import('@/pages/Home'));
const VehicleDetailPage = lazy(() => import('@/pages/VehicleDetail'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

/**
 * @router AppRouter
 * @summary Main application routing configuration with lazy loading
 * and hierarchical layouts.
 * @type router-configuration
 * @category navigation
 *
 * @features
 * - Lazy loading of pages for optimization
 * - Hierarchical layouts for consistent structure
 * - Loading states for better UX
 * - Public routes (no authentication)
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner size="lg" />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'vehicle/:id',
        element: (
          <Suspense fallback={<LoadingSpinner size="lg" />}>
            <VehicleDetailPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingSpinner size="lg" />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

/**
 * @component AppRouter
 * @summary Router provider component that wraps the entire application
 * with routing capabilities.
 */
export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
