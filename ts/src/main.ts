import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
// import { twoSum } from "./task/twoSum_01.ts";
// import { containsDuplicate } from "./task/containsDuplicate_217.ts";

// import { missingNumber } from "./task/missingNumber_268.ts";

// import { findDisappearedNumbers } from "./task/findDisappearedNumbers_448.ts";

import { nextPermutation } from "./task/nextPermutation_31";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(containsDuplicate([1, 2, 3, 1]));

console.log(nextPermutation([3, 2, 1]));
setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
