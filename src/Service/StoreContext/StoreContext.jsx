import { createContext } from "react";

const { Provider: StoreProvider, Consumer: StoreComsumer } = createContext();

export { StoreProvider, StoreComsumer };
