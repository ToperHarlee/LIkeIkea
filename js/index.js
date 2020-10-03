'use strict';
//day-2
import generateHeader from "./generateHeader.js";
import generateFooter from "./generateFooter.js";
import generateCatalog from "./generateCatalog.js";
import { loadData } from './loadData.js';
import generateGoodsPage from "./generateGoodsPage.js";
import generateItemPage from "./generateItemPage.js";
import './storage.js';

generateHeader();
generateFooter();
generateCatalog();
generateGoodsPage();
generateItemPage();
loadData();









