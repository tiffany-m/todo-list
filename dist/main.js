/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProjectToDisplay: () => (/* binding */ addNewProjectToDisplay),\n/* harmony export */   clearModal: () => (/* binding */ clearModal),\n/* harmony export */   findValueSelectedRadioBtn: () => (/* binding */ findValueSelectedRadioBtn)\n/* harmony export */ });\nfunction findValueSelectedRadioBtn() {\n    if (priorityBtn.yellow.checked) {\n        selectedPriority = priorityBtn.yellow.value;\n        return selectedPriority;\n    } else if (priorityBtn.orange.checked) {\n        selectedPriority = priorityBtn.orange.value;\n        return selectedPriority;\n    } else {\n        selectedPriority = \"HIGH\";\n        return selectedPriority;\n    }\n}\n\nfunction clearModal() {\n    form.title.value = \"\";\n    form.description.value = \"\";\n    form.dueDate.value = \"\";\n\n    let radioBtn = document.querySelector('input[name=\"priority-btn\"]:checked');\n    if (radioBtn) radioBtn.checked = false;\n}\n\nfunction addNewProjectToDisplay(project) {\n    let projectElement = document.createElement(\"div\");\n    projectElement.insertAdjacentHTML('beforeend', `\n        <div>${project.title}</div>\n        <div>${project.description}</div>\n        <div>${project.dueDate}</div>\n        <span class=\"priority-color-project\">${project.priority}</span>\n        <button class=\"edit-btn btn\">Edit</button>\n        <button class=\"delete-btn btn\">Delete</button>`);\n\n    // change priority element to proper color for new project\n    let priorityColorElement = projectElement.querySelector(\".priority-color-project\");\n\n    if (project.priority === \"LOW\") {\n        priorityColorElement.className += \" yellow-color\";\n    } else if (project.priority === \"MEDIUM\") {\n        priorityColorElement.className += \" orange-color\";\n    } else {\n        priorityColorElement.className += \" red-color\";\n    }\n\n    toDoProjectContainer.appendChild(projectElement);\n}\n\n//# sourceURL=webpack://todo-list/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\n\nconst toDoProjectContainer = document.getElementById(\"to-do-project-container\");\nconst addNewProjectBtn = document.getElementById(\"add-new-project-btn\");\nconst clearBtn = document.getElementById(\"clear-btn\");\nconst submitBtn = document.getElementById(\"submit-btn\");\nconst closeModalBtn = document.getElementById(\"close-btn\");\nconst form = {\n    title: document.getElementById(\"title\"),\n    description: document.getElementById(\"description\"),\n    dueDate: document.getElementById(\"due-date\"),\n    priority: document.getElementById(\"priority\")\n}\nconst priorityBtn = {\n    yellow: document.getElementById('low-priority-btn'),\n    orange: document.getElementById('medium-priority-btn'),\n    red: document.getElementById('high-priority-btn')\n}\nlet selectedPriority = \"\";\nlet index;\nconst indexFromStorage = localStorage.getItem(\"index\");\n\n// Initialize localStorageProjects from local storage if data exists.\n// This prevents data loss when the page is refreshed.\nlet localStorageProjects = JSON.parse(localStorage.getItem(\"myProjects\"));\n\n// defaults to prevent errors\nif (localStorageProjects == null) localStorageProjects = [];\nif (indexFromStorage && !isNaN(indexFromStorage)) {\n    index = JSON.parse(indexFromStorage);\n} else {\n    index = 0;\n}\n\nfunction ToDoProject(title, description, dueDate, priority, index) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.index = index;\n}\n\naddNewProjectBtn.addEventListener(\"click\", () => {\n    modal.showModal();\n})\n\nclearBtn.addEventListener(\"click\", () => {\n    localStorage.clear();\n    location.reload();\n})\n\ncloseModalBtn.addEventListener(\"click\", (e) => {\n    e.preventDefault(); // prevents modal (dialog element in HTML) from clearing projects when clicked\n    modal.close();\n})\n\n// new project added to display and local storage\nsubmitBtn.addEventListener(\"click\", (e) => {\n    e.preventDefault();  // prevents form from trying to submit\n    modal.close();\n\n    index++;\n    localStorage.setItem(\"index\", JSON.stringify(index));\n    index = parseInt(localStorage.getItem(\"index\"), 10);\n    console.log(`index added: ${index}`)\n\n    ;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.findValueSelectedRadioBtn)();\n\n    let newProject = new ToDoProject(form.title.value, form.description.value, form.dueDate.value, selectedPriority, index);\n    localStorageProjects.push(newProject);\n    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addNewProjectToDisplay)(newProject);\n\n    localStorage.setItem(\"myProjects\", JSON.stringify(localStorageProjects));\n    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.clearModal)();\n});\n\n// loads projects saved to local storage when page is refreshed\nfunction loadProjects() {\n    let projects = JSON.parse(localStorage.getItem(\"myProjects\"));\n\n    if (projects == null || projects.length == 0) return;\n\n    for (let i = 0; i < projects.length; i++) {\n        // . notation because projects array is full of objects\n        selectedPriority = projects[i].priority;\n        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addNewProjectToDisplay)(projects[i]);\n    }\n\n    return;\n}\n\nwindow.onload = loadProjects;\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;