import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouterComponent from './router';

describe('RouterComponent', () => {
  test('renders all routes correctly', () => {
    const { getByText } = render(
      <Router>
        <RouterComponent />
      </Router>
    );

    // Check if all routes are rendered correctly
    expect(getByText('App')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByText('Signup')).toBeInTheDocument();
    expect(getByText('Dashboard')).toBeInTheDocument();
    expect(getByText('Profile')).toBeInTheDocument();
    expect(getByText('EditProfile')).toBeInTheDocument();
    expect(getByText('EditPassword')).toBeInTheDocument();
    expect(getByText('EditEmail')).toBeInTheDocument();
    expect(getByText('EditPhone')).toBeInTheDocument();
    expect(getByText('EditAddress')).toBeInTheDocument();
    expect(getByText('NotFound')).toBeInTheDocument();
  });
});