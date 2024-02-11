import { Provider } from 'react-redux'
import { FC, ReactNode } from 'react'
import { setupStore } from '../config/store'

const store = setupStore()

interface IStoreProvider {
    children?: ReactNode
}

const StoreProvider: FC<IStoreProvider> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
