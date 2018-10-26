// reference: https://github.com/Microsoft/TypeScript-React-Starter/issues/76#issuecomment-413416913

import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

// noinspection TsLint
console.log("At setupTest.ts, configuring enzyme-adapter");
configure({ adapter: new Adapter() });