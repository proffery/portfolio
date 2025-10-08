import { ComponentType } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/services/store'

const withRedux = <T,>(WrappedComponent: ComponentType<T>) => {
  return (props: T & any) => {
    return (
      <Provider store={store}>
        <WrappedComponent {...props} />
      </Provider>
    )
  }
}

export default withRedux
