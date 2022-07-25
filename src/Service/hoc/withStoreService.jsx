import { StoreComsumer } from "../StoreContext";

const withStoreService = () => (Wrapper) => {
  return (props) => {
    return (
      <StoreComsumer>
        {(storeService) => {
          return <Wrapper {...props} storeService={storeService} />;
        }}
      </StoreComsumer>
    );
  };
};

export default withStoreService;
