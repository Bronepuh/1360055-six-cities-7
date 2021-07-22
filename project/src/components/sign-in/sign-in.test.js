import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import SignIn from './sign-in';
import { AuthorizationStatus } from '../../const';

const mockStore = configureStore({});
const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.NO_AUTH },
});

describe('Component: SignIn', () => {
  it('should render "SignIn" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login/');

    render(
      <Provider store={store}>
        <Router history={history}>
          <SignIn />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('email'), 'keks');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/keks/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
