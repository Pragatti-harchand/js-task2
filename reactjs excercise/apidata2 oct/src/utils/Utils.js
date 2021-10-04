/**
 *
 * @param {Array} array Orignal array for slicing
 * @param {Number} currentPage Current result page
 * @param {Number} pageSize Chuks of result we want to show on a single page
 * @returns
 *
 */

 function paginate(array, rowsPerPage, page) {
	let startIndex = page * rowsPerPage;
	let endIndex = startIndex + page;
	return array.slice(startIndex, endIndex);
	
}

/**
 *
 * @param {Array} array
 * @returns
 */

function searchArrayOfObjects(array, keyword) {
	return array.filter((el) => {
		el = el.title.toLowerCase();
		keyword = keyword.toLowerCase();
		return el.includes(keyword);
	});
}

/**
 *
 * @param {Array} array
 * @param {String} sortBy
 * @param {Boolean} sortOrder
 * @description sorts a given array of objects based on column and sort order
 */
function sorting(array, sortBy, sortOrder) {
	let sortColumnType = typeof array[0][sortBy];
	console.log(sortColumnType);
	if (sortColumnType === "number") {
		array.sort((a, b) => {
			a = a[sortBy];
			b = b[sortBy];
			if (sortOrder) return a - b;
			return b - a;
		});
	} else if (sortColumnType === "string") {
		array.sort((a, b) => {
			a = a[sortBy].toLowerCase();
			b = b[sortBy].toLowerCase();

			if (sortOrder) {
				if (a > b) return 1;
				if (a < b) return -1;
				return 0;
			} else {
				if (a > b) return -1;
				if (a < b) return 1;
				return 0;
			}
		});
	}
	return array;
}

export { paginate, searchArrayOfObjects, sorting };
