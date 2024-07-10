import { AuthParamList } from "./AuthStack";
import { OnboardingStackParamList } from "./OnboardingStack";
import { RouteParamList } from "./Router";

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends OnboardingStackParamList,
        RouteParamList,
        AuthParamList {}
  }
}
