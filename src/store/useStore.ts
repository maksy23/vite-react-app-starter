import type { Store } from 'easy-peasy'
import { createStore, createTypedHooks } from 'easy-peasy'

import { type WeatherModel, weatherModel } from './models/weatherModel'

export interface StoreModel {
  weather: WeatherModel
}

const model: StoreModel = {
  weather: weatherModel(),
}

// Create the store
const store: Store<StoreModel> = createStore(model)

// Create typed hooks
const typedHooks = createTypedHooks<StoreModel>()

// Export the typed hooks
// Use these instead of the hooks from the easy-peasy package in components
export const UseStoreActions = typedHooks.useStoreActions
export const UseStoreState = typedHooks.useStoreState

// Export the store as default
export default store
